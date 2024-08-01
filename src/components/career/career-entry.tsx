import React from 'react'
import ListSkills from './list-skills'
import './careers.css'

type CareerEntryProps = {
  startDate: string
  endDate: string
  companyName: string
  position: string
  skills: string[]
  description: string
}

const CareerEntry: React.FC<CareerEntryProps> = ({
  startDate,
  endDate,
  companyName,
  position,
  skills,
  description
}) => {
  return (
    <div className='timeline-entry'>
      <div className='timeline-date'>
        {startDate} - {endDate}
      </div>
      <div className='timeline-divider'></div>
      <div className='timeline-info'>
        <div className='company-name'>{companyName}</div>
        <div className='position'>{position}</div>
        <ListSkills skills={skills}></ListSkills>
        <p className='description'>{description}</p>
      </div>
    </div>
  )
}

export default CareerEntry
