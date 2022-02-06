import React from 'react';
import home from '../static/images/1.png'
import house from '../static/images/2.png'
import fashion from '../static/images/3.png'
import { Link } from 'react-router-dom';

const Slider = () => {
  return <>

  <div className="container slider-section">
         <div className="row">
             <div className="col-md-3 remove_kr " style={{paddingRight:0}}>
             <ul className="list-group">
               <Link to="/shop" className='text-decoration-none'><li className="list-group-item"><i className="fas fa-motorcycle"></i> Motorbike</li></Link> 
               <Link to="/shop" className='text-decoration-none'> <li className="list-group-item"><i className="fas fa-leaf"></i> Tree</li></Link> 
               <Link to="/shop" className='text-decoration-none'><li className="list-group-item"><i className="fas fa-car"></i> Car</li></Link> 
               <Link to="/shop" className='text-decoration-none'> <li className="list-group-item"><i className="fas fa-ring"></i> Ornaments</li></Link> 
               <Link to="/shop" className='text-decoration-none'><li className="list-group-item"><i className="fas fa-dove"></i> Birds</li></Link> 
               <Link to="/shop" className='text-decoration-none'> <li className="list-group-item"><i className="fas fa-book"></i> Books</li></Link> 
               <Link to="/shop" className='text-decoration-none'><li className="list-group-item"><i className="fas fa-shopping-basket"></i> Grocery Items</li></Link> 
                </ul>
             </div>
             <div className="col-lg-9 col-md-12 carousel">
                
             <div className="careousel-main">
                                        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        </div>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                            <img src={home} className="d-block w-100" alt="home"/>
                            </div>
                            <div className="carousel-item">
                            <img src={house} className="d-block w-100" alt="house"/>
                            </div>
                            <div className="carousel-item">
                            <img src={fashion} className="d-block w-100" alt="fashion"/>
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                        </div>
                 </div>
             </div>
         </div>
     </div>

  </>;
};

export default Slider;
