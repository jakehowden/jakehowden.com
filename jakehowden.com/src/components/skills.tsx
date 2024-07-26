import { FC } from 'react';
import SkillsText from './text/skills-text';
import { headerInlineTextStyles } from '../styles/header-text-styles';

const Skills: FC = () => {
  return (
    <div>
      <h1 style={headerInlineTextStyles}>Skills</h1>
      <p>{SkillsText}</p>
    </div>
  );
};

export default Skills;