'use client'

import React from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import useIsMobile from '../../hooks/useIsMobile'
import { getTechItemVariants } from '../../animations/variants'
import './intro.css'

const Intro: React.FC = () => {
  const disableAnimations = useReducedMotion() || useIsMobile(768)
  const itemVariants = getTechItemVariants(disableAnimations)

  const techStack = [
    { icon: '/images/c-sharp.svg', label: 'C#' },
    { icon: '/images/dotnet.svg', label: '.NET' },
    { icon: '/images/kafka.svg', label: 'Kafka' },
    { icon: '/images/sqs.svg', label: 'SQS/SNS' },
    { icon: '/images/servicebus.svg', label: 'Service Bus' },
    { icon: '/images/terraform.svg', label: 'Terraform' },
    { icon: '/images/aws.svg', label: 'AWS' },
    { icon: '/images/azure.svg', label: 'Azure' },
    { icon: '/images/docker.svg', label: 'Docker' },
    { icon: '/images/kubernetes.svg', label: 'Kubernetes' },
    { icon: '/images/helm.svg', label: 'Helm' },
    { icon: '/images/cosmosdb.svg', label: 'Cosmos DB' },
    { icon: '/images/dynamodb.svg', label: 'DynamoDB' },
    { icon: '/images/github-actions.svg', label: 'GitHub Actions' },
    { icon: '/images/azure-devops.svg', label: 'Azure DevOps' }
  ]

  return (
    <div className='intro-container'>
      <div className='intro-content'>
        <h1>Jake Howden</h1>

        <div className='HeadshotContainer'>
          <img src='/images/jake.jpg' alt='Headshot of Jake Howden' className='Headshot' />
        </div>

        <h2>Software Engineer</h2>

        <p>Building scalable systems and leading technical delivery</p>

        <div className='social-links'>
          <a href='https://github.com/jakehowden' target='_blank' rel='noopener noreferrer' aria-label='GitHub'>
            <img src='/images/github-logo.png' alt='GitHub' className='social-icon' />
          </a>
          <a
            href='https://www.linkedin.com/in/jake-howden/'
            target='_blank'
            rel='noopener noreferrer'
            aria-label='LinkedIn'
          >
            <img src='/images/linkedin-logo.png' alt='LinkedIn' className='social-icon' />
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
