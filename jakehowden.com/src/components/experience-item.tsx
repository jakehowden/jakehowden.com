import React, { FC } from 'react';
import ListItems from './helpers/list-items';
import ListSkills from './helpers/list-skills';
import './../styles/text.css'

interface ExperienceItemProps {
    company: string;
    position: string;
    location: string;
    skills: string[];
    details: string[];
  }

const ExperienceItem: FC<ExperienceItemProps> = ({company, position, location, skills, details}) => {
  return (
    <div>
      <div>
        <h3 className='HeaderInlineText'>{company} | </h3>
        <h4 className='HeaderInlineText'>{position} | </h4>
        <h5 className='HeaderInlineText'>{location}</h5>
      </div>
      <h5 className='HeaderText'><ListSkills skills={skills}/></h5>
      <ListItems items={details}/>
      <br></br>
    </div>
  );
};

export default ExperienceItem;