import React, { useState,useEffect  } from 'react';
import './news.scss';
import { useLocation } from 'react-router-dom';
import NAVBAR from '../components/nav';
import GALERYNEWS from '../components/gallerynewstags';
import CARDNEWS3 from '../components/cardnews3';
import FOOTER from '../components/footer';
import { profileHome } from '../components/filteerdata/profilebox';

function NEWS() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const selectedCategoryFromURL = searchParams.get('category') || 'All';

  useEffect(() => {
    setSelectedCategory(selectedCategoryFromURL);
  }, [selectedCategoryFromURL]);

  //filtring
  const [selectedCategory, setSelectedCategory] = useState('All');

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  return (
    <>
      <header>
        <NAVBAR />
      </header>
      <section className="container">
        <div className="filter-news pt-5 mt-2">
          <h1 className="text-center my-4">News</h1>
          <div className="text-center mb-5">
            <GALERYNEWS
              selectedCategory={selectedCategory}
              onCategoryChange={handleCategoryChange}
            />
          </div>
          <div className="cards-news">
            <div className="row">
              {profileHome
                .filter((item) =>
                  selectedCategory === 'All'
                    ? true
                    : item.categorie === selectedCategory
                )
                .map((item) => (
                  <div className="col-md-3 col-6" key={item.id}>
                    <CARDNEWS3 data={item} />
                  </div>
                ))}
            </div>
          </div>
        </div>
      </section>
      <footer className="mt-4 footer-news">
        <FOOTER />
        <div className="footer-filter"></div>
      </footer>
    </>
  );
}

export default NEWS;