import "./Projects.css"
import Carousel from "../Carousel.tsx"
import type { Project } from "../common.ts"
import { useState } from "react"


const test_img_arr: string[] = ["pdm1.jpg", "pdm0.jpg"]

const pdm:Project = {
    title: "PDM",
    images: test_img_arr,
    desc: `
    Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis
`
}

const pcm:Project = {
    title: "PCM",
    images: test_img_arr,
    desc: `
    Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.
`
}

const test_proj_arr: Project[] = [pdm, pcm, pdm, pcm]

function Projects() {
    const [projIndex, setProjIndex] = useState(0)

    return <>
    <section id="projects">
            <h1 className="section-header">Projects</h1>
            <div className="project-content">
                    <button className={`proj-btn ${projIndex == 0 ? "hidden" : ""}`} onClick={() => { setProjIndex(Math.max(0, projIndex - 1)) }}>
                        <svg viewBox="0 0 24 24" className='proj-chevron-p' fill="currentColor" stroke="currentColor" strokeWidth="1">
                            <path d="M21 17.502a.997.997 0 0 1-.707-.293L12 8.913l-8.293 8.296a1 1 0 1 1-1.414-1.414l9-9.004a1.03 1.03 0 0 1 1.414 0l9 9.004A1 1 0 0 1 21 17.502Z"></path>
                        </svg>
                    </button>
               <Carousel key={projIndex} project={test_proj_arr[projIndex]}/> 
                    <button className={`proj-btn ${projIndex == test_proj_arr.length - 1 ? "hidden" : ""}`} onClick={() => { setProjIndex(Math.min(projIndex + 1, test_proj_arr.length - 1)) }}>
                        <svg viewBox="0 0 24 24" className='proj-chevron-n' fill="currentColor" stroke="currentColor" strokeWidth="1">
                            <path d="M21 17.502a.997.997 0 0 1-.707-.293L12 8.913l-8.293 8.296a1 1 0 1 1-1.414-1.414l9-9.004a1.03 1.03 0 0 1 1.414 0l9 9.004A1 1 0 0 1 21 17.502Z"></path>
                        </svg>
                    </button>
            </div>
    </section>
    </>
}

export default Projects