import React, { useState, useEffect } from 'react';
import Layout from './Layout';
import { read, listRelated } from './apiCore';
import Card from './Card';
import ShowImage from './ShowImage';
import { addItem, updateItem, removeItem } from './cartHelpers';
import { Link, Redirect } from 'react-router-dom';

const Product = (props, showAddToCartButton = true, ) => {
   
    const [redirect, setRedirect] = useState(false);
    const [product, setProduct] = useState({});
    const [relatedProduct, setRelatedProduct] = useState([]);
    const [error, setError] = useState(false);

    const loadSingleProduct = productId => {
        read(productId).then(data => {
            if (data.error) {
                setError(data.error);
            } else {
                setProduct(data);
                // fetch related products
                listRelated(data._id).then(data => {
                    if (data.error) {
                        setError(data.error);
                    } else {
                        setRelatedProduct(data);
                    }
                });
            }
        });
    };


    const shouldRedirect = redirect => {
        if (redirect) {
          return <Redirect to="/cart" />;
        }
      };
    const addToCart = () => {
        // console.log('added');
        addItem(product, setRedirect(true));
      };
      const showAddToCartBtn = showAddToCartButton => {
        return (
          showAddToCartButton && (
            <button onClick={addToCart} className="btn primary-button card-btn-2  ">
              Add to cart
            </button>
          )
        );
      };

    useEffect(() => {
        const productId = props.match.params.productId;
        loadSingleProduct(productId);
    }, [props]);


    return (
        <>
       
           <div className="container-fluid">
               <div className="container">
               <div className="row mt-5">
                <div className="col-md-5 hero-img-section">
                    {/* {product && product.name && product.description && 
                    <Card product={product} showViewProductButton={false} />} */}
                    <ShowImage item={product} url="product"  to={`/product/${product._id}`}/>
                </div>

                <div className="col-md-7">
                   <div className="product-details">
                   <h2 className='product_name'>{product && product.name}</h2>
                   <h3 className='desc_p'>{product && product.description}</h3>
                   <h3 className='product_name'>Price:<strong>   ${product && product.price}</strong></h3>
                   <h3 className='product_name'>In Stock: <strong>{product && product.quantity}</strong></h3>
                   <h3  className='product_name'>Category:<strong>{product.category && product.category.name} </strong> </h3>
                   {shouldRedirect(redirect)}
                   {showAddToCartBtn(showAddToCartButton)}
                  
                  
                   </div>
                   
                </div>
            </div>
               </div>
           </div>
          
    
        <div className="container-fluid">
            <div className="container">
            <div className="row">
          <h2> Related Products</h2>
              {relatedProduct.map((p, i) => (
                  <div className="col-2 col-md-3 mb-2" key={i}>
                      <Card product={p} />
                  </div>
              ))}
          </div>
            </div>
        </div>
     
      </>
    );
};

export default Product;
