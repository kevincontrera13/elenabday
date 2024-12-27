'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Question } from '@/app/data/questions'

interface QuizCardProps {
  question: Question
  onCorrectAnswer: () => void
  revealed: boolean
  index: number
}

export default function QuizCard({ question, onCorrectAnswer, revealed, index }: QuizCardProps) {
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null)
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null)
  const [showPhoto, setShowPhoto] = useState(false)

  const handleAnswer = (answer: string) => {
    setSelectedAnswer(answer)
    const correct = answer === question.correctAnswer
    setIsCorrect(correct)
    if (correct) {
      onCorrectAnswer()
      setTimeout(() => setShowPhoto(true), 500)
    }
  }

  return (
    <div 
      className={`relative min-h-[300px] p-8 transition-all duration-500 ${
        revealed 
          ? 'bg-[#98D1A1]' 
          : 'bg-white hover:bg-gray-50'
      }`}
    >
      {showPhoto ? (
        <div className="absolute inset-0 transition-opacity duration-1000 flex items-center justify-center">
          <div className="relative w-full h-0 pb-[75%]">
            <Image
              src={`/photos/photo-${index + 1}.jpg`}
              alt={question.photoDescription}
              fill
              className="object-cover rounded-lg"
              sizes="(max-width: 768px) 100vw, 33vw"
              width={800}
              height={600}
              priority
            />
          </div>
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center rounded-lg">
            <p className="font-mono text-white text-2xl font-bold text-center px-4">
              {question.photoDescription}
            </p>
          </div>
        </div>
      ) : (
        <>
          <div className="font-mono mb-6">
            <div className="text-sm mb-2">Question {index + 1}</div>
            <div className="font-bold">{question.text}</div>
          </div>
          <div className="space-y-3">
            {question.answers.map((answer, idx) => (
              <button
                key={idx}
                onClick={() => handleAnswer(answer)}
                className={`w-full p-3 text-left font-mono text-sm transition-colors
                  ${selectedAnswer === answer 
                    ? isCorrect 
                      ? 'bg-[#98D1A1] text-black' 
                      : 'bg-black text-white' 
                    : 'border border-black hover:bg-black hover:text-white'
                  }`}
                disabled={isCorrect !== null || revealed}
              >
                {answer}
              </button>
            ))}
          </div>
          {isCorrect === false && (
            <p className="mt-4 font-mono text-sm text-center">Try again</p>
          )}
        </>
      )}
    </div>
  )
}

