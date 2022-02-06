import React from 'react';


var navItems = document.querySelectorAll(".bottom-nav-item");

navItems.forEach(function(e, i) {
  e.addEventListener("click", function(e) {
    navItems.forEach(function(e2, i2) {
      e2.classList.remove("active");
    });
    this.classList.add("active");
  });
});

const MobileHeader = () => {
  return <div>
      <div className="container-fluid">
          <div className="container">
          <header className="header">
  <div className="container">
    <nav className="bottom-nav">
      <div className="bottom-nav-item active">
        <div className="bottom-nav-link">
          <i className="material-icons">home</i>
          <span>Home</span>
        </div>
      </div>
      <div className="bottom-nav-item">
        <div className="bottom-nav-link">
          <i className="material-icons">favorite</i>
          <span>Wishlist</span>
        </div>
      </div>
      <div className="bottom-nav-item">
        <div className="bottom-nav-link">
          <i className="material-icons">shopping_cart</i>
          <span>Cart</span>
        </div>
      </div>
      <div className="bottom-nav-item">
        <div className="bottom-nav-link">
          <i className="material-icons">account_circle</i>
          <span>Account</span>
        </div>
      </div>

      <div className="bottom-nav-item">
        <div className="bottom-nav-link">
          <i className="material-icons">settings</i>
          <span>Setting</span>
        </div>
      </div>
    </nav>
  </div>
</header>
          </div>
      </div>
  </div>;
};

export default MobileHeader;
