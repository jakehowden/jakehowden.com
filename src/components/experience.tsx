import React, { FC } from "react";
import ExperienceItem from "./experience-item";
import "./../styles/text.css";

const Experience: FC = () => {
  return (
    <div>
      <h1 className="HeaderCenterText">Experience</h1>
      <ExperienceItem
        company="Ensono"
        position="Software Consultant"
        location="UK, Remote"
        skills={["C#", ".NET"]}
        details={["Cool Job", "Developer"]}
      ></ExperienceItem>
      <br></br>
    </div>
  );
};

export default Experience;
