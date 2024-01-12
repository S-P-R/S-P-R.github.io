import { useState } from 'react'
import HeroSection from './components/Hero.tsx'
import Project from './components/Project.tsx'
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
    <div className='app-layout'>
      <div className='hero-section'> <HeroSection/> </div> 
      <div className='main-content'>
        <h3> Hello! &#128075; </h3>
        <p> I’m Sean, a fourth-year student at Tufts University &#128024; pursuing a Bachelor’s 
            in Computer Science. Currently looking for a new grad software 
            engineering role. </p>
        <h2> Projects</h2>
        <Project name='Placeholder 1' description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum pulvinar volutpat ante sit amet malesuada." 
                 onMouseEnter={() => setHoveredProject("Placeholder 1")} onMouseLeave={() => setHoveredProject(null)} 
                 shouldDim={hoveredProject != null && hoveredProject != "Placeholder 1"} />
        <Project name='Placeholder 2' description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum pulvinar volutpat ante sit amet malesuada." 
                 onMouseEnter={() => setHoveredProject("Placeholder 2")} onMouseLeave={() => setHoveredProject(null)}
                 shouldDim={hoveredProject != null && hoveredProject != "Placeholder 2"} />
      </div>
    </div>
  )
}

export default App
