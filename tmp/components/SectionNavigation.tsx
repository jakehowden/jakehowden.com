import React, { useMemo } from 'react'
import './section-navigation.css'

type SectionNavigationProps = {
  sections: string[]
  currentSection: string
  onNavigate: (section: string) => void
}

const SectionNavigation: React.FC<SectionNavigationProps> = ({ sections, currentSection, onNavigate }) => {
  const currentIndex = useMemo(() => sections.indexOf(currentSection), [sections, currentSection])

  // Company sections that have alternating logo placement
  const companySections = ['just-eat', 'ensono', 'tytonical', 'newpark']
  const isCompanySection = companySections.includes(currentSection)

  // Determine sidebar position:
  // Company sections with even index have logo on left → nav on right
  // Company sections with odd index have logo on right → nav on left
  // Non-company sections default to right
  const sidebarPosition = isCompanySection ? (currentIndex % 2 === 0 ? 'right' : 'left') : 'right'

  return (
    <nav className={`section-nav sidebar-${sidebarPosition}`}>
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
  )
}

export default SectionNavigation
