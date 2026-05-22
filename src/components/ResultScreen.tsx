import { useState } from 'react'
import type { ReactNode } from 'react'
import { Trophy, AlertTriangle, BookOpen, CheckCircle, RotateCcw, List, ArrowLeft, CheckCircle2, XCircle, Clock } from 'lucide-react'
import type { AnswerRecord } from './Quiz.tsx'
import styles from './ResultScreen.module.css'

interface Props {
    score: number
    total: number
    answers: AnswerRecord[]
    onRestart: () => void
}

type Level = 'perfect' | 'good' | 'pass' | 'fail'

function getLevel(grade: number): Level {
    if (grade === 100) return 'perfect'
    if (grade >= 70) return 'good'
    if (grade >= 50) return 'pass'
    return 'fail'
}

const levelConfig: Record<Level, { icon: ReactNode; label: string; message: string }> = {
    perfect: {
        icon: <Trophy size={28} />,
        label: '¡Perfecto!',
        message: 'Dominas todas las normas de tránsito.',
    },
    good: {
        icon: <CheckCircle size={28} />,
        label: '¡Muy bien!',
        message: 'Estás casi listo para el examen oficial.',
    },
    pass: {
        icon: <AlertTriangle size={28} />,
        label: 'Aprobado',
        message: 'Repasa los temas donde fallaste.',
    },
    fail: {
        icon: <BookOpen size={28} />,
        label: 'Necesitas practicar',
        message: 'Estudia más y vuelve a intentarlo.',
    },
}

export default function ResultScreen({ score, total, answers, onRestart }: Props) {
    const grade = Math.round((score / total) * 100)
    const level = getLevel(grade)
    const config = levelConfig[level]
    const [view, setView] = useState<'result' | 'breakdown'>('result')

    if (view === 'breakdown') {
        return (
            <div className={styles.container}>
                <div className={styles.breakdownHeader}>
                    <button className={styles.backBtn} onClick={() => setView('result')}>
                        <ArrowLeft size={15} />
                        Volver
                    </button>
                    <span className={styles.breakdownTitle}>Desglose de respuestas</span>
                </div>

                <ul className={styles.breakdownList}>
                    {answers.map((rec, i) => {
                        const timedOut = rec.selected === null
                        const correct = rec.selected === rec.question.correctIndex
                        return (
                            <li key={i} className={`${styles.breakdownItem} ${correct ? styles.bCorrect : styles.bWrong}`}>
                                <div className={styles.bTopRow}>
                                    <span className={styles.bNum}>#{i + 1}</span>
                                    <span className={styles.bStatus}>
                                        {timedOut
                                            ? <><Clock size={13} /> Tiempo agotado</>
                                            : correct
                                                ? <><CheckCircle2 size={13} /> Correcta</>
                                                : <><XCircle size={13} /> Incorrecta</>}
                                    </span>
                                </div>
                                <p className={styles.bQuestion}>{rec.question.question}</p>
                                {!timedOut && !correct && (
                                    <p className={styles.bAnswer}>
                                        <span className={styles.bLabel}>Tu respuesta:</span>{' '}
                                        {rec.question.options[rec.selected!]}
                                    </p>
                                )}
                                <p className={styles.bAnswer}>
                                    <span className={styles.bLabel}>Correcta:</span>{' '}
                                    {rec.question.options[rec.question.correctIndex]}
                                </p>
                            </li>
                        )
                    })}
                </ul>

                <button className={styles.restartBtn} onClick={onRestart}>
                    <RotateCcw size={15} />
                    Intentar de nuevo
                </button>
            </div>
        )
    }

    return (
        <div className={styles.container}>
            <div className={`${styles.badge} ${styles[level]}`}>
                {config.icon}
            </div>

            <h2 className={styles.title}>{config.label}</h2>
            <p className={styles.message}>{config.message}</p>

            <div className={styles.scoreBox}>
                <div className={styles.gradeRow}>
                    <span className={styles.gradeNum}>{grade}</span>
                    <span className={styles.gradeBase}>/100</span>
                </div>
                <div className={styles.scoreBar}>
                    <div className={styles.scoreBarFill} style={{ width: `${grade}%` }} />
                </div>
                <span className={styles.scoreDetail}>{score} de {total} correctas</span>
            </div>

            <div className={styles.btnGroup}>
                <button className={styles.breakdownBtn} onClick={() => setView('breakdown')}>
                    <List size={15} />
                    Ver desglose
                </button>
                <button className={styles.restartBtn} onClick={onRestart}>
                    <RotateCcw size={15} />
                    Intentar de nuevo
                </button>
            </div>
        </div>
    )
}
