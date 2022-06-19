import React, { useState, useEffect } from 'react'
import './Slider.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper';
import "swiper/css";
import 'swiper/css/autoplay'
import 'swiper/css/navigation';
import { Link } from 'react-router-dom'
import { collection, getDocs } from 'firebase/firestore/lite';
import { query, where, orderBy, limit } from "firebase/firestore";
import { db } from '../../Database/FireStore'

const Slider = () => {
    const [featured, setFeatured] = useState([]);

    async function getAllPosts(db, lmt, coll) {
        const citiesCol = collection(db, coll);
        const q = query(citiesCol, where("categories", "array-contains-any", ["fitness"]), orderBy("date", "desc"), limit(lmt));
        const citySnapshot = await getDocs(q);
        const cityList = citySnapshot.docs.map(doc => doc.data());
        return cityList;
    }

    useEffect(() => {
        getAllPosts(db, 12, 'Posts')
            .then((response) => {
                let tempData = []
                tempData.push(response.slice(0, 6));
                tempData.push(response.slice(6, 12));
                setFeatured(tempData);
                console.log(tempData)
            });
    }, []);

    const dt = (date) => {
        let d = new Date(date);
        let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'Sepetember', 'October', 'November', 'December'];
        return months[d.getMonth()] + ' ' + d.getDate() + ', ' + d.getFullYear()
      }

    return (
        <div className='my-5'>
            <Swiper
                modules={[Navigation, Autoplay]}
                slidesPerView={1}
                loop={true}
                navigation
                autoplay={{ delay: 5000, disableOnInteraction: false, pauseOnMouseEnter: true }}

            >
                {featured.map((element, index) => {
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
                                                        <h3><Link to={"/"+element.url}>{element.title}</Link></h3>
                                                        <div className='slider-date text-center'>
                                                            <span>{dt(element.date)} - </span>
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