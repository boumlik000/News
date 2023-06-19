import React from 'react';
import {Link} from 'react-router-dom'
import Btn from '../components/btn';
import TAG from '../components/tags';

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
            <li className='mt-4'>
                <Link to="/search"> search </Link>
             </li>
            <li className='mt-4'>
                <Link to="/nav"> navbar </Link>
             </li>
            <li className='mt-4'>
                <Link to="/tags"> tags </Link>
                <TAG name="politics"/>
             </li>
            <li className='mt-4'>
                <Link to="/cd2"> card news 2 </Link>
             </li>
        </ul>
      </nav>
      </>
    );
  }
  
  export default Home;