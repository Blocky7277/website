import "./Projects.css"
import Carousel from "../Carousel.tsx"
import type { ProjectAttributes, Project } from "../common.ts"
import { useState } from "react"

const projects_path = "/src/projects/"

const projects: Record<string, ProjectAttributes> = import.meta.glob("@/projects/*/*.md", {
  eager: true,
  import: "attributes",
})

const images: Record<string, string> = import.meta.glob('@/projects/*/*.{png,jpg,jpeg,webp}', {
    eager: true,
    query: "?url",
    import: "default",
})

function getProj(path: string) {
    return path.substring(projects_path.length).split("/")[0]
}

const test_proj_arr: Project[] = Object.entries(projects).map(([path, proj_attr]) => {
    let proj_path = getProj(path)
    let project: Project = {
        attributes: proj_attr,
        images: Object.entries(images)
        .filter(([key]) => getProj(key) === proj_path)
        .map(([, url]) => url)
    }
    return project
})

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
