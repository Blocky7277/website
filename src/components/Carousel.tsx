import { useState } from 'react'
import "./Carousel.css"
import type { Project, ProjectAttributes } from "./common.ts"

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
    const proj_attr: ProjectAttributes = project.attributes
    console.log(proj_attr.git)
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
                                <img key={i} loading={i != 0 ? "lazy" : "eager"} src={img} className="slide" alt="" />
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
                <h2 className='project-header'>
                {proj_attr.title}
                {proj_attr.git != null && <a className="project-icon" href={proj_attr.git.toString()} title="Github">
                <svg xmlns="http://w3.org" width="2rem" height="2rem" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                <path d="M9 18c-4.51 2-5-2-7-2" />
                </svg>
                </a>}
                </h2>
                <p className='txt-p'> {proj_attr.desc} </p>
            </div>
        </div>
    )
}

export default Carousel
