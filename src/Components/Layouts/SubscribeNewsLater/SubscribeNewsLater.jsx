import React from 'react'
import './SubscribeNewsLater.css'

const SubscribeNewsLater = () => {
  return (
    <div className='subscribe-news-later'>
        <span>{"Subscribe our newsletter for latest news, service & promo. Let's stay updated!"}</span>
        <form className='subscribe-news-later-form'>
            <input type="name" name='subscribe-name' id='subscribe-name' placeholder='Name...'/>
            <input type="email" name='subscribe-email' id='subscribe-email' placeholder='Email...'/>
            <button type="submit">SUBSCRIBE</button>
        </form>
    </div>
  )
}

export default SubscribeNewsLater