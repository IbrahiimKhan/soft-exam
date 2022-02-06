import React from 'react'
import { API } from '../config'


const ShowImage = ({item,url}) => {
    return (
        <>
           <div className='product-img'>
               <img className='mb-3 img-fluid ' src={`${API}/${url}/photo/${item._id}`} alt={item.name}></img>
               </div> 
        </>
    )
}

export default ShowImage
