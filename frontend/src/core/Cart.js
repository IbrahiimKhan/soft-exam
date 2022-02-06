import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Layout from './Layout';
import { getCart } from './cartHelpers';
import Card from './Card';
import Checkout from './Checkout';

const Cart = () => {
    const [items, setItems] = useState([]);
    const [run, setRun] = useState(false);

    useEffect(() => {
        setItems(getCart());
    }, [run]);

    const showItems = items => {
        return (
            <div>
                {items.map((product, i) => (
                   
                            <Card  key={i}                   
                            product={product}
                            showAddToCartButton={false}
                            cartUpdate={true}
                            showRemoveProductButton={true}
                            setRun={setRun}
                            run={run}
                            />
                   
                    
                ))}
            </div>
        );
    };

    const noItemsMessage = () => (
        <h2>
            Your cart is empty. <br /> <Link  className='continue' to="/shop">Continue shopping</Link>
        </h2>
    );

    return (
        
            <>
            <div className="container-fluid">
                <div className="container">
                <div className="row mt-5 ">
                <div className="col-4 col-sm-12 beautiful_cart">
                    {items.length > 0 ? showItems(items) : noItemsMessage()}
                </div>

                <div className="col-6 col-sm-12 sm-12-col">
                 <div className="summary text-center">
                     <h2>Cart summary:</h2>
                 </div>
                 <h3>Your cart has {`${items.length}`} items</h3>
                 <Checkout setRun={setRun} products={items} />
                </div>
            </div>
                </div>
            </div>
            </>
    );
};

export default Cart;
