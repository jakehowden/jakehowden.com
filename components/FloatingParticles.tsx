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

function seededRandom(seed: number) {
  let s = seed
  return () => {
    s = (s * 16807 + 0) % 2147483647
    return s / 2147483647
  }
}

const FloatingParticles: React.FC = () => {
  const particles = useMemo(() => {
    const rand = seededRandom(42)
    const result: Particle[] = []
    for (let i = 0; i < 40; i++) {
      result.push({
        id: i,
        x: rand() * 160,
        y: rand() * 100,
        size: 2 + rand() * 3,
        opacity: 0.04 + rand() * 0.1,
        duration: 20 + rand() * 25,
        delay: rand() * -30,
        drift: 5 + rand() * 15,
      })
    }
    return result
  }, [])

  return (
    <>
      <div className='particles-side particles-left' aria-hidden='true'>
        {particles.slice(0, 20).map((p) => (
          <div
            key={p.id}
            className='particle'
            style={{
              left: `${p.x}px`,
              top: `${p.y}%`,
              width: `${p.size}px`,
              height: `${p.size}px`,
              opacity: p.opacity,
              animationDuration: `${p.duration}s`,
              animationDelay: `${p.delay}s`,
              '--drift': `${p.drift}px`,
            } as React.CSSProperties}
          />
        ))}
      </div>
      <div className='particles-side particles-right' aria-hidden='true'>
        {particles.slice(20).map((p) => (
          <div
            key={p.id}
            className='particle'
            style={{
              right: `${p.x}px`,
              top: `${p.y}%`,
              width: `${p.size}px`,
              height: `${p.size}px`,
              opacity: p.opacity,
              animationDuration: `${p.duration}s`,
              animationDelay: `${p.delay}s`,
              '--drift': `${p.drift}px`,
            } as React.CSSProperties}
          />
        ))}
      </div>
    </>
  )
}

export default FloatingParticles
