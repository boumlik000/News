import React from 'react';
import "../styles/card.scss";
import SwiperCore ,{ Navigation, Pagination, Autoplay, EffectCoverflow } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import 'swiper/css/navigation';


SwiperCore.use([Navigation, Pagination, Autoplay]);


function CARD_NEWS_PROFILE(props) {
    return (
      <>
      <h1>CArd</h1>
      <div className="container">
      <div className="row">
        <div className="col-8">
            <div className='row card-news'>
                <Swiper
                    spaceBetween={-780}
                    slidesPerView={'auto'}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                >
                    <SwiperSlide>
                        <h1>titl1</h1>
                        <img src="./img/img1.jpg" alt="img" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <h1>titl2</h1>
                        <img src="./img/img1.jpg" alt="img" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <h1>titl3</h1>
                        <img src="./img/img1.jpg" alt="img" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <h1>titl4</h1>
                        <img src="./img/img1.jpg" alt="img" />
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
        <div className="col-4">

        </div>
      </div>
      </div>
      </>
    );
  }
  
  export default CARD_NEWS_PROFILE;