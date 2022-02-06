import React, { useState, useEffect } from "react";
import Layout from "./Layout";
import { getProducts, getBraintreeClientToken,
     processPayment,createOrder } from "./apiCore";
import Card from './Card';
import { isAuthenticated } from '../auth/index';
import { Link } from 'react-router-dom';
import DropIn from 'braintree-web-drop-in-react';
import { emptyCart } from "./cartHelpers";
 
//sending the products in the cart as props so that the total price can be determined
const Checkout = ({ products  ,setRun = f => f, run = undefined }) => {
 
    const [data, setData] = useState({
        success: false,
        clientToken: null,
        error: '',
        instance: {},
        address: ''
    })
 
    const userId = isAuthenticated() && isAuthenticated().user._id
    const token = isAuthenticated() && isAuthenticated().token
 
    const getToken = (userId, token) => {
        getBraintreeClientToken(userId, token).then(data => {
            if(data.error) {
                setData({ ...data, error: data.error });
            } else {
                setData({ clientToken: data.clientToken });
            }
        });
    };
 
    useEffect(() => {
        getToken(userId, token)
    }, [])
 
    const handleAddress = event =>{
        setData({...data,address:event.target.value})
    }

    const getTotal = () => {
        return products.reduce((currentValue, nextValue) => {
            return currentValue + nextValue.count * nextValue.price;
        }, 0)
    };
 
//this detects whether to show the payment window or to tell the user to login to be 
//able to complete the checkout process
    const showCheckout = () => {
      return  isAuthenticated() ? (
            <div>{showDropIn()}</div>
        ) : (
                <Link to="/signin">
                    <button className="btn btn-primary">Sign in to checkout</button>
                </Link>
            );
    };
    
    let deliveryAddress = data.address

    const buy = () => {
        //send the nonce to your server
        //nonce = data.instance.requestPaymentMethod()
        let nonce;
        let getNonce = data.instance.requestPaymentMethod().then(data => {
            //console.log(data);
            nonce = data.nonce;
            // once you have nonce (card type, card number, etc) send nonce as 'paymentMethodNonce'
            //and also total that will be charged
            //console.log('send nonce and total to process: ', nonce, getTotal(products));
 
            const paymentData = {
                paymentMethodNonce: nonce,
                amount: getTotal(products)
            }
 
            processPayment(userId, token, paymentData)
            .then(response => {
                console.log(response)
                

                const createOrderData ={
                    products:products,
                    transaction_id: response.transaction_id,
                    amount:response.transaction.amount,
                    address:deliveryAddress
                }

                createOrder(userId,token,createOrderData)

                setData({ ...data, success: response.success });
                emptyCart(()=>{
                    console.log('payment success and empty cart');
                    setRun(!run); // update parent state
                        setData({
                            loading: false,
                            success: true
                        });
                })
                //empty cart
                // create order
            })
            .catch(error => {
                console.log(error);
                setData({ loading: false });
            });
        })
        .catch(error => {
           // console.log('dropin error: ', error)
            setData({ ...data, error: error.message });
        });
    };
 
 
//this displays the embedded panel where the user can pay to complete the order
//it is displayed only if the user token has been found and there are products in the cart
const showDropIn = () => (
    <div onBlur={() => setData({ ...data, error: '' })}>
        {data.clientToken !== null && products.length > 0 ? (
            <div>
                <div className="form-group mb-3">
                    <h3 className="text-muted">Delivery address:</h3>
                    <textarea
                        onChange={handleAddress}
                        className="form-control"
                        value={data.address}
                        placeholder="Type your delivery address here..."
                    />
                </div>

                <DropIn
                    options={{
                        authorization: data.clientToken,
                        paypal: {
                            flow: 'vault'
                        }
                    }}
                    onInstance={instance => (data.instance = instance)}
                />
                <button onClick={buy} className="btn pay_now btn-success btn-block">
                    Pay Now
                </button>
            </div>
        ) : null}
    </div>
);

const showError = error => (
    <div className="alert alert-danger" style={{ display: error ? '' : 'none' }}>
        {error}
    </div>
);

const showSuccess = success => (
    <div className="alert alert-info" style={{ display: success ? '' : 'none' }}>
        Thanks! Your payment was successful!
    </div>
);

const showLoading = loading => loading && <h2 className="text-danger">Loading...</h2>;

return (
    <div>
        <h2>Total: ${getTotal()}</h2>
        {showLoading(data.loading)}
        {showSuccess(data.success)}
        {showError(data.error)}
        {showCheckout()}
    </div>
);
};

export default Checkout;
