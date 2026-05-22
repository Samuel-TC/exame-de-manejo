import { CheckCircle2, XCircle, ChevronRight, AlertCircle } from 'lucide-react'
import type { Question } from '../data/questions'
import styles from './QuestionCard.module.css'

interface Props {
  question: Question
  questionNumber: number
  total: number
  selectedAnswer: number | null
  showFeedback: boolean
  onSelect: (index: number) => void
  onNext: () => void
}

export default function QuestionCard({
  question,
  questionNumber,
  total,
  selectedAnswer,
  showFeedback,
  onSelect,
  onNext,
}: Props) {
  const isCorrect = selectedAnswer === question.correctIndex

  function getOptionClass(index: number): string {
    if (!showFeedback) return styles.option
    if (index === question.correctIndex) return `${styles.option} ${styles.correct}`
    if (index === selectedAnswer) return `${styles.option} ${styles.wrong}`
    return styles.option
  }

  return (
    <div className={styles.card}>
      <div className={styles.topBar}>
        <span className={styles.progressLabel}>
          Pregunta <strong>{questionNumber}</strong> de {total}
        </span>
        <span className={styles.progressFraction}>{Math.round((questionNumber / total) * 100)}%</span>
      </div>
      <div className={styles.progressBar}>
        <div className={styles.progressFill} style={{ width: `${(questionNumber / total) * 100}%` }} />
      </div>

      <h2 className={styles.question}>{question.question}</h2>

      <ul className={styles.options}>
        {question.options.map((option, i) => (
          <li key={i}>
            <button className={getOptionClass(i)} onClick={() => onSelect(i)} disabled={showFeedback}>
              <span className={styles.optionLetter}>{String.fromCharCode(65 + i)}</span>
              <span className={styles.optionText}>{option}</span>
              {showFeedback && i === question.correctIndex && (
                <CheckCircle2 size={16} className={styles.iconCorrect} />
              )}
              {showFeedback && i === selectedAnswer && i !== question.correctIndex && (
                <XCircle size={16} className={styles.iconWrong} />
              )}
            </button>
          </li>
        ))}
      </ul>

      {showFeedback && (
        <div className={isCorrect ? styles.feedbackCorrect : styles.feedbackWrong}>
          <div className={styles.feedbackTitle}>
            {isCorrect
              ? <CheckCircle2 size={15} />
              : <AlertCircle size={15} />}
            <strong>{isCorrect ? '¡Correcto!' : 'Incorrecto'}</strong>
          </div>
          <p className={styles.feedbackText}>{question.explanation}</p>
        </div>
      )}

      {showFeedback && (
        <button className={styles.nextBtn} onClick={onNext}>
          {questionNumber < total ? 'Siguiente pregunta' : 'Ver resultados'}
          <ChevronRight size={16} />
        </button>
      )}
    </div>
  )
}
