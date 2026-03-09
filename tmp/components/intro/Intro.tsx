import React from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import useIsMobile from './../../hooks/useIsMobile'
import { getTechItemVariants } from './../../animations/variants'
import profileImage from './../../images/jake.jpg'
import githubLogo from './../../images/github-logo.png'
import linkedinLogo from './../../images/linkedin-logo.png'
import csharp from './../../images/c-sharp.svg'
import dotnet from './../../images/dotnet.svg'
import terraform from './../../images/terraform.svg'
import aws from './../../images/aws.svg'
import azure from './../../images/azure.svg'
import docker from './../../images/docker.svg'
import kubernetes from './../../images/kubernetes.svg'
import kafka from './../../images/kafka.svg'
import cosmosdb from './../../images/cosmosdb.svg'
import dynamodb from './../../images/dynamodb.svg'
import githubActions from './../../images/github-actions.svg'
import azureDevops from './../../images/azure-devops.svg'
import helm from './../../images/helm.svg'
import sqs from './../../images/sqs.svg'
import servicebus from './../../images/servicebus.svg'
import './intro.css'

const Intro: React.FC = () => {
  const disableAnimations = useReducedMotion() || useIsMobile(768)
  const itemVariants = getTechItemVariants(disableAnimations)

  const techStack = [
    { icon: csharp, label: 'C#' },
    { icon: dotnet, label: '.NET' },
    { icon: kafka, label: 'Kafka' },
    { icon: sqs, label: 'SQS/SNS' },
    { icon: servicebus, label: 'Service Bus' },
    { icon: terraform, label: 'Terraform' },
    { icon: aws, label: 'AWS' },
    { icon: azure, label: 'Azure' },
    { icon: docker, label: 'Docker' },
    { icon: kubernetes, label: 'Kubernetes' },
    { icon: helm, label: 'Helm' },
    { icon: cosmosdb, label: 'Cosmos DB' },
    { icon: dynamodb, label: 'DynamoDB' },
    { icon: githubActions, label: 'GitHub Actions' },
    { icon: azureDevops, label: 'Azure DevOps' }
  ]

  return (
    <div className='intro-container'>
      <div className='intro-content'>
        <h1>Jake Howden</h1>

        <div className='HeadshotContainer'>
          <img src={profileImage} alt='Headshot of Jake Howden' className='Headshot' />
        </div>

        <h2>Software Engineer</h2>

        <p>Building scalable systems and leading technical delivery</p>

        <div className='social-links'>
          <a href='https://github.com/jakehowden' target='_blank' rel='noopener noreferrer' aria-label='GitHub'>
            <img src={githubLogo} alt='GitHub' className='social-icon' />
          </a>
          <a
            href='https://www.linkedin.com/in/jake-howden/'
            target='_blank'
            rel='noopener noreferrer'
            aria-label='LinkedIn'
          >
            <img src={linkedinLogo} alt='LinkedIn' className='social-icon' />
          </a>
        </div>

        <div className='tech-grid'>
          {techStack.map((tech, index) => (
            <motion.div
              key={tech.label}
              className='tech-item'
              variants={itemVariants}
              initial='hidden'
              animate='visible'
              transition={{ delay: index * 0.05 }}
            >
              <img src={tech.icon} alt={tech.label} className='tech-icon' />
              <span className='tech-label'>{tech.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Intro
