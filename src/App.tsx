import React, { useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import useIsMobile from './hooks/useIsMobile'
import { getSectionVariants } from './animations/variants'
import Intro from './components/intro/Intro'
import Education from './components/education/education'
import JustEatSection from './components/companies/JustEatSection'
import EnsonoSection from './components/companies/EnsonoSection'
import TytonicalSection from './components/companies/TytonicalSection'
import NewparkSection from './components/companies/NewparkSection'
import SectionNavigation from './components/SectionNavigation'
import './App.css'

function App() {
  const [currentSection, setCurrentSection] = useState('intro')
  const prefersReducedMotion = useReducedMotion()
  const isMobile = useIsMobile(768)
  const disableAnimations = prefersReducedMotion || isMobile
  const sectionVariants = getSectionVariants(disableAnimations)

  const sections = ['intro', 'just-eat', 'ensono', 'tytonical', 'newpark', 'education']

  const goToSection = (section: string) => {
    setCurrentSection(section)
  }

  return (
    <div className='App'>
      <SectionNavigation sections={sections} currentSection={currentSection} onNavigate={goToSection} />
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
            <Intro></Intro>
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
            <JustEatSection></JustEatSection>
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
            <EnsonoSection></EnsonoSection>
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
            <TytonicalSection></TytonicalSection>
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
            <NewparkSection></NewparkSection>
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
            <Education></Education>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default App
