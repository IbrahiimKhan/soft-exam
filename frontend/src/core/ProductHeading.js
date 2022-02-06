import React from 'react';

const ProductHeading = props => {
  return <>
     <div className="container-fluid section-head mt-4 mb-4">
          <div className="container">
              <div className="row d-flex align-items-center ">
                  <div className="col-md-6 col-sm-6 head_h2">
                     <h3 className=''>{props.name}</h3>
                  </div>
                  <div className="col-md-6 col-sm-6 d-flex tarchera">
                  <div className="auxilary-search">
                      <button className='btn primary-button btn-primary heading-btn'>View All</button>
                  </div>
                  </div>
              </div>
          </div>
          </div>
  </>;
};

export default ProductHeading;
