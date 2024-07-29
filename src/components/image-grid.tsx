import React, { FC } from "react";
import csharp from "./../images/c-sharp.svg";
import dotnet from "./../images/dotnet.svg";
import terraform from "./../images/terraform.svg";
import typescript from "./../images/typescript.svg";
import aws from "./../images/aws.svg";
import azure from "./../images/azure.svg";
import docker from "./../images/docker.svg";
import kubernetes from "./../images/kubernetes.svg";

const ImageGrid: FC = () => {
  return (
    <div>
      <br></br>
      <div className="GridImage">
        <img src={csharp} className="GridImage" alt="profile"></img>
        <img src={dotnet} className="GridImage" alt="profile"></img>
        <img src={terraform} className="GridImage" alt="profile"></img>
      </div>
      <br></br>
      <div className="GridImage">
        <img src={typescript} className="GridImage" alt="profile"></img>
        <img src={aws} className="GridImage" alt="profile"></img>
        <img src={azure} className="GridImage" alt="profile"></img>
      </div>
      <br></br>
      <div className="GridImage">
        <img src={docker} className="GridImage" alt="profile"></img>
        <img src={kubernetes} className="GridImage" alt="profile"></img>
      </div>
      <h3 className="HeaderInlineText">Software Engineer</h3>
      <br></br>
    </div>
  );
};

export default ImageGrid;
