import React, { useState, useEffect } from 'react'
import './Slider.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper';
import "swiper/css";
import 'swiper/css/autoplay'
import 'swiper/css/navigation';
import { featured } from '../../Database/SortedPosts';
import { Link } from 'react-router-dom'

const Slider = () => {

    const [newData, setNewData] = useState([]);
    useEffect(() => {
        let tempData = []
        tempData.push(featured.slice(0, 6));
        tempData.push(featured.slice(6, 12));
        setNewData(tempData);
    }, []);

    return (
        <div className='my-5'>
            <Swiper
                modules={[Navigation, Autoplay]}
                slidesPerView={1}
                loop={true}
                navigation
                autoplay={{ delay: 5000, disableOnInteraction: false, pauseOnMouseEnter: true }}

            >
                {newData.map((element, index) => {
                    return (
                        <SwiperSlide key={index}>
                            <div className="slider-wrapper">
                                <div className="row">
                                    {element.map((element, index) => {
                                        return (
                                            <div className="col" key={index}>
                                                <div className="slider_img_box position-relative">
                                                    <Link to={element.url}><img src={element.image} alt="" /></Link>
                                                    <div className="slider-content position-absolute start-0 end-0 bottom-0">
                                                        <h3><Link to={element.url}>{element.title}</Link></h3>
                                                        <div className='slider-date text-center'>
                                                            <span>{element.date} - </span>
                                                            <span> 0 comment</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </div>

    )
}

export default Slider