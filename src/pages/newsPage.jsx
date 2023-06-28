// import React from 'react';
// import './news.scss';
// import NAVBAR from '../components/nav';
// import GALERYNEWS from '../components/gallerynewstags';
// import CARDNEWS3 from '../components/cardnews3';
// import FOOTER from '../components/footer';
// function NEWS() {
//     return (
//         <>
//             <header>
//                 <NAVBAR />
//             </header>
//             <section className="container">
//                 <div className="filter-news pt-5 mt-2">
//                     <h1 className='text-center my-4' >News</h1>
//                     <div className='text-center mb-5'>
//                         <GALERYNEWS />
//                     </div>
//                     <div className='cards-news'>
//                         <div className="row">
//                             <div className="col-4">
//                                 <CARDNEWS3/>
//                             </div>
//                             <div className="col-4">
//                                 <CARDNEWS3/>
//                             </div>
//                             <div className="col-4">
//                                 <CARDNEWS3/>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </section>
//             <footer className='mt-4'>
//                 <FOOTER />
//             </footer>

//         </>


//     )



// }
// export default NEWS;
import React, { useState } from 'react';
import './news.scss';
import NAVBAR from '../components/nav';
import GALERYNEWS from '../components/gallerynewstags';
import CARDNEWS3 from '../components/cardnews3';
import FOOTER from '../components/footer';
import { profileHome } from '../components/filteerdata/profilebox';

function NEWS() {
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
                  <div className="col-4" key={item.id}>
                    <CARDNEWS3 data={item} />
                  </div>
                ))}
            </div>
          </div>
        </div>
      </section>
      <footer className="mt-4">
        <FOOTER />
      </footer>
    </>
  );
}

export default NEWS;