import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import logo from "../assets/svg/logo.svg"
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
                    <Link to="/home">
                        <img src={logo} alt="" />
                    </Link>
                    <ul className='navbar__menu'>
                        <li className='navbar__item'>
                            <a href="#">Biz haqimizda</a>
                        </li>
                        <li className='navbar__item'>
                            <a href="#">Xizmatlar</a>
                        </li>
                        <li className='navbar__item'>
                            <a href="#">Portfolio</a>
                        </li>
                        <li className='navbar__item'>
                            <a href="#">Kontaktlar</a>
                        </li>
                    </ul>
                    <button className='navbar__btn'>Bog‘lanish</button>

                </div>
            </div>
        </div>
    )
}
