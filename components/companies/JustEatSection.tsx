'use client'

import React from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import useIsMobile from '../../hooks/useIsMobile'
import { getListContainerVariants, getListItemVariants } from '../../animations/variants'
import './company-section.css'

const justEatLogo = '/images/justeattakeaway.png'

const JustEatSection: React.FC = () => {
  const disableAnimations = useReducedMotion() || useIsMobile(768)
  const listContainer = getListContainerVariants(disableAnimations)
  const listItem = getListItemVariants(disableAnimations)

  return (
    <div className='company-section just-eat-section'>
      <div className='company-header'>
        <img src={justEatLogo} alt='Just Eat Takeaway' className='company-logo' />
        <h1>Just Eat Takeaway</h1>
        <p className='location'>Bristol, United Kingdom</p>
      </div>
      <div className='company-content'>
        <div className='role-info'>
          <h2>Software Engineer</h2>
          <p className='dates'>September 2024 Present</p>
        </div>
        <div className='achievements'>
          <motion.ul variants={listContainer} initial='hidden' animate='visible'>
            <motion.li variants={listItem}>
              Engineered and architected an event-driven platform generating €243 million in annual revenue.
            </motion.li>
            <motion.li variants={listItem}>
              Migrated legacy services from EC2 to Kubernetes (EKS), reducing infrastructure spend by 30%.
            </motion.li>
            <motion.li variants={listItem}>
              Standardised our messaging framework to eliminate duplicated code and reduce complexity across
              microservices.
            </motion.li>
            <motion.li variants={listItem}>
              Integrated E2E test suites into CI/CD pipelines, strengthening release gates and improving service
              reliability.
            </motion.li>
            <motion.li variants={listItem}>
              Championed multiple features which improved agent efficiency and customer satisfaction.
            </motion.li>
            <motion.li variants={listItem}>
              Mentored senior developers transitioning to .NET, offering guidance in engineering and testing best
              practices.
            </motion.li>
          </motion.ul>
        </div>
        <div className='tech-used'>
          <h3>Technologies</h3>
          <div className='tech-tags'>
            <span className='tech-tag'>C#</span>
            <span className='tech-tag'>.NET</span>
            <span className='tech-tag'>Kubernetes</span>
            <span className='tech-tag'>AWS EKS</span>
            <span className='tech-tag'>Event-Driven Architecture</span>
            <span className='tech-tag'>CI/CD</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default JustEatSection
