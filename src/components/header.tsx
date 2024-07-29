import React, { FC } from "react";
import linkedInImage from "./../images/linkedin-logo.png";
import githubImage from "./../images/github-logo.png";
import "./../styles/text.css";
import "./../styles/image.css";

const Header: FC = () => {
  return (
    <div>
      <h3 className="HeaderInlineText">Jake Howden</h3>
      <br></br>
      <a href="https://www.linkedin.com/in/jake-howden/">
        <img src={linkedInImage} className="LogoImage" alt="profile"></img>
      </a>
      <a href="https://github.com/jakehowden">
        <img src={githubImage} className="LogoImage" alt="profile"></img>
      </a>
      <br></br>
    </div>
  );
};

export default Header;
