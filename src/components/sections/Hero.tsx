import "./Hero.css"
import {useState, useEffect} from 'react'

function Hero() {
  const [atTop, setAtTop] = useState(true);

  useEffect(() => {
    const onScroll = () => setAtTop(window.scrollY === 0);
    onScroll(); // set initial value
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
    return <>
    <section id="hero">
        <div className="inner-hero">
       <div className="greeting">Hello, my name is</div>
       <div className="hero">Jacob Ramah</div>
       <div className="job">An Embedded Software Engineer Based In Chicago</div>
       <div className="desc">A software developer with a focus on automotive embedded C and game development</div>
        </div>
          <div className={`scroll-indicator ${atTop ? "" : "hidden"}`}>⌄</div>
    </section>
    </>
}

export default Hero
