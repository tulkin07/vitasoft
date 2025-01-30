import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import logo from "../assets/svg/logo.svg"
import phone from "../assets/svg/phone.svg"
export default function Navbar() {
    const navbar = useRef()
    window.addEventListener("scroll", () => {
        if (window.scrollY > 0) {
            navbar.current.classList.add("navbar-sticky")
            return
        }
        navbar.current.classList.remove("navbar-sticky")
    })



    return (
        <div className='navbar' ref={navbar}>
            <div className='container'>
                <div className='navbar__content'>
                    <Link to="/home" className='navbar__logo'>
                        <img src={logo} alt="logo" className='navbar__logo' />
                    </Link>
                    {/* <ul className='navbar__menu'>
                        <li className='navbar__item'>
                            <a href="#about" className="menu-item" >Biz haqimizda</a>
                        </li>
                        <li className='navbar__item'>
                            <a href="#services" className="menu-item" >Xizmatlar</a>
                        </li>
                        <li className='navbar__item'>
                            <a href="#portfolio" className="menu-item" >Portfolio</a>
                        </li>
                        <li className='navbar__item'>
                            <a href="#contact" className="menu-item" >Kontaktlar</a>
                        </li>
                    </ul> */}
                    <a href='tel:+998900678097' className='navbar__btn'>
                        <img src={phone} alt="" />
                        <span>+998900678097</span>
                    </a>

                </div>
            </div>
        </div>
    )
}
