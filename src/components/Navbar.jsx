import React, { useEffect, useRef } from 'react'
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

    useEffect(() => {
        const sections = document.querySelectorAll("section");
        const menuItems = document.querySelectorAll(".menu-item");
    
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
                console.log(entry);
                
              const id = entry.target.id;
              const menuItem = document.querySelector(`#menu-${id}`);
    
              if (entry.isIntersecting) {
                menuItems.forEach((item) => item.classList.remove("active")); // Hammasidan "active" ni olib tashlash
                menuItem.classList.add("active"); // Faol bo'lgan bo'limga "active" ni qo'shish
              }
            });
          },
          { threshold: 0.7 } // 70% ko'rinishi asosida
        );
    
        sections.forEach((section) => observer.observe(section));
    
        // Clean-up observer
        return () => observer.disconnect();
      }, []);


    return (
        <div className='navbar' ref={navbar}>
            <div className='container'>
                <div className='navbar__content'>
                    <Link to="/home">
                        <img src={logo} alt="" />
                    </Link>
                    <ul className='navbar__menu'>
                        <li className='navbar__item'>
                            <a href="#about" className="menu-item" id="menu-about">Biz haqimizda</a>
                        </li>
                        <li className='navbar__item'>
                            <a href="#services" className="menu-item" id="menu-services">Xizmatlar</a>
                        </li>
                        <li className='navbar__item'>
                            <a href="#portfolio" className="menu-item" id="menu-portfolio">Portfolio</a>
                        </li>
                        <li className='navbar__item'>
                            <a href="#contact" className="menu-item" id="menu-portfolio">Kontaktlar</a>
                        </li>
                    </ul>
                    <button className='navbar__btn'>Bog‘lanish</button>

                </div>
            </div>
        </div>
    )
}
