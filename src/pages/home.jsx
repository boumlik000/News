import React from 'react';
import './home.scss';
import NAVBAR from '../components/nav';
import CARD_NEWS_PROFILE from '../components/card';
import CARDNEWS2 from '../components/cardnews2';
import SEARCH from '../components/serach';
import { Swiper, SwiperSlide } from 'swiper/react';
import  { Navigation, Pagination, EffectCoverflow } from 'swiper';
import CARDNEWS1 from '../components/cardnews1';
import FOOTER from '../components/footer';

function Home() {
    
    return (
      <>
        <NAVBAR />
        <div className='home-header_section'>
            <div className='img-home'>
                <img src="img/img1.jpg" alt="" className='img-article'/>
                <div className="filter"></div>
            </div>
            <CARD_NEWS_PROFILE />
        </div>
        <section className="home-news-section pb-4 my-2">
            <div className="container">
                <SEARCH />
                <div className="row mt-5 pt-4">
                    <div className="col-md-8">
                        <div className="home-today-news">
                            <h2 className='home-news-section_title'>Today's news</h2>
                            {/* <CARDNEWS1 /> */}
                            <Swiper
                                // effect="coverflow"
                                grabCursor={true}
                                centeredSlides={true}
                                slidesPerView={'auto'}
                                speed={2000} 
                                className='swiper-container'
                                // coverflowEffect={{
                                //     rotate:0,
                                //     stretch:0,
                                //     deepth:0,
                                //     modifier:2.5,
                                // }}
                                navigation={{
                                    clickable:true,
                                    nextEl:'.swiper-button-next',
                                    prevEl:'.swiper-button-prev',
                                }}
                                pagination={{el:'.swiper-pagination',clickable:true}}
                                modules={[EffectCoverflow,Pagination,Navigation]}
                            >
          
                                <SwiperSlide className='swiper-Slide'>
                                    <CARDNEWS1 />
                                </SwiperSlide>
                                <SwiperSlide className='swiper-Slide'>
                                    <CARDNEWS1 />
                                </SwiperSlide>

                                <div className="slider-controler">
                                    <div className="swiper-button-prev slider-arrow">
                                        {/* <FcPrevious /> */}
                                    </div>
                                    <div className="swiper-button-next slider-arrow">
                                        {/* <FcNext /> */}
                                    </div>
                                    <div className="swiper-pagination"></div>
                                </div>
                            </Swiper>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="home-week-news">
                            <h2 className='home-news-section_title'>this week</h2>
                            <CARDNEWS2 />
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <footer>
            <FOOTER/>
        </footer>
        


      </>
    );
  }
  
  export default Home;