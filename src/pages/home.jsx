import React from 'react';
import {Link} from 'react-router-dom'

function Home() {
    return (
      <>
      <h1 className='display-1 text-center'>Home </h1>
      <nav>
        <ul>
            <li>
                <Link to="/btn"> btn </Link>
             </li>
        </ul>
      </nav>
      </>
    );
  }
  
  export default Home;