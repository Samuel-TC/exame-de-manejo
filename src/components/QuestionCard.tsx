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
  function getOptionClass(index: number): string {
    if (!showFeedback) return styles.option
    if (index === question.correctIndex) return `${styles.option} ${styles.correct}`
    if (index === selectedAnswer) return `${styles.option} ${styles.wrong}`
    return styles.option
  }

  return (
    <div className={styles.card}>
      <div className={styles.progress}>
        Pregunta {questionNumber} de {total}
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
              {option}
            </button>
          </li>
        ))}
      </ul>

      {showFeedback && (
        <div className={selectedAnswer === question.correctIndex ? styles.feedbackCorrect : styles.feedbackWrong}>
          <strong>{selectedAnswer === question.correctIndex ? '¡Correcto!' : 'Incorrecto'}</strong>
          <p>{question.explanation}</p>
        </div>
      )}

      {showFeedback && (
        <button className={styles.nextBtn} onClick={onNext}>
          {questionNumber < total ? 'Siguiente pregunta →' : 'Ver resultados'}
        </button>
      )}
    </div>
  )
}
