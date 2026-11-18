import './App.css'
import Header from './components/Header.tsx'
import Hero from './components/sections/Hero.tsx'
import About from './components/sections/About.tsx'
import Projects from './components/sections/Projects.tsx'

function App() {

  return (
    <>
      <Header />
      <div className="content">
        <Hero/>
        <About/>
        <Projects/>
      </div>
    </>
  )
}

export default App
