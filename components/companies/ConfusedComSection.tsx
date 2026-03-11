'use client'

import React from 'react'
import './company-section.css'

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? ''
const confusedComLogo = `${basePath}/images/confused-com.svg`

const ConfusedComSection: React.FC = () => {
  return (
    <div className='company-section confused-com-section'>
      <div className='company-header'>
        <img src={confusedComLogo} alt='Confused.com' className='company-logo' />
        <h1>Confused.com</h1>
        <p className='location'>Cardiff, United Kingdom</p>
      </div>
      <div className='company-content'>
        <div className='role-info'>
          <h2>Senior Software Engineer</h2>
          <p className='dates'>March 2026 — Present</p>
        </div>
      </div>
    </div>
  )
}

export default ConfusedComSection
