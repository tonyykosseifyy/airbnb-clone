import React from "react" ;
import "./Navbar.css";
import { AirbnbButton , UserButton } from "./navbar-components";
import { FiMenu } from "react-icons/fi" ;
import { noUserLink } from "../../assets/links";

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
          <div className="navbar-right">
            <AirbnbButton>Become a Host</AirbnbButton>
           
            <UserButton>
              <FiMenu />
              <div className="no-user-pic">
                <img 
                  src={noUserLink}
                  alt="no account" 
                />
              </div>
            </UserButton>
          </div>
        </div>
    </header>
  );
};

export default Navbar ;