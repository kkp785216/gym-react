import React from 'react'
import './RelatedPosts.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import { Link } from 'react-router-dom';

const RelatedPosts = ({ data }) => {
    const handleTitle = (title) => {
        let str;
        let arr = title.split(" ");
        if(arr.length >= 8){
            let tempstr = ""
            for(let i=0; i<8; i++){
                tempstr += arr[i] + " ";
            }
            tempstr = tempstr.replace(/ $/, "") + "...";
            str = tempstr;
        }
        else{
            str = title;
        }
        return str;
    }
    return (
        <div className="related-post-wrapper">
            <h3 className='pb-2'>Related Posts</h3>
            <div className="related-posts pt-2">
                <Swiper
                    modules={[Pagination]}
                    spaceBetween={16}
                    slidesPerView={3}
                    pagination={{ clickable: true }}
                    loop={true}
                >
                    {data && data.length >= 1 && data.map((element, index) => {
                        return (
                            <SwiperSlide key={index}>
                                <div className='related-posts-child'>
                                    <Link to={element.url}><img src={element.image} alt="" width="100%" /></Link>
                                    <h3><Link to={element.url}>{handleTitle(element.title)}</Link></h3>
                                    <span>{element.date}</span>
                                </div>
                            </SwiperSlide>
                        )
                    })}
                </Swiper>
            </div>
        </div>
    )
}

export default RelatedPosts