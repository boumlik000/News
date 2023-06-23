import React from 'react';
import "../styles/gallerynews.scss"
import {TAGS} from "./filteerdata/profilebox"
function GALERYNEWS() {
    return (
      <>
       <h1>gallery news</h1>
       {TAGS.map((y)=>(
        <span className='news_categorie'>{y.categorie}</span>
       ))}
      </>
    );
  }
  
  export default GALERYNEWS;