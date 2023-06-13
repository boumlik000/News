import React, { useState,useEffect } from 'react';
import "../styles/card.scss";
import SwiperCore ,{ Navigation, Pagination, Autoplay, EffectCoverflow } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/swiper-bundle.css';
import 'swiper/css/navigation';


SwiperCore.use([Navigation, Pagination, Autoplay,EffectCoverflow]);


function CARD_NEWS_PROFILE(props) {
    
    const slides = [
        {
            id: 1,
            imageUrl: './img/img1.jpg',
            title: 'Slide 1',
            descption:'dedscrtiption'
          },
          {
            id: 2,
            imageUrl: './img/img2.jpg',
            title: 'Slide 2',
            descption:'dedscrtiption'
          },
          {
            id: 3,
            imageUrl: './img/img3.jpg',
            title: 'Slide 3',
            descption:'dedscrtiption'
          },
          {
            id: 4,
            imageUrl: './img/img4.jpg',
            title: 'Slide 4',
            descption:'dedscrtiption'
          }
      ];

      const [activeSlideId, setActiveSlideId] = useState(null);
      const activeSlide = slides.find((slide) => slide.id === activeSlideId);
      const [showActiveSlide, setShowActiveSlide] = useState(false);

      const handleSlideChange = (swiper) => {
        const realIndex = swiper.realIndex;
        const activeSlide = slides[realIndex];
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
      <h1>CArd</h1>
      <div className="container">
        <div className="row row-card-home">
            <div className="col-4">
              <Swiper
              
              effect="coverflow"
              grabCursor={true}
              centeredSlides={true}
              loop={true}
              slidesPerView={'auto'}
              speed={1000} 
              coverflowEffect={{
                  rotate: 20,
                  stretch: 270,
                  depth: 450,
                  // modifier: 1,
                  slideShadows: false,
              }}
              className='swiper-main'
              // autoplay={{
              //     delay: 1000,
              //     // disableOnInteractKion: true,
              //     // reverseDirection: true,
              //   }}
              onSlideChange={handleSlideChange}
              >
          {slides.map((slide) => (
              <SwiperSlide key={slide.id}
              className='swiper-Slide'>
              <div
                  className={`swiper-slide-content `}
              >
                  <img src={slide.imageUrl} alt={`Slide ${slide.id}`} className={`img-slider ${
                  slide.id === activeSlideId ? 'active' : ''
                  }`} />
                  <h3 className='small_title-slide'>{slide.title}</h3>
              </div>
              </SwiperSlide>
          ))}
              </Swiper>
            </div>
            <div className="col-8">
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
                  <h3 className={`title_slide-full ${showActiveSlide ? 'show_title' : ''}`}>{activeSlide.title}</h3>
                  <p className='description_slide-full'>{activeSlide.descption}</p>
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