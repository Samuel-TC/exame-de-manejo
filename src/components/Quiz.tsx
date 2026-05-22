import { useState } from 'react'
import { questions } from '../data/questions'
import QuestionCard from './QuestionCard'
import ResultScreen from './ResultScreen'
import StartScreen from './StartScreen'

type Stage = 'start' | 'quiz' | 'result'

export default function Quiz() {
  const [stage, setStage] = useState<Stage>('start')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [score, setScore] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [showFeedback, setShowFeedback] = useState(false)

  const currentQuestion = questions[currentIndex]
  const total = questions.length

  function handleStart() {
    setStage('quiz')
    setCurrentIndex(0)
    setScore(0)
    setSelectedAnswer(null)
    setShowFeedback(false)
  }

  function handleSelect(index: number) {
    if (showFeedback) return
    setSelectedAnswer(index)
    setShowFeedback(true)
    if (index === currentQuestion.correctIndex) {
      setScore((s) => s + 1)
    }
  }

  function handleNext() {
    if (currentIndex + 1 < total) {
      setCurrentIndex((i) => i + 1)
      setSelectedAnswer(null)
      setShowFeedback(false)
    } else {
      setStage('result')
    }
  }

  if (stage === 'start') return <StartScreen onStart={handleStart} />
  if (stage === 'result') return <ResultScreen score={score} total={total} onRestart={handleStart} />

  return (
    <QuestionCard
      question={currentQuestion}
      questionNumber={currentIndex + 1}
      total={total}
      selectedAnswer={selectedAnswer}
      showFeedback={showFeedback}
      onSelect={handleSelect}
      onNext={handleNext}
    />
  )
}
