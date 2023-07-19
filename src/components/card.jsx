import React, { useState,useEffect  } from 'react';
import "../styles/card.scss";
import SwiperCore ,{ Navigation, Pagination, Autoplay, EffectCoverflow } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';
import 'swiper/swiper-bundle.css';
import 'swiper/css/navigation';
import {profileHome} from "./filteerdata/profilebox"

SwiperCore.use([Navigation, Pagination, Autoplay,EffectCoverflow]);


function CARD_NEWS_PROFILE(props) {
    
    

      const [activeSlideId, setActiveSlideId] = useState(null);
      const activeSlide = profileHome.find((slide) => slide.id === activeSlideId);
      const [showActiveSlide, setShowActiveSlide] = useState(false);

      const handleSlideChange = (swiper) => {
        const realIndex = swiper.realIndex;
        const activeSlide = profileHome[realIndex];
        setActiveSlideId(activeSlide.id);
        setShowActiveSlide(false); // Reset showActiveSlide when the slide changes
      };

      useEffect(() => {
        const delay = setTimeout(() => {
          setShowActiveSlide(true);
        }, 100);
    
        return () => {
          clearTimeout(delay);
        };
      }, [activeSlideId]);
      

    return (
      <>
      
      <div className="container-fluid card-home">
        <div className="row row-card-home">
            <div className="col-lg-4 col-md-3 col-12">
              <Swiper
              
              effect="coverflow"
              grabCursor={true}
              centeredSlides={true}
              loop={true}
              slidesPerView={'auto'}
              speed={2000} 
              coverflowEffect={{
                  rotate: 20,
                  stretch: 270,
                  depth: 450,
                  modifier: 1,
                  slideShadows: false,
                }}
              className='swiper-main'
              autoplay={{
                  delay: 4000,
                  // disableOnInteractKion: true,
                  reverseDirection: true,
                }}
              onSlideChange={handleSlideChange}
              >
          {profileHome.map((slide) => (
              <SwiperSlide key={slide.id}
              className='swiper-Slide'>
              <div
                  className="swiper-slide-content"
              >
                  <img src={slide.imageUrl} alt={`Slide ${slide.id}`} className={`img-slider ${
                  slide.id === activeSlideId ? 'active' : ''
                  }`} />
                  <h1 className='small_title-slide'>{slide.title}</h1>
                  <span className='logo-home-profile'>{slide.icon}</span>
              </div>
              </SwiperSlide>
          ))}
              </Swiper>
            </div>
            <div className="col-lg-8 col-md-9 col-12 mt-md-0 mt-3">
              <div className={`card-news-details ${showActiveSlide ? 'show' : ''}`}>
              {showActiveSlide && (
                <div
                  className={`card-news-card ${
                    activeSlide.id === activeSlideId ? 'active' : ''
                  }`}
                >
                  <img
                    src={activeSlide.imageUrl}
                    alt={`Slide ${activeSlide.id}`}
                    className={`img-active_profile ${showActiveSlide ? 'show_img' : ''}`}
                  />
                  <div className='content_slide-full'>
                    <h1 className={`title_slide-full ${showActiveSlide ? 'show_title' : ''}`}>{activeSlide.title}</h1>
                    <p className='description_slide-full'>{activeSlide.description}</p>
                    <Link to={`/article/${activeSlide.id}`} key={activeSlide.id}>
                      <span className='reaad_more-slide-full '>Read More</span>                   
                    </Link>
                    <span className='timing-news'>12/12/2002</span>

                  </div>
                </div>
              )}
              </div>
            </div>
        </div>
      </div>
      </>
    );
  }
  
  export default CARD_NEWS_PROFILE;