import React from 'react'
import "./Photography.scss";
import photography from "../../assets/photography.mp4"
import {Swiper , SwiperSlide, useSwiper} from "swiper/react"
import "Swiper/css"
import data from '../../utils/photography.json'
import { sliderSettings } from "../../utils/Common";

const Photography = () => {
  return (
    <div className="photography" id='photography'>
          <div className="video">
            <video src={photography} autoPlay muted loop></video>
            <h1>PHOTOGRAPHY</h1>
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
    
    export default Photography;
    
    const Sliderbutton = () =>{
      const swiper = useSwiper()
      return(
        <div className="button">
          <button onClick={()=> swiper.slidePrev()}>&lt;</button>
          <button onClick={()=> swiper.slideNext()}>&gt;</button>
    
        </div>
      )
    }