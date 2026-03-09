'use client'

import React from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import useIsMobile from '../../hooks/useIsMobile'
import { getListContainerVariants, getListItemVariants } from '../../animations/variants'
import './company-section.css'

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? ''
const tytonicalLogo = `${basePath}/images/tytonical.png`

const TytonicalSection: React.FC = () => {
  const disableAnimations = useReducedMotion() || useIsMobile(768)
  const listContainer = getListContainerVariants(disableAnimations)
  const listItem = getListItemVariants(disableAnimations)
  return (
    <div className='company-section tytonical-section'>
      <div className='company-header'>
        <img src={tytonicalLogo} alt='Tytonical' className='company-logo' />
        <h1>Tytonical</h1>
        <p className='location'>Remote, United Kingdom</p>
      </div>
      <div className='company-content'>
        <div className='role-info'>
          <h2>Backend Developer</h2>
          <p className='dates'>June 2020 April 2022</p>
        </div>
        <div className='achievements'>
          <motion.ul variants={listContainer} initial='hidden' animate='visible'>
            <motion.li variants={listItem}>
              Owned end-to-end delivery of back-end web APIs and full-stack applications for fintech and media clients.
            </motion.li>
            <motion.li variants={listItem}>
              Prioritised scalability and high availability when designing AWS ECS deployments, ensuring cost-efficient
              operations.
            </motion.li>
            <motion.li variants={listItem}>
              Brokered partner integrations by defining APIs, SLAs, and support processes that kept joint launches on
              schedule.
            </motion.li>
            <motion.li variants={listItem}>
              Mentored interns through structured workshops and pair-programming, progressing them to production-ready
              contributors.
            </motion.li>
          </motion.ul>
        </div>
        <div className='tech-used'>
          <h3>Technologies</h3>
          <div className='tech-tags'>
            <span className='tech-tag'>C#</span>
            <span className='tech-tag'>.NET</span>
            <span className='tech-tag'>AWS ECS</span>
            <span className='tech-tag'>TypeScript</span>
            <span className='tech-tag'>REST APIs</span>
            <span className='tech-tag'>Fintech</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TytonicalSection
