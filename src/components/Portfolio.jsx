
import Slider from 'react-slick';
import { portfolios } from '../utils/portfolio';
export default function Portfolio() {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        autoplay: true,
        slidesToScroll: 1,
        arrows: true, //
        
        responsive: [
            {
                breakpoint: 568,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false, 
                },
            },
        ],
    };
    return (
        <div className='portfolio mt-100'>
            <div className='container'>
                <h1 className='title text-center' data-aos="fade-up">Bizning loyihalarimiz</h1>
                <div className="slider-container w-100 mt-50"  >
                    <div
                        style={{
                            width: "100%",
                            display: "inline",
                        }}
                    >
                        <Slider{...settings}>
                            {
                                portfolios.map(item => <div key={item.id} style={{ padding: "0 10px", margin: "30px" }} >
                                    <div className='slider__item__content' data-aos="fade-up" >
                                        <div className='portfolio__card mx-30'>
                                            <div className='portfolio__card__header'>
                                                <img src={item.image} alt="" className='w-100 h-100' />
                                            </div>
                                            <a href={item.link} target='_blank' className='portfolio__card__body'>
                                                <h4 className='portfolio__card__title'>{item.title}</h4>
                                                <p className='portfolio__card__text'>
                                                    {
                                                        item.description
                                                    }
                                                </p>
                                            </a>
                                        </div>
                                    </div>
                                </div>)
                            }
                        </Slider>
                    </div>
                </div>
            </div>
        </div>
    )
}
