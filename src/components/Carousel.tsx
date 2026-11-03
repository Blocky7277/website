import { useState } from 'react'
import "./Carousel.css"
import type { Project } from "./common.ts"

type CarouselProps = {
    project: Project;
}

const images = import.meta.glob('@/assets/pictures/*', {
  eager: true,
  query: '?url',
  import: 'default',
}) as Record<string, string>

function Carousel({ project }: CarouselProps) {
    const [index, setIndex] = useState(0)
    const getSrc = (name: string) => images[`/src/assets/pictures/${name}`]
    return (
        <div className="carousel">
            <div className="carousel-img">
                <div className='img-container'>
                    <button className={`carousel-btn carousel-btn-l ${index == 0 ? "hidden" : ""}`} onClick={() => { setIndex(Math.max(0, index - 1)) }}>
                        <svg viewBox="0 0 24 24" className='chevron-p' fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M21 17.502a.997.997 0 0 1-.707-.293L12 8.913l-8.293 8.296a1 1 0 1 1-1.414-1.414l9-9.004a1.03 1.03 0 0 1 1.414 0l9 9.004A1 1 0 0 1 21 17.502Z"></path>
                        </svg>
                    </button>
                    <div className='slideshow'>
                        <div className='track' style={{ transform: `translateX(-${index * 100}%)` }}>
                            {project.images.map((img, i) => (
                                <img key={i} loading={i != 0 ? "lazy" : "eager"} src={getSrc(img)} className="slide" alt="" />
                            ))
                            }
                        </div>
                    </div>
                    <button className={`carousel-btn carousel-btn-r ${index == project.images.length - 1 ? "hidden" : ""}`} onClick={() => { setIndex(Math.min(index + 1, project.images.length - 1)) }}>
                        <svg viewBox="0 0 24 24" className='chevron-n' fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M21 17.502a.997.997 0 0 1-.707-.293L12 8.913l-8.293 8.296a1 1 0 1 1-1.414-1.414l9-9.004a1.03 1.03 0 0 1 1.414 0l9 9.004A1 1 0 0 1 21 17.502Z"></path>
                        </svg>
                    </button>
                </div>
                <div className='img-index'>
                    {
                        project.images.map((_, i) => (
                            <div key={i} className={`circle ${index === i ? "selected" : ""}`}
                            />
                        ))
                    }
                </div>
            </div>
            <div className="carousel-txt">
                <h2 className='project-header'>{project.title}</h2>
                <p className='txt-p'> {project.desc} </p>
            </div>
        </div>
    )
}

export default Carousel