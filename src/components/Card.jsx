import React from 'react'

export default function Card({ title, description }) {
    return (
        <div className='card' data-aos="fade-up">
            <h1 className='card__title'>{title}</h1>
            <p className='card__text'>{description}</p>
        </div>
    )
}
