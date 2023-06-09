import React from 'react';
import { useParams } from 'react-router-dom';
import NAVBAR from '../components/nav';
import './article.scss';
import CARDNEWS1 from '../components/cardnews1';
import FOOTER from '../components/footer';
import { profileHome } from '../components/filteerdata/profilebox';

function ARTICLE() {
    const { id } = useParams();
    const articleData = profileHome.find((item) => item.id === parseInt(id));

    if (!articleData) {
      return <div>Article not found</div>;
    }
    return (
      <>
    {/* <nav>
    
    {/* -----------------------------
    -------------------------------
    ------------------------------------ */}
      <NAVBAR />
      <div className="img-title">
        <div className="img-filter">
          <img src={articleData.imageUrl} alt="" className='img-article'/>
          <div className="filter"></div>
        </div>
        <h2 className='title-article'>{articleData.title}</h2>
        {/* <ICONTAG icon={item.icon} className="cardnews_2-logo" /> */}
      </div>      
      <article className="container my-5">
        <p className='description-article'>
        {articleData.description}
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