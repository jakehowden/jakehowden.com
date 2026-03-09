import React from 'react'
import profileImage from './../../images/jake.jpg'
import githubLogo from './../../images/github-logo.png'
import linkedinLogo from './../../images/linkedin-logo.png'
import './welcome.css'

const Welcome: React.FC = () => {
  return (
    <div className='WelcomeContainer'>
      <div className='Info'>
        <h1>Jake Howden</h1>
        <h2>Software Engineer</h2>
        <p>Building scalable systems and leading technical delivery</p>
        <div className='social-links'>
          <a href='https://github.com/jakehowden' target='_blank' rel='noopener noreferrer' aria-label='GitHub'>
            <img src={githubLogo} alt='GitHub' className='social-icon' />
          </a>
          <a
            href='https://www.linkedin.com/in/jake-howden/'
            target='_blank'
            rel='noopener noreferrer'
            aria-label='LinkedIn'
          >
            <img src={linkedinLogo} alt='LinkedIn' className='social-icon' />
          </a>
        </div>
      </div>
      <div className='HeadshotContainer'>
        <img src={profileImage} alt='Headshot of Jake Howden' className='Headshot' />
      </div>
    </div>
  )
}

export default Welcome
