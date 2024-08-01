import React, { useState } from 'react'
import CareerTimeline from './components/career/career-timeline'
import TechStack from './components/techStack/tech-stack'
import Welcome from './components/welcome/welcome'
import arrowImage from './images/arrow.svg'
import './App.css'

function App() {
  const sections = ['welcome', 'tech-stack', 'career', 'education'] // Add more sections as needed
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0)

  // Function to navigate to the next section
  const goToNextSection = () => {
    setCurrentSectionIndex((prevIndex) => (prevIndex + 1) % sections.length)
  }

  // Function to navigate to the previous section
  const goToPreviousSection = () => {
    setCurrentSectionIndex((prevIndex) => (prevIndex - 1 + sections.length) % sections.length)
  }

  return (
    <div className='App'>
      {sections.map((section, index) => (
        <div key={section} className={`section ${index === currentSectionIndex ? 'visible' : 'hidden'}`}>
          {section === 'welcome' && <Welcome />}
          {section === 'tech-stack' && <TechStack />}
          {section === 'career' && <CareerTimeline />}
          {index !== 0 && (
            <div className='ArrowContainer' onClick={goToPreviousSection}>
              <img src={arrowImage} alt='upward arrow' className='Arrow' />
            </div>
          )}
          {index !== sections.length - 1 && (
            <div className='ArrowContainer' onClick={goToNextSection}>
              <img src={arrowImage} alt='downward arrow' className='Arrow' />
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

export default App
