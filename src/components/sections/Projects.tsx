import "./Projects.css"
import Carousel from "../Carousel.tsx"

const test_img_arr: string[] = ["pdm0.jpg", "pdm1.jpg"]

function Projects() {
    return <>
    <section id="projects">
            <h1 className="section-header">Projects</h1>
            <div className="project-content">
               <Carousel images={test_img_arr}/> 
            </div>
    </section>
    </>
}

export default Projects