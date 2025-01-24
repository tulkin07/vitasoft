import React from 'react'
import check from '../assets/svg/check.svg'

export default function About() {
    return (
        <div className='about mt-100 ' id='about'>
            <div className='about-overline'></div>
            <div className='container'>
                <div className='about__row'>
                    <div className='about__col' data-aos="fade-up">
                        <h1 className='title'>
                            Biz haqimizda
                        </h1>
                        
                        <p className='text-light mt-30'>
                            Vita Soft — bu texnologiyalar olamida innovatsiyalarni olib keluvchi kompaniya.
                            Biz mijozlarimiz uchun zamonaviy IT yechimlar va yuqori sifatli xizmatlarni taqdim
                            etishga intilamiz. Har bir loyihamizda ishonchlilik,
                            samaradorlik va ijodkorlik tamoyillariga amal qilamiz.
                        </p>
                        <p className='text-light mt-10'>
                            Bizning asosiy maqsadimiz — mijozlarimizga muvaffaqiyatga erishishda texnologik
                            yordam berish. Har bir loyiha biz uchun alohida qadriyatga ega bo‘lib, mijozlarimizning
                            ehtiyojlarini chuqur tushunishga va ularga moslashuvchan yechimlar taklif qilishga intilamiz.
                        </p>
                    </div>
                    <div className='about__col' data-aos="fade-up">
                        <h5 className='sub-title'>Nega Vita Soft?</h5>
                        <ul className='about__list mt-30'>
                            <li className='about__list__item'>
                                <img src={check} alt="" width={30} /> <br />
                                <p>Bizning mutaxassislarimiz turli sohalarda yillar davomida tajriba to‘plagan.</p>
                            </li>
                            <li className='about__list__item'>
                                <img src={check} alt="" width={30} /> <br />
                                <p>Loyihalarimizni eng yuqori sifat standartlariga muvofiq amalga oshiramiz.</p>
                            </li>
                            <li className='about__list__item'>
                                <img src={check} alt="" width={30} /> <br />
                                <p>Biz doimo zamonaviy texnologiyalar bilan ishlaymiz va mijozlarimizga innovatsion yechimlarni taqdim etamiz.</p>
                            </li>
                            <li className='about__list__item'>
                                <img src={check} alt="" width={30} /> <br />
                                <p>Biz har doim mijozlarimizni tinglaymiz va ularning orzu-havaslariga ko‘ra loyihalar yaratamiz.</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
