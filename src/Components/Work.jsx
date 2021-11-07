 
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import one from './Photos/1.png';
import two from './Photos/2.png';
import three from './Photos/3.png';
import four from './Photos/4.png';
import five from './Photos/5.png';
import six from './Photos/6.png';
import seven from './Photos/7.png';
import keep from './Photos/keepapp.png';
import search from './Photos/searchapp.png';
import slot from './Photos/slotgame.png';
import todo from './Photos/todolist.png';




// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/effect-coverflow/effect-coverflow.min.css"
import "swiper/components/pagination/pagination.min.css"

import "./Work.css";


// import Swiper core and required modules
import SwiperCore, {
    Autoplay,EffectCoverflow,Pagination
} from 'swiper/core';

// install Swiper modules
SwiperCore.use([Autoplay,EffectCoverflow,Pagination]);


export default function App() {
  
  
  
  return (
    <>
    <div className="Wpage">
    <Swiper effect={'coverflow'} grabCursor={true} centeredSlides={true} loop={true} autoplay={{
  "delay": 1000,
  "disableOnInteraction": false
}}  slidesPerView={'auto'} coverflowEffect={{
        "rotate": 60,
        "stretch": 0,
        "depth": 300,
        "modifier": 1,
        "slideShadows": true
    }} pagination={true} className="mySwiper">
  <SwiperSlide><img src={one} /></SwiperSlide><SwiperSlide><img src={two} /></SwiperSlide><SwiperSlide><img src={three} /></SwiperSlide><SwiperSlide><img src={four} /></SwiperSlide><SwiperSlide><img src={five} /></SwiperSlide><SwiperSlide><img src={six} /></SwiperSlide><SwiperSlide><img src={seven} /></SwiperSlide>
  </Swiper>
  <div className="Wshow">
    <div className="Wp">
      <img src={four} className="Wimg" alt="Photos"/>
  <a href="http://sah2.surge.sh" target="_balnk" rel="noopener noreferrer"><button className="Wbtn">Visit to ERC20 TOKEN MANGER</button></a>
    </div>
    <div className="Wp">
      <img src={five} className="Wimg" alt="Photos"/>
  <a href="http://NFT721.surge.sh" target="_balnk" rel="noopener noreferrer"><button className="Wbtn">Visit to NFT MANGER</button></a>
    </div>
    <div className="Wp">
      <img src={six} className="Wimg" alt="Photos"/>
  <a href="http://election.surge.sh" target="_balnk" rel="noopener noreferrer"><button className="Wbtn">Visit to Election Dapp</button></a>
    </div>
    <div className="Wp">
      <img src={seven} className="Wimg" alt="Photos"/>
  <a href="http://expense___tracker.surge.sh" target="_balnk" rel="noopener noreferrer"><button className="Wbtn">Visit to Expense Tracker Dapp</button></a>
    </div>
    <div className="Wp">
      <img src={todo} className="Wimg" alt="Photos"/>
  <a href="http://todolist__.surge.sh" target="_balnk" rel="noopener noreferrer"><button className="Wbtn">Visit to todo list Dapp</button></a>
    </div>
  </div>
  <h1 >React websites</h1>
    <div className="Wp">
      <img src={one} className="Wimg" alt="Photos"/>
  <a href="http://realestate2.surge.sh" target="_balnk" rel="noopener noreferrer"><button className="Wbtn">Visit to react site</button></a>
    </div>
    <div className="Wp">
      <img src={three} className="Wimg" alt="Photos"/>
  <a href="http://shoes2.surge.sh" target="_balnk" rel="noopener noreferrer"><button className="Wbtn">Visit to react site</button></a>
    </div>
    <div className="Wp">
      <img src={two} className="Wimg" alt="Photos"/>
  <a href="http://consulting2.surge.sh" target="_balnk" rel="noopener noreferrer"><button className="Wbtn">Visit to react site</button></a>
    </div>
</div>
    </>
  )
}