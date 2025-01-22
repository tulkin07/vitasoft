import React from 'react'
import about from "../assets/img/about.png"
export default function About() {
  return (
    <div className='abou mt-100'>
      <div className='container'>
        <div className='about__row'>
          <div className='about__col'>
            <h3 className='title'>
              KIRISH
            </h3>
            <h4 className='sub-title mt-10'>VITASOFT</h4>
          </div>
          <div className='about__col'>
            <div className='text'>
              Bugungi raqamli davrda biznesingizning muvaffaqiyati texnologiyalardan qanday foydalanishingizga bog‘liq. VitaSoft IT xizmatlari orqali sizga o‘z
              biznesingizni yangi bosqichga olib chiqishga yordam beradi!
            </div>
          </div>
        </div>
        <div className='about__row mt-50'>
          <div className='about__col'>
            <div className='about__img__container'>
              <img className='w-100' src={about} alt="" />
            </div>
          </div>
          <div className='about__col'>
          <h3 className='title'>
          Biz haqimizda
            </h3>
            <h4 className='sub-title mt-10'>VITASOFT</h4>
          <div className='text mt-30'>
              Bugungi raqamli davrda biznesingizning muvaffaqiyati texnologiyalardan qanday foydalanishingizga bog‘liq. VitaSoft IT xizmatlari orqali sizga o‘z
              biznesingizni yangi bosqichga olib chiqishga yordam beradi!
            </div>
            <button className='mt-30 btn-info'>Biz bilan bog’laning</button>
          </div>
        </div>
      </div>
    </div>
  )
}
