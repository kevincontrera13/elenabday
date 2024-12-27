'use client'

import { useEffect, useState } from 'react'

interface TicketRevealProps {
  revealedParts: number[]
  totalParts: number
}

export default function TicketReveal({ revealedParts, totalParts }: TicketRevealProps) {
  const [opacity, setOpacity] = useState<number[]>(new Array(totalParts).fill(0))

  useEffect(() => {
    revealedParts.forEach((part, index) => {
      setTimeout(() => {
        setOpacity(prev => {
          const newOpacity = [...prev]
          newOpacity[part] = 1
          return newOpacity
        })
      }, index * 1000) // Stagger the reveal of each part
    })
  }, [revealedParts, totalParts])

  return (
    <div className="mt-8 relative w-full h-64 md:h-96">
      {Array.from({ length: totalParts }).map((_, index) => (
        <div
          key={index}
          className="absolute inset-0 bg-cover bg-center transition-opacity duration-1000"
          style={{
            backgroundImage: `url('/primavera-sound-ticket-${index + 1}.jpg')`,
            opacity: opacity[index],
          }}
        />
      ))}
    </div>
  )
}

