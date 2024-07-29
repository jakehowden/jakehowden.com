import { FC } from 'react';
import SkillsText from './text/skills-text';
import './../styles/text.css'

const Skills: FC = () => {
  return (
    <div>
      <h1 className='HeaderCenterText'>Skills</h1>
      <p className='Skill'>{SkillsText}</p>
      <br></br>
    </div>
  );
};

export default Skills;