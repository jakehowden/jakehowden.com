import React from 'react'
import arrowImage from './../images/arrow.svg'
import './navigation-arrow.css'

type NavigationArrowProps = {
  goToSection: (section: string) => void
  targetSection: string
  direction: string
}

const NavigationArrow: React.FC<NavigationArrowProps> = ({ goToSection, targetSection, direction }) => {
  return (
    <div
      className={`ArrowContainer ${direction.toLowerCase()}`}
      role='button'
      tabIndex={0}
      aria-label={`Go to ${targetSection}`}
      onClick={() => goToSection(targetSection)}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault()
          goToSection(targetSection)
        }
      }}
    >
      <img src={arrowImage} alt='' aria-hidden='true' className={'Arrow ' + direction} />
    </div>
  )
}

export default NavigationArrow
