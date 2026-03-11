'use client'

import React, { useEffect, useMemo, useRef, useCallback } from 'react'
import { motion } from 'framer-motion'
import './section-navigation.css'

type SectionNavigationProps = {
  sections: string[]
  currentSection: string
  onNavigate: (section: string) => void
}

const displayNames: Record<string, string> = {
  'confused-com': 'Confused.com',
  'just-eat': 'Just Eat Takeaway',
}

const getLabel = (section: string): string => displayNames[section] ?? section.replace(/-/g, ' ')

const SectionNavigation: React.FC<SectionNavigationProps> = ({ sections, currentSection, onNavigate }) => {
  const currentIndex = useMemo(() => sections.indexOf(currentSection), [sections, currentSection])
  const progress = currentIndex / (sections.length - 1)
  const cooldownRef = useRef(false)

  const navigateWithCooldown = useCallback(
    (direction: 'next' | 'prev') => {
      if (cooldownRef.current) return
      const idx = direction === 'next' ? currentIndex + 1 : currentIndex - 1
      if (idx >= 0 && idx < sections.length) {
        onNavigate(sections[idx])
        cooldownRef.current = true
        setTimeout(() => {
          cooldownRef.current = false
        }, 600)
      }
    },
    [currentIndex, sections, onNavigate]
  )

  // Keyboard navigation
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowDown' || e.key === 'PageDown' || e.key === 'ArrowRight') {
        e.preventDefault()
        navigateWithCooldown('next')
      } else if (e.key === 'ArrowUp' || e.key === 'PageUp' || e.key === 'ArrowLeft') {
        e.preventDefault()
        navigateWithCooldown('prev')
      }
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [navigateWithCooldown])

  // Scroll wheel navigation
  useEffect(() => {
    const onWheel = (e: WheelEvent) => {
      e.preventDefault()
      if (e.deltaY > 0) {
        navigateWithCooldown('next')
      } else if (e.deltaY < 0) {
        navigateWithCooldown('prev')
      }
    }
    window.addEventListener('wheel', onWheel, { passive: false })
    return () => window.removeEventListener('wheel', onWheel)
  }, [navigateWithCooldown])

  return (
    <nav className='nav-bar' aria-label='Section navigation'>
      <div className='nav-track'>
        {/* Background line */}
        <div className='nav-line-bg' />
        {/* Animated progress line */}
        <motion.div
          className='nav-line-progress'
          initial={false}
          animate={{ scaleX: progress }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
          style={{ transformOrigin: 'left' }}
        />

        {sections.map((section, i) => {
          const isActive = i === currentIndex
          const isPast = i < currentIndex
          return (
            <button
              key={section}
              className={`nav-node ${isActive ? 'nav-node-active' : ''} ${isPast ? 'nav-node-past' : ''}`}
              style={{ left: `${(i / (sections.length - 1)) * 100}%` }}
              onClick={() => onNavigate(section)}
              aria-label={`Go to ${getLabel(section)}`}
              aria-current={isActive ? 'step' : undefined}
            >
              <span className='nav-dot' />
              <span className='nav-label'>{getLabel(section)}</span>
            </button>
          )
        })}
      </div>
    </nav>
  )
}

export default SectionNavigation
