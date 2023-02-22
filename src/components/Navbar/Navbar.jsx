import React from 'react'
import './Navbar.css'
import images from '../../images'

const Navbar = () => {

    const [toggle, setToggle] = React.useState(false);

  return (
    <div className='navbar'>
        <div className="navbar__logo">
            <img src={images.logoBookmark} alt="" />
        </div>

        <div className="navbar__links">
            <ul>
                <li><a href="#features">FEATURES</a></li>
                <li><a href="#pricing">PRICING</a></li>
                <li><a href="#contact">CONTACT</a></li>
            </ul>

            <button>LOGIN</button>
        </div>

        <div className="navbar__hamburger">
            {!toggle && (<img src={images.iconHamburger} alt="" onClick={() => setToggle(true)}/>)}

           {toggle && (
             <div className="navbar__mobile">
                <div className='navbar__mobile-head'>
                    <img src={images.logoBookmark} alt="" />
                    <img src={images.iconClose} alt="" onClick={() => setToggle(false)}/>
                </div>
               
                <div className="navbar__mobile-menu">
                    <ul>
                        <li><a href="#features">FEATURES</a></li>
                        <li><a href="#pricing">PRICING</a></li>
                        <li><a href="#contact">CONTACT</a></li>
                    </ul>
                    <button>LOGIN</button>
                    <div className="navbar__social">
                        <img src={images.iconFacbook} alt="" />
                        <img src={images.iconTwitter} alt="" />
                    </div>
                </div>
            </div>
           )}
        </div>
    </div>
  )
}

export default Navbar