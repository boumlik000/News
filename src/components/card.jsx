import React, { useState } from 'react';
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
          },
          {
            id: 2,
            imageUrl: './img/img2.jpg',
            title: 'Slide 2',
          },
          {
            id: 3,
            imageUrl: './img/img3.jpg',
            title: 'Slide 3',
          },
          {
            id: 4,
            imageUrl: './img/img4.jpg',
            title: 'Slide 4',
          }
      ];
      const [activeSlideId, setActiveSlideId] = useState(1);
      
      const activeSlide = slides.find((slide) => slide.id === activeSlideId);

      const handleSlideChange = (swiper) => {
        const realIndex = swiper.realIndex;
        const activeSlide = slides[realIndex];
        setActiveSlideId(activeSlide.id);
      };

    return (
      <>
      <h1>CArd</h1>
      <div className="container">
        <div className="row">
            <div className="col-6">
                <Swiper
                
                autoplay={true}
                effect="coverflow"
                grabCursor={true}
                centeredSlides={true}
                loop={true}
                slidesPerView="auto"
                speed={1000} 
                coverflowEffect={{
                    rotate: 20,
                    stretch: 80,
                    depth: 200,
                    modifier: 4,
                    slideShadows: false,
                }}
                onSlideChange={handleSlideChange}
                >
                {slides.map((slide) => (
                    <SwiperSlide key={slide.id}>
                    <div
                        className={`swiper-slide-content ${
                        slide.id === activeSlideId ? 'active' : ''
                        }`}
                    >
                        <img src={slide.imageUrl} alt={`Slide ${slide.id}`} />
                        <h3>{slide.title}</h3>
                    </div>
                    </SwiperSlide>
                ))}
                </Swiper>
            </div>
            <div className="col-6">
            <div className="card-news-details">
                <div
                    className={`card-news-card ${
                    activeSlide.id === activeSlideId ? 'active' : ''
                    }`}
                >
                    <img src={activeSlide.imageUrl} alt={`Slide ${activeSlide.id}`} />
                    <h3>{activeSlide.title}</h3>
                    <p>ID:{activeSlide.id}</p>
                </div>
                </div>
            </div>
        </div>
      </div>
      </>
    );
  }
  
  export default CARD_NEWS_PROFILE;