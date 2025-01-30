import React from 'react'
export default function Header() {
    return (
        <div className='header'>
            <div className='container'>
                <div className='header__content'>
                    <div className='header__col'>
                        <h1 className='header__title' data-aos="fade-up">
                            <span>VitaSoft</span> – Sizning IT muammolaringiz uchun mukammal yechim!
                        </h1>
                        {/* <p className='header__text'>
                            Biz, VitaSoft jamoasi, texnologiyalar orqali biznesingizni
                            yangi cho‘qqilarga olib chiqamiz. Veb-saytlar, mobil
                            ilovalar, texnik qo‘llab-quvvatlash va boshqa IT
                            xizmatlari bo‘yicha yetakchi tajribaga egamiz.
                        </p> */}
                        <a href='#contact' className='btn-info mt-50 ' data-aos="fade-up" >Biz bilan bog‘laning</a>
                    </div>
                    {/* <div className='header__col'>
                        <div className='header__img__container'>
                            <img src={girl} alt="" />
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    )
}
