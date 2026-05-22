import { CheckCircle2, XCircle, ChevronRight, AlertCircle, Clock } from 'lucide-react'
import type { Question } from '../data/questions'
import styles from './QuestionCard.module.css'

interface Props {
    question: Question
    questionNumber: number
    total: number
    selectedAnswer: number | null
    answered: boolean
    showFeedback: boolean
    timeLeft: number | null
    timeLimit: 10 | 20 | null
    onSelect: (index: number) => void
    onNext: () => void
}

export default function QuestionCard({
    question,
    questionNumber,
    total,
    selectedAnswer,
    answered,
    showFeedback,
    timeLeft,
    timeLimit,
    onSelect,
    onNext,
}: Props) {
    const isCorrect = selectedAnswer === question.correctIndex
    const timedOut = answered && selectedAnswer === null

    function getOptionClass(index: number): string {
        if (!answered) return styles.option
        // On timeout: always reveal the correct answer in green
        if (timedOut) {
            return index === question.correctIndex
                ? `${styles.option} ${styles.correct}`
                : styles.option
        }
        // Without feedback: just highlight the selected option in blue
        if (!showFeedback) {
            return index === selectedAnswer
                ? `${styles.option} ${styles.selected}`
                : styles.option
        }
        if (index === question.correctIndex) return `${styles.option} ${styles.correct}`
        if (index === selectedAnswer) return `${styles.option} ${styles.wrong}`
        return styles.option
    }

    const timerPercent = timeLimit !== null && timeLeft !== null ? (timeLeft / timeLimit) * 100 : 100
    const timerColorClass =
        timeLeft === null ? '' :
            timeLeft <= 3 ? styles.timerDanger :
                timeLeft <= 5 ? styles.timerWarning :
                    styles.timerNormal

    return (
        <div className={styles.card}>
            <div className={styles.topBar}>
                <span className={styles.progressLabel}>
                    Pregunta <strong>{questionNumber}</strong> de {total}
                </span>
                {timeLeft !== null ? (
                    <span className={`${styles.timerBadge} ${timerColorClass}`}>
                        <Clock size={12} />
                        {timeLeft}s
                    </span>
                ) : (
                    <span className={styles.progressFraction}>{Math.round((questionNumber / total) * 100)}%</span>
                )}
            </div>

            <div className={styles.progressBar}>
                <div className={styles.progressFill} style={{ width: `${(questionNumber / total) * 100}%` }} />
            </div>

            {timeLimit !== null && (
                <div className={styles.timerBar}>
                    <div
                        className={`${styles.timerBarFill} ${timerColorClass}`}
                        style={{ width: `${timerPercent}%`, transition: timeLeft !== null && timeLeft > 0 ? 'width 1s linear' : 'none' }}
                    />
                </div>
            )}

            <h2 className={styles.question}>{question.question}</h2>

            <ul className={styles.options}>
                {question.options.map((option, i) => (
                    <li key={i}>
                        <button className={getOptionClass(i)} onClick={() => onSelect(i)} disabled={answered}>
                            <span className={styles.optionLetter}>{String.fromCharCode(65 + i)}</span>
                            <span className={styles.optionText}>{option}</span>
                            {answered && (timedOut || showFeedback) && i === question.correctIndex && (
                                <CheckCircle2 size={16} className={styles.iconCorrect} />
                            )}
                            {answered && showFeedback && !timedOut && i === selectedAnswer && i !== question.correctIndex && (
                                <XCircle size={16} className={styles.iconWrong} />
                            )}
                        </button>
                    </li>
                ))}
            </ul>

            {answered && showFeedback && (
                <div className={timedOut || !isCorrect ? styles.feedbackWrong : styles.feedbackCorrect}>
                    <div className={styles.feedbackTitle}>
                        {timedOut ? (
                            <><Clock size={15} /><strong>¡Tiempo agotado! Avanzando...</strong></>
                        ) : isCorrect ? (
                            <><CheckCircle2 size={15} /><strong>¡Correcto!</strong></>
                        ) : (
                            <><AlertCircle size={15} /><strong>Incorrecto</strong></>
                        )}
                    </div>
                    {timedOut ? (
                        <p className={styles.feedbackText}>
                            La respuesta era: <strong>{question.options[question.correctIndex]}</strong>
                        </p>
                    ) : (
                        <p className={styles.feedbackText}>{question.explanation}</p>
                    )}
                </div>
            )}

            {/* Next button: only when answered by the user (not by timeout auto-advance) */}
            {answered && !timedOut && (
                <button className={styles.nextBtn} onClick={onNext}>
                    {questionNumber < total ? 'Siguiente pregunta' : 'Ver resultados'}
                    <ChevronRight size={16} />
                </button>
            )}
        </div>
    )
}
