'use client'

import React, { useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import useIsMobile from '../hooks/useIsMobile'
import { getSectionVariants } from '../animations/variants'
import Intro from '../components/intro/Intro'
import TechStack from '../components/techStack/TechStack'
import Education from '../components/education/education'
import JustEatSection from '../components/companies/JustEatSection'
import EnsonoSection from '../components/companies/EnsonoSection'
import TytonicalSection from '../components/companies/TytonicalSection'
import NewparkSection from '../components/companies/NewparkSection'
import SectionNavigation from '../components/SectionNavigation'
import FloatingParticles from '../components/FloatingParticles'
import './app.css'

export default function Home() {
  const [currentSection, setCurrentSection] = useState('intro')
  const prefersReducedMotion = useReducedMotion()
  const isMobile = useIsMobile(768)
  const disableAnimations = prefersReducedMotion || isMobile
  const sectionVariants = getSectionVariants(disableAnimations)

  const sections = ['intro', 'tech-stack', 'just-eat', 'ensono', 'tytonical', 'newpark', 'education']

  const goToSection = (section: string) => {
    setCurrentSection(section)
  }

  return (
    <div className='App'>
      <SectionNavigation sections={sections} currentSection={currentSection} onNavigate={goToSection} />
      <FloatingParticles currentSection={currentSection} />
      <AnimatePresence mode='wait'>
        {currentSection === 'intro' && (
          <motion.div
            key='intro'
            className='section visible'
            variants={sectionVariants}
            initial='hidden'
            animate='visible'
            exit='exit'
          >
            <Intro />
          </motion.div>
        )}
        {currentSection === 'tech-stack' && (
          <motion.div
            key='tech-stack'
            className='section visible'
            variants={sectionVariants}
            initial='hidden'
            animate='visible'
            exit='exit'
          >
            <TechStack />
          </motion.div>
        )}
        {currentSection === 'just-eat' && (
          <motion.div
            key='just-eat'
            className='section visible'
            variants={sectionVariants}
            initial='hidden'
            animate='visible'
            exit='exit'
          >
            <JustEatSection />
          </motion.div>
        )}
        {currentSection === 'ensono' && (
          <motion.div
            key='ensono'
            className='section visible'
            variants={sectionVariants}
            initial='hidden'
            animate='visible'
            exit='exit'
          >
            <EnsonoSection />
          </motion.div>
        )}
        {currentSection === 'tytonical' && (
          <motion.div
            key='tytonical'
            className='section visible'
            variants={sectionVariants}
            initial='hidden'
            animate='visible'
            exit='exit'
          >
            <TytonicalSection />
          </motion.div>
        )}
        {currentSection === 'newpark' && (
          <motion.div
            key='newpark'
            className='section visible'
            variants={sectionVariants}
            initial='hidden'
            animate='visible'
            exit='exit'
          >
            <NewparkSection />
          </motion.div>
        )}
        {currentSection === 'education' && (
          <motion.div
            key='education'
            className='section visible'
            variants={sectionVariants}
            initial='hidden'
            animate='visible'
            exit='exit'
          >
            <Education />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
