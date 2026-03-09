'use client'

import React from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import useIsMobile from '../../hooks/useIsMobile'
import { getListContainerVariants, getListItemVariants } from '../../animations/variants'
import './company-section.css'

const ensonoLogo = '/images/ensono.png'

const EnsonoSection: React.FC = () => {
  const disableAnimations = useReducedMotion() || useIsMobile(768)
  const listContainer = getListContainerVariants(disableAnimations)
  const listItem = getListItemVariants(disableAnimations)
  return (
    <div className='company-section ensono-section'>
      <div className='company-header'>
        <img src={ensonoLogo} alt='Ensono' className='company-logo' />
        <h1>Ensono</h1>
        <p className='location'>Remote, United Kingdom</p>
      </div>
      <div className='company-content'>
        <div className='role-info'>
          <h2>Software Consultant</h2>
          <p className='dates'>April 2022 July 2024</p>
        </div>
        <div className='achievements'>
          <motion.ul variants={listContainer} initial='hidden' animate='visible'>
            <motion.li variants={listItem}>
              Successfully delivered a marketing system overhaul for Next PLC, migrating on-prem monoliths to cloud
              microservices in a £5 million contract.
            </motion.li>
            <motion.li variants={listItem}>
              Designed and implemented CI/CD pipelines to deploy services to Azure Kubernetes Service.
            </motion.li>
            <motion.li variants={listItem}>
              Co-led a £1.2 million initiative rebuilding admissions and finance communications for a London university
              with Azure Functions and Azure Service Bus.
            </motion.li>
            <motion.li variants={listItem}>
              Applied TDD, automated regression suites, and infrastructure-as-code to sustain high deployment
              confidence.
            </motion.li>
            <motion.li variants={listItem}>
              Facilitated stakeholder workshops and roadmap reviews that aligned engineering deliverables with business
              milestones.
            </motion.li>
          </motion.ul>
        </div>
        <div className='tech-used'>
          <h3>Technologies</h3>
          <div className='tech-tags'>
            <span className='tech-tag'>C#</span>
            <span className='tech-tag'>.NET</span>
            <span className='tech-tag'>Azure Kubernetes Service</span>
            <span className='tech-tag'>Azure Functions</span>
            <span className='tech-tag'>Azure Service Bus</span>
            <span className='tech-tag'>CI/CD</span>
            <span className='tech-tag'>TDD</span>
            <span className='tech-tag'>Infrastructure-as-Code</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EnsonoSection
