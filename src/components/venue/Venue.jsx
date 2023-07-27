import React from "react";
import "./Venue.scss";
import venue from "../../assets/venue.mp4";
import {Swiper , SwiperSlide, useSwiper} from "swiper/react"
import "Swiper/css"
import data from '../../utils/slider.json'
import { sliderSettings } from "../../utils/Common";

const Venue = () => {
  return (
    <div className="venue" id="venue">
      <div className="video">
        <video src={venue} autoPlay muted loop></video>
        <h1>VENUES</h1>
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
                        <span className="price"> &#x20B9; {card.price}</span>
                    </div>
                    
                </SwiperSlide>
            ))}
            
        </Swiper>
      </div>

    </div>
  );
};

export default Venue;

const Sliderbutton = () =>{
  const swiper = useSwiper()
  return(
    <div className="button">
      <button onClick={()=> swiper.slidePrev()}>&lt;</button>
      <button onClick={()=> swiper.slideNext()}>&gt;</button>

    </div>
  )
}
