import React, { FC } from 'react';
import ListItems from './helpers/list-items';

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
      <h3>{company}</h3>
      <h4>{position}</h4>
      <h5>{location}</h5>
      <h5><ListItems items={skills}/></h5>
      <p><ListItems items={details}/></p>
    </div>
  );
};

export default ExperienceItem;