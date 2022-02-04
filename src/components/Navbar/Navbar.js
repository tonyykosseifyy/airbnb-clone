import React from "react" ;
import "./Navbar.css";


const Navbar = () => {
  return (
    <header className="navbar">
        <div className="navbar-top">
          <div className="navbar-logo">
            <img 
              src="https://ohpartners.com/wp-content/uploads/2019/02/logo-airbnb-white-600x187.png"
              alt="airbnb" 
            />
          </div>
          <div className="navbar-center">
            <h4>Places to stay</h4>
            <h4>Experiences</h4>
            <h4>Online Experiences</h4>
          </div>
        </div>
    </header>
  );
};

export default Navbar ;