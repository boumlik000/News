import React, { useState } from "react";
import "../styles/navbar.scss";
import {Link} from 'react-router-dom'

const  NAVBAR =()=>{

  const [isOpen,setIsOpne]= useState(false);

  return(
    <>
        
          <div className="Navbar">
            <span className="nav-logo">logo</span>
            <div className={`nav-items ${isOpen && "open"}`}>
              <Link to="/"> Home </Link>
              <Link to="/newsPage"> news category</Link>
            </div>
            <div className={`nav-toggle ${isOpen && "open"}`} onClick={()=> setIsOpne(!isOpen)}>
                <div className="bar"></div>
            </div>
          <div className="nav-filter"></div>
          </div>
       
    </>
  )
}
export default NAVBAR