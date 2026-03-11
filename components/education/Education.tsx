'use client'

import React from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import useIsMobile, { MOBILE_BREAKPOINT } from '../../hooks/useIsMobile'
import { getListContainerVariants, getListItemVariants } from '../../animations/variants'
import '../companies/company-section.css'

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? ''
const uswLogo = `${basePath}/images/USW.jpg`

const Education: React.FC = () => {
  const prefersReducedMotion = useReducedMotion()
  const isMobile = useIsMobile(MOBILE_BREAKPOINT)
  const disableAnimations = prefersReducedMotion || isMobile
  const listContainer = getListContainerVariants(disableAnimations)
  const listItem = getListItemVariants(disableAnimations)

  return (
    <div className='company-section education-section'>
      <div className='company-header'>
        <img src={uswLogo} alt='University of South Wales' className='company-logo' />
        <h1>University of South Wales</h1>
        <p className='location'>Pontypridd, Wales</p>
      </div>
      <div className='company-content'>
        <div className='role-info'>
          <h2>BSc (Hons) Computer Games Development</h2>
          <p className='dates'>September 2015 — June 2018</p>
        </div>
        <div className='achievements'>
          <motion.ul variants={listContainer} initial='hidden' animate='visible'>
            <motion.li variants={listItem}>
              Graduated with First-Class Honours.
            </motion.li>
            <motion.li variants={listItem}>
              Specialised in software engineering, game engine architecture, and real-time systems.
            </motion.li>
            <motion.li variants={listItem}>
              Developed a multiplayer networked game engine in C++ as a final-year project.
            </motion.li>
          </motion.ul>
        </div>
        <div className='tech-used'>
          <h3>Key Subjects</h3>
          <div className='tech-tags'>
            <span className='tech-tag'>C++</span>
            <span className='tech-tag'>C#</span>
            <span className='tech-tag'>Game Engine Architecture</span>
            <span className='tech-tag'>Networking</span>
            <span className='tech-tag'>Graphics Programming</span>
            <span className='tech-tag'>AI & Pathfinding</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Education
