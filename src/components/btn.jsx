import React from 'react';
import "../styles/btn.scss"
function Btn(props) {
    return (
      <>
      <span className="btn1 btn">{props.text}</span>
      </>
    );
  }
  
  export default Btn;