import React, { FC } from "react";
import summaryText from "./text/summary-text";
import profileImage from "./../images/jake.jpg";
import "./../styles/text.css";

const AboutMe: FC = () => {
  return (
    <div>
      <h1 className="HeaderCenterText">About Me</h1>
      <div style={{ display: "inline" }}>
        <p className="Text">{summaryText}</p>
        <img src={profileImage} className="HeaderImage" alt="profile"></img>
      </div>
      <br></br>
    </div>
  );
};

export default AboutMe;
