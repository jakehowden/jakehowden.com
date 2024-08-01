import React from 'react'
import csharp from './../../images/c-sharp.svg'
import dotnet from './../../images/dotnet.svg'
import terraform from './../../images/terraform.svg'
import typescript from './../../images/typescript.svg'
import aws from './../../images/aws.svg'
import azure from './../../images/azure.svg'
import docker from './../../images/docker.svg'
import kubernetes from './../../images/kubernetes.svg'
import react from './../../images/react.svg'
import arrowImage from './../../images/arrow.svg'
import './tech-stack.css'

const TechStack: React.FC = () => {
  const scrollToCareer = () => {
    const careerSection = document.getElementById('career')
    careerSection?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div id='tech-stack' className='tech-stack-container'>
      <div className='tech-stack-content'>
        <div className='tech-stack-images'>
          <div className='section'>
            <h4>CODE</h4>
            <div className='image-row'>
              <img src={csharp} alt='C#' />
              <img src={dotnet} alt='.NET' />
              <img src={typescript} alt='TypeScript' />
              <img src={react} alt='React' />
            </div>
          </div>
          <div className='section'>
            <h4>INFRA</h4>
            <div className='image-row'>
              <img src={terraform} alt='Terraform' />
              <img src={docker} alt='Docker' />
              <img src={kubernetes} alt='Kubernetes' />
            </div>
          </div>
          <div className='section'>
            <h4>CLOUD</h4>
            <div className='image-row'>
              <img src={azure} alt='Azure' />
              <img src={aws} alt='AWS' />
            </div>
          </div>
        </div>
        <div className='tech-stack-text'>
          <h2>My Tech Stack</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
            nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </p>
        </div>
      </div>
      <div className='arrow-container' onClick={scrollToCareer}>
        <img src={arrowImage} alt='downward arrow' className='arrow' />
      </div>
    </div>
  )
}

export default TechStack
