import React from 'react'
import "./Decorators.scss";
import decoration from "../../assets/decoration.mp4"
import {Swiper , SwiperSlide, useSwiper} from "swiper/react"
import "Swiper/css"
import data from '../../utils/decoration.json'
import { sliderSettings } from "../../utils/Common";

const Decorators = () => {
    return (
        <div className="decorator" id='decorators'>
          <div className="video">
            <video src={decoration} autoPlay muted loop></video>
            <h1>DECORATORS</h1>
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
    
    export default Decorators;
    
    const Sliderbutton = () =>{
      const swiper = useSwiper()
      return(
        <div className="button">
          <button onClick={()=> swiper.slidePrev()}>&lt;</button>
          <button onClick={()=> swiper.slideNext()}>&gt;</button>
    
        </div>
      )
    }