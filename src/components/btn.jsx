import React from 'react';
import "../styles/btn.scss"
function BTN(props) {
    return (
      <>
      <span className="btn1 btn">{props.text}</span>
      </>
    );
  }
  
  export default BTN;