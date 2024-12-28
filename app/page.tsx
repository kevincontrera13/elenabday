'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import QuizCard from '../components/QuizCard'
import { questions } from './data/questions'
import MetadataRow from '../components/MetadataRow'
import StartScreen from '../components/StartScreen'

export default function BirthdayQuizGame() {
  const [gameStarted, setGameStarted] = useState(false)
  const [revealedParts, setRevealedParts] = useState<number[]>([])
  const [showCongrats, setShowCongrats] = useState(false)

  const handleStart = () => {
    setGameStarted(true)
  }

  const handleCorrectAnswer = (index: number) => {
    setRevealedParts(prev => [...prev, index])
  }

  useEffect(() => {
    if (revealedParts.length === questions.length) {
      const timer = setTimeout(() => setShowCongrats(true), 3000)
      return () => clearTimeout(timer)
    }
  }, [revealedParts])

  if (!gameStarted) {
    return <StartScreen onStart={handleStart} />
  }

  return (
    <div className="min-h-screen p-8">
      <h1 className="text-[8vw] font-bold leading-none tracking-tight mb-12 px-4">
        Elena's twentysexies Birthday Quiz
      </h1>
      
      <MetadataRow 
        totalQuestions={questions.length} 
        answeredQuestions={revealedParts.length}
      />

      {showCongrats ? (
        <div className="relative bg-[#98D1A1] aspect-[3/2] max-w-3xl mx-auto my-12 flex items-center justify-center">
          <Image
            src="/primavera-sound-ticket.jpg"
            alt="Primavera Sound Festival Tickets"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="font-mono text-white text-center">
              <p className="mb-4 text-3xl font-bold">SURPRISE REVEALED</p>
              <p className="mb-4 text-2xl">Primavera Sound Barcelona 2025 tickets para ver a beach house!!</p>
              <p className="mb-4 text-xl">June 6, 2025</p>
              <p className="text-2xl font-bold">Te amosinoooo! Feliz cumpleaños maldita!</p>
            </div>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-gray-100 my-12">
          {questions.map((question, index) => (
            <QuizCard
              key={index}
              question={question}
              onCorrectAnswer={() => handleCorrectAnswer(index)}
              revealed={revealedParts.includes(index)}
              index={index}
            />
          ))}
        </div>
      )}
    </div>
  )
}

