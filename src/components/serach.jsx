import React from 'react';
import "../styles/search.scss"
import {FaSearch} from 'react-icons/fa'
function SEARCH(props) {
    return (
      <>
      <div className="search">
        <input type="text" className='input_search'placeholder='Search ...' />
        <button className='icon-search'><FaSearch /> </button>
      </div>
      </>
    );
  }
  
  export default SEARCH;