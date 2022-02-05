import React, { useState } from "react" ;
import "./Navbar.css";
import "./Navbar-bottom.css";
import { AirbnbButton , UserButton , Input , SearchButton } from "./navbar-components";
import { FiMenu } from "react-icons/fi" ;
import { noUserLink } from "../../assets/links";
import { IoSearchOutline } from "react-icons/io";

const Navbar = () => {
  const [ exp , setExp ] = useState(0);
  const [ toggle , setToggle ] = useState(false);
  const [ selected , setSelected ] = useState(0);
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
            <UserButton onClick={() => setToggle(!toggle)} tabindex="0" onBlur={() => setToggle(false)}>
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
          <div tabindex="0" onBlur={() => setSelected(0)} className="navbar-search" style={{background:selected !== 0 && "rgb(239, 239, 243"}}>
            
           { exp === 0 ? 
           <> 
           <div onClick={() => setSelected(1)} className={`navbar-search-component location ${selected === 1 && "search-active"}`}>
              <h4>Location</h4>
              <Input type="text" placeholder="Where are you going?" />
            </div>
           <div onClick={() => setSelected(2)} className={`navbar-search-component check ${selected === 2 && "search-active"}`}>
               <h4>Check In</h4>
               <p>Add Dates</p>
             </div>
             <div onClick={() => setSelected(3)} className={`navbar-search-component check ${selected === 3 && "search-active"}`}>
               <h4>Check Out</h4>
               <p>Add Dates</p>
             </div>
             <div onClick={() => setSelected(4)} className={`navbar-search-component guests ${selected === 4 && "search-active"}`}>
               <h4>Guests</h4>
               <p>Add Guests</p>
             </div>
           </> : 
           <>
           <div onClick={() => setSelected(1)} className={`navbar-search-component location-exp ${selected === 1 && "search-active"}`}>
              <h4>Location</h4>
              <Input type="text" placeholder="Where are you going?" />
            </div>
            <div onClick={() => setSelected(5)} className={`navbar-search-component date ${selected === 5 && "search-active"}`}>
              <div className="navbar-search-component-search">
                <div>
                  <h4>Date</h4>
                  <p>Add When you want to go</p>
                </div>
                <SearchButton><IoSearchOutline /><span>Search</span></SearchButton>
              </div>
              
            </div>
          </>
         }
          </div>
        </div>
    </header>
  );
};

export default Navbar ;