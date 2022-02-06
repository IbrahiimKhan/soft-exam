import React from 'react';
import { Link } from 'react-router-dom';
import whitelogo from "../static/images/white_logo.png";
const Footer = () => {
  return <>
        {/* <!-- Footer --> */}
<footer className="text-center text-lg-start bg-light text-muted">
  {/* <!-- Section: Social media --> */}
 
  {/* <!-- Section: Links  --> */} 
  <section className="footer_section">
    <div className="container text-center text-md-start mt-5">
      {/* <!-- Grid row --> */}
      <div className="row mt-3">
        {/* <!-- Grid column --> */}
        <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
          {/* <!-- Content --> */}
          <img src={whitelogo} alt="" />
          <p>
          laksura.com is a Global Multifunctional trusted e- commerce site, Which focus on cloud computing digital streaming IoT and artificial intelligence.
          </p>
        </div>
        {/* <!-- Grid column --> */}

        {/* <!-- Grid column --> */}
        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
          {/* <!-- Links --> */}
          <h6 className="text-uppercase fw-bold mb-4">
            Menu
          </h6>
          <p>
            <Link to="" className="text-reset">Privacy Policy</Link>
          </p>
          <p>
            <Link to="" className="text-reset">Refund Policy</Link>
          </p>
          <p>
            <Link to="" className="text-reset">Terms & Conditions</Link>
          </p>
          <p>
            <Link to="" className="text-reset">About Us</Link>
          </p>
        </div>
        {/* <!-- Grid column -->

        <!-- Grid column --> */}
        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
          {/* <!-- Links --> */}
          <h6 className="text-uppercase fw-bold mb-4">
           Contact Us
          </h6>
          <p>
            <Link to="" className="text-reset">31 Del Janani, Flat-4, Road-6, Block-C, Banani Model Town, Dhaka -1213</Link>
          </p>
          <p>
            <Link to="" className="text-reset">Email: support@laksura.com</Link>
          </p>
          <p>
            <Link to="" className="text-reset">Contact no: +8801792-777660</Link>
          </p>

        </div>
        {/* <!-- Grid column -->

        <!-- Grid column --> */}
        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
          {/* <!-- Links --> */}
          <h6 className="text-uppercase fw-bold mb-4">
            Get In Touch
          </h6>
          <a href="" className="me-4 text-reset">
        <i className="fab fa-facebook-f"></i>
      </a>
      <a href="" className="me-4 text-reset">
        <i className="fab fa-twitter"></i>
      </a>
      <a href="" className="me-4 text-reset">
        <i className="fab fa-google"></i>
      </a>
      <a href="" className="me-4 text-reset">
        <i className="fab fa-instagram"></i>
      </a>
      <a href="" className="me-4 text-reset">
        <i className="fab fa-linkedin"></i>
      </a>
      <a href="" className="me-4 text-reset">
        <i className="fab fa-github"></i>
      </a>
        </div>
        {/* <!-- Grid column --> */}
      </div>
      {/* <!-- Grid row --> */}
    </div>
  </section>
  {/* <!-- Section: Links  -->

  <!-- Copyright --> */}
  <div className="text-center p-4 bottom-footer" style={{backgroundColor: "rgba(0, 0, 0, 0.05)"}}>
    © 2022 Copyright:
    <Link className="text-reset fw-bold" to="https://laksura.com/">www.laksura.com</Link>
  </div>
  {/* <!-- Copyright --> */}
</footer>
{/* <!-- Footer --> */}
  
  </>;
};

export default Footer;
