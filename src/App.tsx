import { useState } from 'react'
import HeroSection from './components/Hero.tsx'
import Project from './components/Project.tsx'
import ColorSchemeToggle from './components/ColorSchemeToggle.tsx'
import './styles/App.css'

/**
 * App
 * 
 * Lays out page
 *
 */
function App() {
  const [hoveredProject, setHoveredProject] = useState<string | null> (null);

  return (
    <div className='elements'>
      <div className='content-layout'>
        <div className='hero-section'> <HeroSection/> </div> 
        <div className='main-content'>
          <h3> Hello! &#128075;{/* waving hand emoji */} </h3> 
          <p> I’m Sean, a recent graduate of Tufts University &#128024;{/* elephant emoji */} with a Bachelor’s
              in Computer Science. Currently looking for a new grad software 
              engineering role. </p>
          <h2> Projects </h2>
          <Project name='News Dashboard' 
                   description="A full-stack project consisting of a webscraper written in Python that gathers news headlines from various news
                   websites' front pages, a Flask API that serves these headlines, and a React frontend that displays news summary information" 
                   onMouseEnter={() => setHoveredProject("News Dashboard")} onMouseLeave={() => setHoveredProject(null)} 
                   shouldDim={hoveredProject != null && hoveredProject != "News Dashboard"} />

        </div>
      </div>
      <ColorSchemeToggle/>
    </div>
  )
}

export default App
