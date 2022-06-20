import React, { useEffect, useRef } from 'react'
import './MegaMenu.css'
import { Link } from 'react-router-dom'

const MegaMenu = (props) => {
    const { data } = props;
    const hover = useRef(null);

    useEffect(() => {
        setTimeout(() => {
            document.querySelector('.moreList').classList.add('on');
            document.querySelector('.moreContent').classList.add('on');
        }, 0);
    }, []);

    const handleHover = (e) => {
        document.querySelectorAll('.moreList').forEach((element) => {
            element.classList.remove('on');
        })
        document.querySelectorAll('.moreContent').forEach((element) => {
            element.classList.remove('on');
        });
        e.target.classList.add('on');
        document.querySelector(`.moreContent_${/moreList_[0-9]{1,}/g.exec(e.target.className)[0].replace('moreList_', '')}`).classList.add('on');
    }

    return (
        <div className="mega-wrapper">
            <div className="mega-progress"></div>
            <div className="row m-0 mega-row">
                {props.menu &&
                    <div className="row m-0 p-0 fitness-row">
                        <div className="col p-0">
                            <ul className='text-start'>
                                {props.multiData.map((element, index) => {
                                    return (
                                        <li key={index}><Link to={element.url} className={`moreList moreList_${index}`} onMouseEnter={handleHover} ref={hover}>{element.category}</Link></li>
                                    )
                                })}
                            </ul>
                        </div>
                        <div className="col p-0 position-relative">
                            {props.multiData.map((element, index) => {
                                return (
                                    <div className={`row m-0 mega-row moreContent position-absolute top-0 start-0 end-0 moreContent_${index}`} key={index}>
                                        {element.data.slice(0, 4).map((element, index) => {
                                            return (
                                                <div className="col p-0" key={index}>
                                                    <div className="mega-img-box position-relative">
                                                        <Link to={element.url}><img src={element.image} width="100%" height="100%" alt="" /></Link>
                                                        <Link className='position-absolute start-0 bottom-0' to={element.category_id.url}>{element.category_id.name}</Link>
                                                    </div>
                                                    <div className='mega-text-content'>
                                                        <h3>
                                                            <Link to={element.url} className="default-hover">{element.title}</Link>
                                                        </h3>
                                                        <span>{element.date}</span>
                                                    </div>
                                                </div>
                                            )
                                        })}
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                }
                {data && data.slice(0, 5).map((element, index) => {
                    return (
                        <div className="col p-0" key={index}>
                            <div className="mega-img-box position-relative">
                                <Link to={element.url}><img src={element.image} width="100%" height="100%" alt="" /></Link>
                                <Link className='position-absolute start-0 bottom-0' to={element.category_id.url}>{element.category_id.name}</Link>
                            </div>
                            <div className='mega-text-content'>
                                <h3>
                                    <Link to={element.url} className="default-hover">{element.title}</Link>
                                </h3>
                                <span>{element.date}</span>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default MegaMenu