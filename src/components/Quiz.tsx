import { useState, useEffect, useRef } from 'react'
import { questions as allQuestions } from '../data/questions'
import type { Question } from '../data/questions'
import type { ExamConfig } from '../types/config'
import { defaultConfig } from '../types/config'
import QuestionCard from './QuestionCard.tsx'
import ResultScreen from './ResultScreen.tsx'
import StartScreen from './StartScreen.tsx'

type Stage = 'start' | 'quiz' | 'result'

export interface AnswerRecord {
    question: Question
    selected: number | null // null = timed out
}

function pickQuestions(count: number): Question[] {
    return [...allQuestions].sort(() => Math.random() - 0.5).slice(0, count)
}

export default function Quiz() {
    const [stage, setStage] = useState<Stage>('start')
    const [config, setConfig] = useState<ExamConfig>(defaultConfig)
    const [examQuestions, setExamQuestions] = useState<Question[]>(allQuestions)
    const [currentIndex, setCurrentIndex] = useState(0)
    const [score, setScore] = useState(0)
    const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
    const [answered, setAnswered] = useState(false)
    const [timeLeft, setTimeLeft] = useState<number | null>(null)

    // useRef guarantees answers are always current when stage flips to 'result'
    const answersRef = useRef<AnswerRecord[]>([])
    // Keep fresh refs to avoid stale closures in effects
    const currentIndexRef = useRef(currentIndex)
    const currentQuestionRef = useRef(examQuestions[currentIndex])
    const totalRef = useRef(examQuestions.length)

    currentIndexRef.current = currentIndex
    currentQuestionRef.current = examQuestions[currentIndex]
    totalRef.current = examQuestions.length

    const total = examQuestions.length

    // Reset and start timer on each new question
    useEffect(() => {
        if (stage !== 'quiz' || answered || config.timePerQuestion === null) {
            setTimeLeft(null)
            return
        }
        setTimeLeft(config.timePerQuestion)
        const interval = setInterval(() => {
            setTimeLeft(prev => (prev !== null && prev > 0 ? prev - 1 : 0))
        }, 1000)
        return () => clearInterval(interval)
    }, [currentIndex, stage]) // eslint-disable-line react-hooks/exhaustive-deps

    // Time's up → mark wrong and auto-advance after 1.2s
    useEffect(() => {
        if (timeLeft !== 0 || stage !== 'quiz' || answered) return
        setAnswered(true)
        const t = setTimeout(() => {
            const idx = currentIndexRef.current
            const q = currentQuestionRef.current
            const tot = totalRef.current
            answersRef.current = [...answersRef.current, { question: q, selected: null }]
            if (idx + 1 < tot) {
                setCurrentIndex(idx + 1)
                setSelectedAnswer(null)
                setAnswered(false)
            } else {
                setStage('result')
            }
        }, 1200)
        return () => clearTimeout(t)
    }, [timeLeft, stage, answered])

    function advanceToNext(recordedAnswer: number | null) {
        answersRef.current = [
            ...answersRef.current,
            { question: examQuestions[currentIndex], selected: recordedAnswer },
        ]
        if (currentIndex + 1 < total) {
            setCurrentIndex(i => i + 1)
            setSelectedAnswer(null)
            setAnswered(false)
        } else {
            setStage('result')
        }
    }

    function handleStart(cfg: ExamConfig) {
        answersRef.current = []
        setConfig(cfg)
        setExamQuestions(pickQuestions(cfg.questionCount))
        setStage('quiz')
        setCurrentIndex(0)
        setScore(0)
        setSelectedAnswer(null)
        setAnswered(false)
    }

    const [showEndModal, setShowEndModal] = useState(false)

    function handleEnd() {
        setShowEndModal(true)
    }

    function confirmEnd() {
        setShowEndModal(false)
        setStage('result')
    }

    function handleSelect(index: number) {
        if (answered) return
        setSelectedAnswer(index)
        if (index === examQuestions[currentIndex].correctIndex) setScore(s => s + 1)
        setAnswered(true)
    }

    if (stage === 'start') return <StartScreen onStart={handleStart} />
    if (stage === 'result') return (
        <ResultScreen
            score={score}
            total={total}
            answers={answersRef.current}
            onRestart={() => setStage('start')}
        />
    )

    return (
        <>
        {showEndModal && (
            <div className="modalOverlay">
                <div className="modalBox">
                    <h3 className="modalTitle">¿Terminar el examen?</h3>
                    <p className="modalMsg">Las preguntas que no hayas respondido contarán como incorrectas.</p>
                    <div className="modalActions">
                        <button className="modalCancel" onClick={() => setShowEndModal(false)}>Cancelar</button>
                        <button className="modalConfirm" onClick={confirmEnd}>Sí, terminar</button>
                    </div>
                </div>
            </div>
        )}
        <QuestionCard
            question={examQuestions[currentIndex]}
            questionNumber={currentIndex + 1}
            total={total}
            selectedAnswer={selectedAnswer}
            answered={answered}
            showFeedback={config.showFeedback}
            timeLeft={timeLeft}
            timeLimit={config.timePerQuestion}
            onSelect={handleSelect}
            onNext={() => advanceToNext(selectedAnswer)}
            onEnd={handleEnd}
        />
        </>
    )
}
