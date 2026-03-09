import React, { useEffect, useMemo } from 'react'
import './path-navigation.css'

type PathNavigationProps = {
  sections: string[]
  currentSection: string
  onNavigate: (section: string) => void
}

const PathNavigation: React.FC<PathNavigationProps> = ({ sections, currentSection, onNavigate }) => {
  const currentIndex = useMemo(() => sections.indexOf(currentSection), [sections, currentSection])
  const isFirstPage = currentIndex === 0
  const nextSection = currentIndex < sections.length - 1 ? sections[currentIndex + 1] : null
  const prevSection = currentIndex > 0 ? sections[currentIndex - 1] : null

  // Determine elbow direction: odd indices = upper-left to lower-right; even = upper-right to lower-left
  const isLeftToRight = currentIndex % 2 === 1

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowDown' || e.key === 'PageDown') {
        if (nextSection) onNavigate(nextSection)
      } else if (e.key === 'ArrowUp' || e.key === 'PageUp') {
        if (prevSection) onNavigate(prevSection)
      }
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [nextSection, prevSection, onNavigate])

  return (
    <div className='path-nav'>
      {/* Navigation buttons */}
      <div className='path-controls'>
        {!isFirstPage && prevSection && (
          <button
            className='nav-button nav-prev'
            onClick={() => onNavigate(prevSection)}
            aria-label='Previous section'
            title='Previous'
          >
            ↑
          </button>
        )}
        {nextSection && (
          <button
            className='nav-button nav-next'
            onClick={() => onNavigate(nextSection)}
            aria-label='Next section'
            title='Next'
          >
            ↓
          </button>
        )}
      </div>

      {/* Elbow path in corner */}
      {!isFirstPage && (
        <svg className='path-svg' viewBox='0 0 100 100' preserveAspectRatio='xMidYMid meet'>
          {isLeftToRight ? (
            // Upper-left to lower-right elbow
            <path
              d='M 10 10 L 50 50 L 90 90'
              stroke='white'
              strokeWidth='3'
              fill='none'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          ) : (
            // Upper-right to lower-left elbow
            <path
              d='M 90 10 L 50 50 L 10 90'
              stroke='white'
              strokeWidth='3'
              fill='none'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          )}
        </svg>
      )}
    </div>
  )
}

export default PathNavigation
