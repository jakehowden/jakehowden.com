import React from 'react'
import './careers.css'

interface ListSkillsProps {
  skills: string[]
}

const ListSkills: React.FC<ListSkillsProps> = ({ skills }) => {
  return (
    <div className='skills-container'>
      {skills.map((skill, index) => (
        <p className='skill' key={index}>
          {skill}
        </p>
      ))}
    </div>
  )
}

export default ListSkills
