import React from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import useIsMobile from './../../hooks/useIsMobile'
import { getRowVariants, getTechItemVariants } from './../../animations/variants'
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
import './tech-stack.css'

const TechStack: React.FC = () => {
  const disableAnimations = useReducedMotion() || useIsMobile(768)
  const rowVariants = getRowVariants(disableAnimations)
  const itemVariants = getTechItemVariants(disableAnimations)
  return (
    <div id='tech-stack' className='tech-stack-container'>
      <div className='tech-sections'>
        <motion.div className='tech-row' variants={rowVariants} initial='hidden' animate='visible'>
          <motion.div className='tech-item' variants={itemVariants}>
            <img src={csharp} alt='C#' className='tech-icon' />
            <span className='tech-label'>C#</span>
          </motion.div>
          <motion.div className='tech-item' variants={itemVariants}>
            <img src={dotnet} alt='.NET' className='tech-icon' />
            <span className='tech-label'>.NET</span>
          </motion.div>
        </motion.div>

        <motion.div className='tech-row' variants={rowVariants} initial='hidden' animate='visible'>
          <motion.div className='tech-item' variants={itemVariants}>
            <img src={kafka} alt='Kafka' className='tech-icon' />
            <span className='tech-label'>Kafka</span>
          </motion.div>
          <motion.div className='tech-item' variants={itemVariants}>
            <img src={sqs} alt='SQS/SNS' className='tech-icon' />
            <span className='tech-label'>SQS/SNS</span>
          </motion.div>
          <motion.div className='tech-item' variants={itemVariants}>
            <img src={servicebus} alt='Service Bus' className='tech-icon' />
            <span className='tech-label'>Service Bus</span>
          </motion.div>
        </motion.div>

        <motion.div className='tech-row' variants={rowVariants} initial='hidden' animate='visible'>
          <motion.div className='tech-item' variants={itemVariants}>
            <img src={cosmosdb} alt='CosmosDB' className='tech-icon' />
            <span className='tech-label'>CosmosDB</span>
          </motion.div>
          <motion.div className='tech-item' variants={itemVariants}>
            <img src={dynamodb} alt='DynamoDB' className='tech-icon' />
            <span className='tech-label'>DynamoDB</span>
          </motion.div>
        </motion.div>

        <motion.div className='tech-row' variants={rowVariants} initial='hidden' animate='visible'>
          <motion.div className='tech-item' variants={itemVariants}>
            <img src={docker} alt='Docker' className='tech-icon' />
            <span className='tech-label'>Docker</span>
          </motion.div>
          <motion.div className='tech-item' variants={itemVariants}>
            <img src={kubernetes} alt='Kubernetes' className='tech-icon' />
            <span className='tech-label'>Kubernetes</span>
          </motion.div>
          <motion.div className='tech-item' variants={itemVariants}>
            <img src={githubActions} alt='GitHub Actions' className='tech-icon' />
            <span className='tech-label'>GitHub Actions</span>
          </motion.div>
          <motion.div className='tech-item' variants={itemVariants}>
            <img src={azureDevops} alt='Azure DevOps' className='tech-icon' />
            <span className='tech-label'>Azure DevOps</span>
          </motion.div>
          <motion.div className='tech-item' variants={itemVariants}>
            <img src={terraform} alt='Terraform' className='tech-icon' />
            <span className='tech-label'>Terraform</span>
          </motion.div>
          <motion.div className='tech-item' variants={itemVariants}>
            <img src={helm} alt='Helm' className='tech-icon' />
            <span className='tech-label'>Helm</span>
          </motion.div>
        </motion.div>

        <motion.div className='tech-row' variants={rowVariants} initial='hidden' animate='visible'>
          <motion.div className='tech-item' variants={itemVariants}>
            <img src={aws} alt='AWS' className='tech-icon' />
            <span className='tech-label'>AWS</span>
          </motion.div>
          <motion.div className='tech-item' variants={itemVariants}>
            <img src={azure} alt='Azure' className='tech-icon' />
            <span className='tech-label'>Azure</span>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

export default TechStack
