'use client'

import React from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import useIsMobile from '../../hooks/useIsMobile'
import { getRowVariants, getTechItemVariants } from '../../animations/variants'
import './tech-stack.css'

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? ''

const TechStack: React.FC = () => {
  const disableAnimations = useReducedMotion() || useIsMobile(768)
  const rowVariants = getRowVariants(disableAnimations)
  const itemVariants = getTechItemVariants(disableAnimations)

  return (
    <div id='tech-stack' className='tech-stack-container'>
      <div className='tech-sections'>
        <motion.div className='tech-row' variants={rowVariants} initial='hidden' animate='visible'>
          <motion.div className='tech-item' variants={itemVariants}>
            <img src={`${basePath}/images/c-sharp.svg`} alt='C#' className='tech-icon' />
            <span className='tech-label'>C#</span>
          </motion.div>
          <motion.div className='tech-item' variants={itemVariants}>
            <img src={`${basePath}/images/dotnet.svg`} alt='.NET' className='tech-icon' />
            <span className='tech-label'>.NET</span>
          </motion.div>
        </motion.div>

        <motion.div className='tech-row' variants={rowVariants} initial='hidden' animate='visible'>
          <motion.div className='tech-item' variants={itemVariants}>
            <img src={`${basePath}/images/kafka.svg`} alt='Kafka' className='tech-icon' />
            <span className='tech-label'>Kafka</span>
          </motion.div>
          <motion.div className='tech-item' variants={itemVariants}>
            <img src={`${basePath}/images/sqs.svg`} alt='SQS/SNS' className='tech-icon' />
            <span className='tech-label'>SQS/SNS</span>
          </motion.div>
          <motion.div className='tech-item' variants={itemVariants}>
            <img src={`${basePath}/images/servicebus.svg`} alt='Service Bus' className='tech-icon' />
            <span className='tech-label'>Service Bus</span>
          </motion.div>
        </motion.div>

        <motion.div className='tech-row' variants={rowVariants} initial='hidden' animate='visible'>
          <motion.div className='tech-item' variants={itemVariants}>
            <img src={`${basePath}/images/cosmosdb.svg`} alt='CosmosDB' className='tech-icon' />
            <span className='tech-label'>CosmosDB</span>
          </motion.div>
          <motion.div className='tech-item' variants={itemVariants}>
            <img src={`${basePath}/images/dynamodb.svg`} alt='DynamoDB' className='tech-icon' />
            <span className='tech-label'>DynamoDB</span>
          </motion.div>
        </motion.div>

        <motion.div className='tech-row' variants={rowVariants} initial='hidden' animate='visible'>
          <motion.div className='tech-item' variants={itemVariants}>
            <img src={`${basePath}/images/docker.svg`} alt='Docker' className='tech-icon' />
            <span className='tech-label'>Docker</span>
          </motion.div>
          <motion.div className='tech-item' variants={itemVariants}>
            <img src={`${basePath}/images/kubernetes.svg`} alt='Kubernetes' className='tech-icon' />
            <span className='tech-label'>Kubernetes</span>
          </motion.div>
          <motion.div className='tech-item' variants={itemVariants}>
            <img src={`${basePath}/images/github-actions.svg`} alt='GitHub Actions' className='tech-icon' />
            <span className='tech-label'>GitHub Actions</span>
          </motion.div>
          <motion.div className='tech-item' variants={itemVariants}>
            <img src={`${basePath}/images/azure-devops.svg`} alt='Azure DevOps' className='tech-icon' />
            <span className='tech-label'>Azure DevOps</span>
          </motion.div>
          <motion.div className='tech-item' variants={itemVariants}>
            <img src={`${basePath}/images/terraform.svg`} alt='Terraform' className='tech-icon' />
            <span className='tech-label'>Terraform</span>
          </motion.div>
          <motion.div className='tech-item' variants={itemVariants}>
            <img src={`${basePath}/images/helm.svg`} alt='Helm' className='tech-icon' />
            <span className='tech-label'>Helm</span>
          </motion.div>
        </motion.div>

        <motion.div className='tech-row' variants={rowVariants} initial='hidden' animate='visible'>
          <motion.div className='tech-item' variants={itemVariants}>
            <img src={`${basePath}/images/aws.svg`} alt='AWS' className='tech-icon' />
            <span className='tech-label'>AWS</span>
          </motion.div>
          <motion.div className='tech-item' variants={itemVariants}>
            <img src={`${basePath}/images/azure.svg`} alt='Azure' className='tech-icon' />
            <span className='tech-label'>Azure</span>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

export default TechStack
