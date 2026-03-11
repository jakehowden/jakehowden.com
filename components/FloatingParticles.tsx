'use client'

import React, { useMemo } from 'react'
import './floating-particles.css'

type Particle = {
  id: number
  x: number
  y: number
  size: number
  opacity: number
  duration: number
  delay: number
  drift: number
}

type FloatingParticlesProps = {
  currentSection: string
}

const sectionColors: Record<string, string> = {
  intro: '#d4a574',
  'tech-stack': '#b08d6e',
  'confused-com': '#72bf44',
  'just-eat': '#ff8000',
  ensono: '#8b6cc1',
  tytonical: '#dcbf79',
  newpark: '#26afe3',
  education: '#e8354f',
}

function seededRandom(seed: number) {
  let s = seed
  return () => {
    s = (s * 16807 + 0) % 2147483647
    return s / 2147483647
  }
}

const FloatingParticles: React.FC<FloatingParticlesProps> = ({ currentSection }) => {
  const particles = useMemo(() => {
    const rand = seededRandom(42)
    const result: Particle[] = []
    for (let i = 0; i < 60; i++) {
      result.push({
        id: i,
        x: rand() * 100,
        y: rand() * 100,
        size: 3 + rand() * 5,
        opacity: 0.08 + rand() * 0.12,
        duration: 18 + rand() * 22,
        delay: rand() * -30,
        drift: 10 + rand() * 30,
      })
    }
    return result
  }, [])

  const color = sectionColors[currentSection] ?? sectionColors.intro

  return (
    <div className='particles-container' aria-hidden='true'>
      {particles.map((p) => (
        <div
          key={p.id}
          className='particle'
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            opacity: p.opacity,
            backgroundColor: color,
            boxShadow: `0 0 ${p.size * 2}px ${color}`,
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
            '--drift': `${p.drift}px`,
          } as React.CSSProperties}
        />
      ))}
    </div>
  )
}

export default FloatingParticles
