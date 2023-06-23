import React from 'react';
import './home.scss';
import NAVBAR from '../components/nav';
import CARD_NEWS_PROFILE from '../components/card';
import CARDNEWS2 from '../components/cardnews2';
import SEARCH from '../components/serach';
import TAG from '../components/tags';

function Home() {
    return (
      <>
        <header className='home-header'>
                <div className="container-fluid shadow-1">
                    <NAVBAR />
                </div>
        </header>
        <div className='home-header_section'>
            <div className="filter"></div>
            <div className="pt-5">
                <CARD_NEWS_PROFILE />
            </div>
        </div>
        <section className="home-news-section">
            <div className="container">
                <SEARCH />
                <div className="row">
                    <div className="col-12 pt-5 d-flex justify-content-center">
                        <TAG name="politics"/> 
                        <TAG name="economics"/> 
                        <TAG name="sport"/> 
                        <TAG name="culture"/> 
                        <TAG name="cinema"/> 
                    </div>
                </div>
                <div className="row mt-5 pt-4">
                    <div className="col-md-8">
                        ps1
                    </div>
                    <div className="col-md-4">
                        <div className="home-week-news">
                            {/* <div className="filter"></div> */}
                            <h2 className='home-news-section_title'>this week</h2>
                            <CARDNEWS2 />
                        </div>
                    </div>
                </div>
            </div>
        </section>
        


      </>
    );
  }
  
  export default Home;