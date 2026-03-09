'use client'

import React, { useEffect, useMemo } from 'react'
import { motion } from 'framer-motion'
import useIsMobile from '../hooks/useIsMobile'
import './section-navigation.css'

type SectionNavigationProps = {
  sections: string[]
  currentSection: string
  onNavigate: (section: string) => void
}

// Waypoint positions as percentages of the viewport
// Zigzag: center → left → right → left → right → center
const WAYPOINTS = [
  { x: 50, y: 8 },   // intro - top center
  { x: 18, y: 25 },  // just-eat - left
  { x: 82, y: 42 },  // ensono - right
  { x: 18, y: 58 },  // tytonical - left
  { x: 82, y: 75 },  // newpark - right
  { x: 50, y: 92 },  // education - bottom center
]

// Build a smooth cubic bezier path through the waypoints
const buildPath = (): string => {
  const pts = WAYPOINTS
  let d = `M ${pts[0].x} ${pts[0].y}`
  for (let i = 1; i < pts.length; i++) {
    const prev = pts[i - 1]
    const curr = pts[i]
    // Control points: keep x of previous/current, shift y toward midpoint
    const midY = (prev.y + curr.y) / 2
    d += ` C ${prev.x} ${midY}, ${curr.x} ${midY}, ${curr.x} ${curr.y}`
  }
  return d
}

const PATH_D = buildPath()

const SectionNavigation: React.FC<SectionNavigationProps> = ({ sections, currentSection, onNavigate }) => {
  const currentIndex = useMemo(() => sections.indexOf(currentSection), [sections, currentSection])
  const isMobile = useIsMobile(768)
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
      {/* Full-screen zigzag path (desktop only) */}
      {!isMobile && (
        <div className='zigzag-container' aria-hidden='true'>
          <svg
            className='zigzag-svg'
            viewBox='0 0 100 100'
            preserveAspectRatio='none'
          >
            {/* Background path (full, faint) */}
            <path
              d={PATH_D}
              className='zigzag-bg'
              vectorEffect='non-scaling-stroke'
            />
            {/* Animated progress path */}
            <motion.path
              d={PATH_D}
              className='zigzag-progress'
              vectorEffect='non-scaling-stroke'
              initial={false}
              animate={{ pathLength: progress }}
              transition={{ duration: 0.6, ease: 'easeInOut' }}
            />
          </svg>

          {/* Waypoint dots (rendered as HTML for perfect circles) */}
          {WAYPOINTS.map((point, i) => {
            const isActive = i === currentIndex
            const isPast = i < currentIndex
            return (
              <button
                key={i}
                className={`waypoint ${isActive ? 'waypoint-active' : ''} ${isPast ? 'waypoint-past' : ''}`}
                style={{ left: `${point.x}%`, top: `${point.y}%` }}
                onClick={() => onNavigate(sections[i])}
                aria-label={`Go to ${sections[i].replace('-', ' ')}`}
              />
            )
          })}
        </div>
      )}

      {/* Bottom pill nav bar */}
      <nav className='section-nav'>
        {sections.map((section) => (
          <button
            key={section}
            className={`section-button ${currentSection === section ? 'active' : ''}`}
            onClick={() => onNavigate(section)}
            aria-label={`Go to ${section.replace('-', ' ')}`}
            title={section.replace('-', ' ')}
          >
            <span className='section-label'>{section.replace('-', ' ')}</span>
            <span className='section-dot'></span>
          </button>
        ))}
      </nav>
    </>
  )
}

export default SectionNavigation
