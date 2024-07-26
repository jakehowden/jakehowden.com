import React, { FC } from 'react';
import ListItems from './helpers/list-items';
import ListSkills from './helpers/list-skills';
import { headerInlineTextStyles, headerTextStyles } from '../styles/header-text-styles';

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
        <h3 style={headerInlineTextStyles}>{company} | </h3>
        <h4 style={headerInlineTextStyles}>{position} | </h4>
        <h5 style={headerInlineTextStyles}>{location}</h5>
      </div>
      <h5 style={headerTextStyles}><ListSkills skills={skills}/></h5>
      <ListItems items={details}/>
    </div>
  );
};

export default ExperienceItem;