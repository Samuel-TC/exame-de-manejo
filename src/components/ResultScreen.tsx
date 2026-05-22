import { Trophy, AlertTriangle, BookOpen, CheckCircle, RotateCcw } from 'lucide-react'
import styles from './ResultScreen.module.css'

interface Props {
  score: number
  total: number
  onRestart: () => void
}

type Level = 'perfect' | 'good' | 'pass' | 'fail'

function getLevel(score: number, total: number): Level {
  const pct = score / total
  if (pct === 1) return 'perfect'
  if (pct >= 0.7) return 'good'
  if (pct >= 0.5) return 'pass'
  return 'fail'
}

const levelConfig: Record<Level, { icon: React.ReactNode; label: string; message: string }> = {
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

export default function ResultScreen({ score, total, onRestart }: Props) {
  const percentage = Math.round((score / total) * 100)
  const level = getLevel(score, total)
  const config = levelConfig[level]

  return (
    <div className={styles.container}>
      <div className={`${styles.badge} ${styles[level]}`}>
        {config.icon}
      </div>

      <h2 className={styles.title}>{config.label}</h2>
      <p className={styles.message}>{config.message}</p>

      <div className={styles.scoreBox}>
        <div className={styles.scoreMain}>
          <span className={styles.scoreNum}>{score}</span>
          <span className={styles.scoreOf}>/{total}</span>
        </div>
        <div className={styles.scoreBar}>
          <div className={styles.scoreBarFill} style={{ width: `${percentage}%` }} />
        </div>
        <span className={styles.scorePercent}>{percentage}% correcto</span>
      </div>

      <button className={styles.restartBtn} onClick={onRestart}>
        <RotateCcw size={15} />
        Intentar de nuevo
      </button>
    </div>
  )
}
