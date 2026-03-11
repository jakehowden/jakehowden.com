'use client'

import React from 'react'
import './intro.css'

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? ''

const Intro: React.FC = () => {
  return (
    <div className='intro-container'>
      <div className='intro-content'>
        <h1>Jake Howden</h1>

        <div className='HeadshotContainer'>
          <img src={`${basePath}/images/jake.jpg`} alt='Headshot of Jake Howden' className='Headshot' />
        </div>

        <h2>Senior Software Engineer</h2>

        <p>Building scalable systems and leading technical delivery</p>

        <div className='social-links'>
          <a href='https://github.com/jakehowden' target='_blank' rel='noopener noreferrer' aria-label='GitHub'>
            <img src={`${basePath}/images/github-logo.png`} alt='GitHub' className='social-icon' />
          </a>
          <a
            href='https://www.linkedin.com/in/jake-howden/'
            target='_blank'
            rel='noopener noreferrer'
            aria-label='LinkedIn'
          >
            <img src={`${basePath}/images/linkedin-logo.png`} alt='LinkedIn' className='social-icon' />
          </a>
        </div>

      </div>
    </div>
  )
}

export default Intro
