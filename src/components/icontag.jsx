import React from 'react';
import "../styles/btn.scss"
function ICONTAG({icon,className}) {
    return (
      <>
       <span className={`icontag ${className}`}>{icon}</span>
      </>
    );
  }
  
  export default ICONTAG;