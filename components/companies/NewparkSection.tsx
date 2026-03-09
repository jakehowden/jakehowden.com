'use client'

import React from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import useIsMobile from '../../hooks/useIsMobile'
import { getListContainerVariants, getListItemVariants } from '../../animations/variants'
import './company-section.css'

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? ''
const newparkLogo = `${basePath}/images/newpark-solutions.png`

const NewparkSection: React.FC = () => {
  const disableAnimations = useReducedMotion() || useIsMobile(768)
  const listContainer = getListContainerVariants(disableAnimations)
  const listItem = getListItemVariants(disableAnimations)
  return (
    <div className='company-section newpark-section'>
      <div className='company-header'>
        <img src={newparkLogo} alt='Newpark Solutions' className='company-logo' />
        <h1>Newpark Solutions</h1>
        <p className='location'>Bristol, United Kingdom</p>
      </div>
      <div className='company-content'>
        <div className='role-info'>
          <h2>App Manager</h2>
          <p className='dates'>January 2019 June 2020</p>
        </div>
        <div className='achievements'>
          <motion.ul variants={listContainer} initial='hidden' animate='visible'>
            <motion.li variants={listItem}>
              Directed a full redesign of the parking payment app, coordinating product, design, and engineering across
              release cycles.
            </motion.li>
            <motion.li variants={listItem}>
              Led customer support and QA teams, instituting feedback loops that tightened defect triage and response
              times.
            </motion.li>
            <motion.li variants={listItem}>Maintained and extended backend web services to onboard new municipal clients and payment features.</motion.li>
            <motion.li variants={listItem}>Raised the app store rating from 1.52 to 4+, improving brand perception and retention.</motion.li>
          </motion.ul>
        </div>
        <div className='role-info earlier-role'>
          <h2>Software Engineer</h2>
          <p className='dates'>June 2018 January 2019</p>
        </div>
        <div className='achievements'>
          <motion.ul variants={listContainer} initial='hidden' animate='visible'>
            <motion.li variants={listItem}>
              Integrated a new payment service provider for in-app payments, improving checkout reliability and
              compliance.
            </motion.li>
            <motion.li variants={listItem}>
              Built automated payment services that delivered a frictionless parking experience for customers.
            </motion.li>
          </motion.ul>
        </div>
        <div className='tech-used'>
          <h3>Technologies</h3>
          <div className='tech-tags'>
            <span className='tech-tag'>C#</span>
            <span className='tech-tag'>.NET</span>
            <span className='tech-tag'>Mobile Apps</span>
            <span className='tech-tag'>Payment Integration</span>
            <span className='tech-tag'>Backend Services</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NewparkSection
