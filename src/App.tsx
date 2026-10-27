import './App.css'
import { useState, useEffect } from 'react';

import Header from './components/Header.tsx'
import Hero from './components/sections/Hero.tsx'
import About from './components/sections/About.tsx'
import Projects from './components/sections/Projects.tsx'

function App() {
  const [atTop, setAtTop] = useState(true);

  useEffect(() => {
    const onScroll = () => setAtTop(window.scrollY === 0);
    onScroll(); // set initial value
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <Header />
      <div className="content">
        <Hero/>
          <div className={`divider ${atTop ? "" : "hidden"}`}>⌄</div>
        <About/>
        <Projects/>
      </div>
    </>
  )
}

export default App
