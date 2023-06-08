import React from 'react';
import {Link} from 'react-router-dom'
import Btn from '../components/btn';

function Home() {
    return (
      <>
      <h1 className='display-1 text-center'>Home </h1>
      <nav>
        <ul>
            <li>
                <Link to="/btn"> btn </Link>
                <Btn text="salam" />
             </li>
            <li className='mt-4'>
                <Link to="/card"> Card </Link>
             </li>
        </ul>
      </nav>
      </>
    );
  }
  
  export default Home;