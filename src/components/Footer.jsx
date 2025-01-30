import React from 'react'
import logo from "../assets/svg/logo.svg"
import telegram from "../assets/svg/telegram.svg"
import twitter from "../assets/svg/twitter.svg"
import instagram from "../assets/svg/instagram.svg"
import facebook from "../assets/svg/facebook.svg"
import linkedin from "../assets/svg/linkedin.svg"
import youtube from "../assets/svg/youtube.svg"
export default function Footer() {
    return (
        <div className='footer'>
            <div className='container'>
                <div className='footer__row'>
                    <div className='footer__col' data-aos="fade-up">
                        <img src={logo} alt="" />
                        <p className='text-light'>
                            VitaSoft – Sizning IT bo‘yicha ishonchli
                            hamkoringiz. Biz biznesingizni rivojlantirishga
                            qaratilgan innovatsion
                            texnologiyalarni taqdim etamiz.
                        </p>
                    </div>
                    <div className='footer__col' data-aos="fade-up">
                        <div className='footer__link'><a href="#about" >Biz haqimizda</a></div>
                        <div className='footer__link'><a href="#about" >Xizmatlar</a></div>
                        <div className='footer__link'><a href="#about" >Bizning loyihalarimiz</a></div>
                        <div className='footer__link'><a href="#about" >Kontaktlar</a></div>
                    </div>
                    <div className='footer__col' data-aos="fade-up">
                        <h4 className='text-light pt-0'>Biz ijtimoiy tarmoqlarda</h4>
                        <ul className='footer__network'>
                            <li>
                                <a target="_blank" rel="noopener noreferrer" href="https://t.me/vita_soft"><img src={telegram} alt="" /></a>
                            </li>
                            <li>
                                <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/vitasoft.uz/">    <img src={instagram} alt="" /> </a>
                            </li>
                            {/* <li>
                                <img src={twitter} alt="" />
                            </li>
                            <li>
                                <img src={facebook} alt="" />
                            </li>
                            <li>
                                <img src={linkedin} alt="" />
                            </li>
                            <li>
                                <img src={youtube} alt="" />
                            </li> */}
                        </ul>
                    </div>
                </div>
                <div className='footer__line'></div>
                <p className='text-light text-center'>© VITASOFT 2024</p>
            </div>
        </div>
    )
}
