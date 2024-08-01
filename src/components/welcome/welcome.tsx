import React from 'react'
import profileImage from './../../images/jake.jpg'
import arrowImage from './../../images/arrow.svg'
import './welcome.css'

const Welcome: React.FC = () => {
  const scrollToTechStack = () => {
    const techStackSection = document.getElementById('tech-stack')
    techStackSection?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className='WelcomeContainer'>
      <div className='Info'>
        <h1>Jake Howden</h1>
        <h2>Software Engineer</h2>
        <p>Good dev</p>
      </div>
      <div className='HeadshotContainer'>
        <img src={profileImage} alt='headshot' className='Headshot' />
      </div>
      <div className='ArrowContainer' onClick={scrollToTechStack}>
        <img src={arrowImage} alt='downward arrow' className='Arrow' />
      </div>
    </div>
  )
}

export default Welcome
