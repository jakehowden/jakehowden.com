import { FC } from 'react';
import SkillsText from './text/skills-text';

const Skills: FC = () => {
  return (
    <div>
      <h1>Skills</h1>
      <p>{SkillsText}</p>
    </div>
  );
};

export default Skills;