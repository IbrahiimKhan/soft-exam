import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { getProducts, list } from './apiCore'
import ProductHeading from './ProductHeading'


const Home = () => {


    const [productBySell,setProductBySell] = useState([])
    const [productByArrival,setProductByArrival] = useState([])
    const [productByCategory,setProductByCategory] = useState([])
    const [error,setError] = useState(false)
    const [show, setShow] = useState(false);

const loadProductsBySell = ()=>{
    getProducts({category:"sold"}).then(data =>{
        if(data.error){
            setError(data.error)
        }
        else{
            console.log(data);
            setProductBySell(data)
        }
    })

}

const loadProductsByArrival = ()=>{
    getProducts('createdAt').then(data =>{
        if(data.error){
            setError(data.error)
        }
        else{
            setProductByArrival(data)
        }
    })

}

  

useEffect(()=>{
    // const loadCategoryProducts = async () => {
    //     const { data } = await axios.get(
    //       `http://localhost:8000/api/category/61fc84c2dcbc5462610222e3`
    //     );
    //     console.log(data); // HERE YOU GET ALL PRODUCTS ON laptop
    //     // now put this data in state and display on the page
    //   };
    //   loadCategoryProducts();
    loadProductsByArrival()
    loadProductsBySell()
},[])

    return (
     <>

     <h1>To participate please sign in</h1>

        {/* <Checkbox/> */}
       
          {/* <ProductHeading name="Best Sellers"/>
          <div className="container">
          <div className='row'>
          {productBySell.map((product,i)=>(
          <div key={i} className="col-2 beautifull_card_me mb-3 text-center">
          <Card  product={product}/>
          </div>
          
          ))}
          </div>
          </div>
          <ProductHeading name="New Arrival"/>
          <div className="container">
          <div className='row'>
          {productByArrival.map((product,i)=>(
             <div key={i} className="col-2 beautifull_card_me mb-3 text-center">
             <Card  product={product}/>
             </div>
              ))}
          </div>
          </div> */}
     
     </>
    )
}

export default Home
