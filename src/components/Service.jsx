import React from 'react'
import Card from './Card'
import { services } from '../utils/service'

export default function Service() {
  return (
    <div className='service section' id='services'>
      <div className='container'>
        <h1 className='title text-center mt-100' data-aos="fade-up">Bizning xizmatlarimiz        </h1>
        <div className='service__row mt-50'>
          {
            services.map(item => <div className='service__col' key={item.id} > <Card title={item.title} description={item.description} /></div>)
          }

        </div>
      </div>
    </div>
  )
}
