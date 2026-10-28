import { useState } from 'react'
import "./Carousel.css"

type CarouselProps = {
    images: string[];
}

function Carousel({ images }: CarouselProps) {
    const [index, setIndex] = useState(0)
    const initialPath = "/pictures/"
    return (
        <div className="carousel">
            <div className="carousel-img">
                <div className='img-container'>
                    <button className={`carousel-btn carousel-btn-l ${index == 0 ? "hidden" : ""}`} hidden={true} onClick={() => { setIndex(Math.max(0, index - 1)) }}>
                        <svg viewBox="0 0 24 24" className='chevron-p' fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M21 17.502a.997.997 0 0 1-.707-.293L12 8.913l-8.293 8.296a1 1 0 1 1-1.414-1.414l9-9.004a1.03 1.03 0 0 1 1.414 0l9 9.004A1 1 0 0 1 21 17.502Z"></path>
                        </svg>
                    </button>
                    <div className='slideshow'>
                        <div className='track' style={{ transform: `translateX(-${index * 100}%)` }}>
                            {images.map((img, i) => (
                                <img key={i} src={initialPath + img} className="slide" alt="" />
                            ))
                            }
                        </div>
                    </div>
                    <button className={`carousel-btn carousel-btn-r ${index == images.length - 1 ? "hidden" : ""}`} onClick={() => { setIndex(Math.min(index + 1, images.length - 1)) }}>
                        <svg viewBox="0 0 24 24" className='chevron-n' fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M21 17.502a.997.997 0 0 1-.707-.293L12 8.913l-8.293 8.296a1 1 0 1 1-1.414-1.414l9-9.004a1.03 1.03 0 0 1 1.414 0l9 9.004A1 1 0 0 1 21 17.502Z"></path>
                        </svg>
                    </button>
                </div>
                <div className='img-index'>
                    {
                        images.map((_, i) => (
                            <div key={i} className={`circle ${index === i ? "selected" : ""}`}
                            />
                        ))
                    }
                </div>
            </div>
            <div className="carousel-txt">
                <h2>Project 1</h2>
                Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.
            </div>
        </div>
    )
}

export default Carousel