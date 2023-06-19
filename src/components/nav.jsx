import React, { useState } from "react";
import "../styles/navbar.scss";

const  NAVBAR =()=>{

  const [isOpen,setIsOpne]= useState(false);

  return(
    <>
        <div className="Navbar">
          <span className="nav-logo">logo</span>
          <div className={`nav-items ${isOpen && "open"}`}>
            <a href="/home">Home</a>
            <a href="/politics">Politics</a>
            <a href="/economics">Economics</a>
            <a href="/sport">Sport</a>
            <a href="/culture">culture</a>
            <a href="/cinema">cinema</a>
          </div>
          <div className={`nav-toggle ${isOpen && "open"}`} onClick={()=> setIsOpne(!isOpen)}>
              <div className="bar"></div>
          </div>
        </div>
    </>
  )
}
export default NAVBAR