import React from 'react';

interface ListSkillsProps {
  skills: string[];
}

const ListSkills: React.FC<ListSkillsProps> = ({ skills }) => {
  return (
    <p>{skills.join(" | ")}</p>
  );
};

export default ListSkills;
