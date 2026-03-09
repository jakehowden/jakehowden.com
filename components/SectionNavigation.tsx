'use client'

import React, { useEffect, useMemo } from 'react'
import { motion } from 'framer-motion'
import './section-navigation.css'

type SectionNavigationProps = {
  sections: string[]
  currentSection: string
  onNavigate: (section: string) => void
}

const SectionNavigation: React.FC<SectionNavigationProps> = ({ sections, currentSection, onNavigate }) => {
  const currentIndex = useMemo(() => sections.indexOf(currentSection), [sections, currentSection])
  const progress = currentIndex / (sections.length - 1)

  // Keyboard navigation
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowDown' || e.key === 'PageDown') {
        e.preventDefault()
        const next = currentIndex + 1
        if (next < sections.length) onNavigate(sections[next])
      } else if (e.key === 'ArrowUp' || e.key === 'PageUp') {
        e.preventDefault()
        const prev = currentIndex - 1
        if (prev >= 0) onNavigate(sections[prev])
      }
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [currentIndex, sections, onNavigate])

  return (
    <>
      {/* Side timeline (desktop only) */}
      <div className='timeline-container' aria-hidden='true'>
        <div className='timeline-track'>
          {/* Background line */}
          <div className='timeline-line-bg' />
          {/* Animated progress line */}
          <motion.div
            className='timeline-line-progress'
            initial={false}
            animate={{ scaleY: progress }}
            transition={{ duration: 0.6, ease: 'easeInOut' }}
            style={{ transformOrigin: 'top' }}
          />

          {sections.map((section, i) => {
            const isActive = i === currentIndex
            const isPast = i < currentIndex
            return (
              <button
                key={section}
                className={`timeline-node ${isActive ? 'timeline-node-active' : ''} ${isPast ? 'timeline-node-past' : ''}`}
                style={{ top: `${(i / (sections.length - 1)) * 100}%` }}
                onClick={() => onNavigate(section)}
                aria-label={`Go to ${section.replace(/-/g, ' ')}`}
              >
                <span className='timeline-dot' />
                <span className='timeline-label'>{section.replace(/-/g, ' ')}</span>
              </button>
            )
          })}
        </div>
      </div>

    </>
  )
}

export default SectionNavigation
