import React from 'react';
import {Link} from 'react-router-dom'
import Btn from '../components/btn';
import TAG from '../components/tags';
import NAVBAR from '../components/nav';
import './article.scss';
import CARDNEWS1 from '../components/cardnews1';
import FOOTER from '../components/footer';

function ARTICLE() {
    return (
      <>
    {/* <nav>
    
    {/* -----------------------------
    -------------------------------
    ------------------------------------ */}
      <NAVBAR />
      <div className="img-title">
        <div className="img-filter">
          <img src="img/img1.jpg" alt="" className='img-article'/>
          <div className="filter"></div>
        </div>
        <h2 className='title-article'>title</h2>
        {/* <ICONTAG icon={item.icon} className="cardnews_2-logo" /> */}
      </div>      
      <article className="container my-5">
        <p className='description-article'>
          description
        </p>


        <div className='news-to-read mt-5'>
          <h1 className='title-second mb-4'>READ MORE ...</h1>
          <CARDNEWS1 />
        </div>
      </article>
      <footer>
        <FOOTER />
      </footer>


      </>
    );
  }
  
  export default ARTICLE;