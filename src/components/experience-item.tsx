import React, { FC } from "react";
import ListItems from "./helpers/list-items";
import ListSkills from "./helpers/list-skills";
import "./../styles/text.css";

interface ExperienceItemProps {
  company: string;
  position: string;
  location: string;
  skills: string[];
  details: string[];
}

const ExperienceItem: FC<ExperienceItemProps> = ({
  company,
  position,
  location,
  skills,
  details,
}) => {
  return (
    <div>
      <div style={{ textAlign: "center" }}>
        <h4 className="HeaderInlineText">{company} ·</h4>
        <h4 className="HeaderInlineText">{position} ·</h4>
        <h4 className="HeaderInlineText">{location}</h4>
      </div>
      <ListSkills skills={skills} />
      <ListItems items={details} />
      <br></br>
    </div>
  );
};

export default ExperienceItem;
