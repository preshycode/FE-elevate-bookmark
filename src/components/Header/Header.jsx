import React from 'react'
import './Header.css'
import images from '../../images'
const Header = () => {
  return (
    <div className='header'>
        <div className="header__info">
            <h1>A Simple Bookmark Manager</h1>
            <p>A clean and simple interface to organize your favourite websites. Open a new browser tab and see your sites load instantly. Try it for free.</p>
            <div className="header__btn">
                <button>Get it in Chrome</button>
                <button>Get it on Firefox</button>
            </div>
        </div>

        <div className="header__image">
            <img src={images.illustrationHero} alt="" />
        </div>

        <div className="right__bg-design"></div>
    </div>
  )
}

export default Header