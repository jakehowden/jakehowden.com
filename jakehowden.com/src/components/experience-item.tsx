import React, { FC } from 'react';
import ListItems from './helpers/list-items';
import ListSkills from './helpers/list-skills';

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
        <h3 style={{display: "inline"}}>{company} | </h3>
        <h4 style={{display: "inline"}}>{position} | </h4>
        <h5 style={{display: "inline"}}>{location}</h5>
      </div>
      <h5><ListSkills skills={skills}/></h5>
      <p><ListItems items={details}/></p>
    </div>
  );
};

export default ExperienceItem;