import React from 'react'
import "./Cater.scss";
import cater from "../../assets/cater.mp4"
import {Swiper , SwiperSlide, useSwiper} from "swiper/react"
import "Swiper/css"
import data from '../../utils/cater.json'
import { sliderSettings } from "../../utils/Common";

const Cater = () => {
  return (
    <div className="cater" id='cater'>
          <div className="video">
            <video src={cater} autoPlay muted loop></video>
            <h1>CATER</h1>
          </div>
    
          <div className="container">
            <Swiper {...sliderSettings}>
            <Sliderbutton/>
                {data.map((card,i)=>(
                    <SwiperSlide key={i}>
                        <div className="card">
                            <img  src={card.image} alt="Venue" />
                            <span className="venues">{card.venue} </span>
                            <span className="place">{card.place}</span>
                            <span className="price">from &#x20B9; {card.price}</span>
                        </div>
                        
                    </SwiperSlide>
                ))}
                
            </Swiper>
          </div>
    
        </div>
      );
    };
    
    export default Cater;
    
    const Sliderbutton = () =>{
      const swiper = useSwiper()
      return(
        <div className="button">
          <button onClick={()=> swiper.slidePrev()}>&lt;</button>
          <button onClick={()=> swiper.slideNext()}>&gt;</button>
    
        </div>
      )
    }