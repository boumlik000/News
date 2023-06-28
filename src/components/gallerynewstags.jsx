import "../styles/gallerynews.scss"
// import React from 'react';
import React from 'react';
import { TAGS } from './filteerdata/profilebox';

function GALERYNEWS({ selectedCategory, onCategoryChange }) {
  return (
    <>
      {TAGS.map((tag) => (
        <span
          key={tag.id}
          className={`news_categorie ${
            tag.categorie === selectedCategory ? 'active' : ''
          }`}
          onClick={() => onCategoryChange(tag.categorie)}
        >
          {tag.categorie}
        </span>
      ))}
    </>
  );
}

export default GALERYNEWS;