import React from "react";

interface ListSkillsProps {
  skills: string[];
}

const ListSkills: React.FC<ListSkillsProps> = ({ skills }) => {
  return (
    <div>
      {skills.map((skill, index) => (
        <p className="Skill" key={index}>
          {skill}
        </p>
      ))}
    </div>
  );
};

export default ListSkills;
