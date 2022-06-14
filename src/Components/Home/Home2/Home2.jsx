import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay'
import './Home2.css'
import { Link } from 'react-router-dom'

import React from 'react'

const Home2 = ({ data }) => {
    return (
        <div className="home2">
            <Swiper
                // install Swiper modules
                modules={[Navigation, Autoplay]}
                spaceBetween={50}
                slidesPerView={2}
                loop={true}
                navigation
                autoplay={{delay:5000, disableOnInteraction:false, pauseOnMouseEnter:true}}
            >
                {data.slice(0, 9).map((element, index) => {
                    return (
                        <SwiperSlide key={index}>
                            <Link to={element.url}><img src={element.image} alt="" /></Link>
                            <h3><Link to={element.url}>{element.title}</Link></h3>
                            <span>{element.date}</span>
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </div>
    )
}

export default Home2