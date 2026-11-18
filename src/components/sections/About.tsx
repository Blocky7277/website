import "./About.css"
import me from "../../assets/me.jpg"

function About() {
    return <>
        <section id="about">
        <h1 className="section-header">About Me</h1>
            <div className="about-content">
                <div className="about">Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.</div>
                <img className="img" src={me} />
            </div>
        </section>
    </>
}

export default About