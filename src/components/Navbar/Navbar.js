import React, { useState } from "react" ;
import "./Navbar.css";
import "./Navbar-bottom.css";
import { AirbnbButton , UserButton } from "./navbar-components";
import { FiMenu } from "react-icons/fi" ;
import { noUserLink } from "../../assets/links";

const Navbar = () => {
  const [ exp , setExp ] = useState(0);
  const [ toggle , setToggle ] = useState(false);
  return (
    <header className="navbar">
        <div className="navbar-top">
          <div className="navbar-logo">
            <img 
              src="https://ohpartners.com/wp-content/uploads/2019/02/logo-airbnb-white-600x187.png"
              alt="airbnb" 
            />
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbyRQK8xCJfWyxd4IsEzs-z7Lpe8HbRzTdzwjwlN0YHent3ql4zyeTbWg2vMxFrSsN7C8&usqp=CAU"
              alt="aribnb"
            />
          </div>
          <div className="navbar-center navbar-center-a">
            <h4 className={exp === 0 && "active"} onClick={() => setExp(0)}>Places to stay</h4>
            <h4 className={exp === 1 && "active"} onClick={() => setExp(1)}>Experiences</h4>
            <h4>Online Experiences</h4>
          </div>
          <div className="navbar-right">
            <AirbnbButton>Become a Host</AirbnbButton>
            <AirbnbButton style={{lineHeight:"0px",padding:"0 15px"}}>
              <img style={{height:"20px"}} src={require("../../assets/worldwide.svg")} alt="worldwide"/>
            </AirbnbButton>
            <UserButton onClick={() => setToggle(!toggle)}>
              <FiMenu />
              <div className="no-user-pic">
                <img 
                  src={noUserLink}
                  alt="no account" 
                />
              </div>
            </UserButton>
            <div className={`navbar-links ${toggle && "navbar-links-active"}`}>
              <a href="">Sign Up</a>
              <a href="">Log In</a>
              <div />
              <a href="">Host your home</a>
              <a href="">Host an experience</a>
              <a href="">Help</a>
            </div>
          </div>
        </div>
        <div className="navbar-bottom">
          <div className="navbar-center navbar-center-b">
            <h4 className={exp === 0 && "active"} onClick={() => setExp(0)}>Places to stay</h4>
            <h4 className={exp === 1 && "active"} onClick={() => setExp(1)}>Experiences</h4>
            <h4>Online Experiences</h4>
          </div>
          <div className="navbar-search">
            
          </div>
        </div>
    </header>
  );
};

export default Navbar ;