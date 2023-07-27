import React from 'react'
import { Swiper, SwiperSlide ,useSwiper} from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { EffectCoverflow, Pagination } from 'swiper';
import data from "../../utils/promotion.json"
import "./Promotion.scss"


const Promotion = () => {


  return (
    <div className="container">
        <h1>You Might Be Interested in </h1>
        <Swiper 
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView={'auto'}
          coverflowEffect={{
            rotate:0,
            stretch:0,
            depth:100,
            modifier:3,
          }}
          pagination={{ el: '.swiper-pagination', clickable: true }}

          
          modules={[EffectCoverflow,Pagination, ]}
          className='swiper-container'
          >
            <Sliderbutton/>
            <div className="cards">
                {data.map((item,i)=>(
                    <SwiperSlide key={i} className='swipersl'>
                        <div className='card'>
                            <img className='pro-img' src={item.image} alt="" />
                            <span className='discount1'>{item.discount}</span>
                            <span className='hotel1'>{item.hotel}</span>
                            <span className='place1'>{item.place}</span>
                        </div>
                    </SwiperSlide>
                ))}
            </div>

            
            <div className="swiper-pagination"></div>


            {/* button */}

            
        </Swiper>
    </div>
  )
}

export default Promotion

const Sliderbutton = () =>{
    const swiper = useSwiper()
    return(
      <div className="button">
        <button className='prebtn' onClick={()=> swiper.slidePrev()}>&lt;--</button>
        <button className='nexbtn'  onClick={()=> swiper.slideNext()}>--&gt;</button>
  
      </div>
    )
  }