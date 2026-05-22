import styles from './ResultScreen.module.css'

interface Props {
  score: number
  total: number
  onRestart: () => void
}

function getEmoji(score: number, total: number): string {
  const pct = score / total
  if (pct === 1) return '🏆'
  if (pct >= 0.7) return '🎉'
  if (pct >= 0.5) return '👍'
  return '📚'
}

function getMessage(score: number, total: number): string {
  const pct = score / total
  if (pct === 1) return '¡Perfecto! Dominas las normas de tránsito.'
  if (pct >= 0.7) return '¡Muy bien! Estás casi listo para el examen oficial.'
  if (pct >= 0.5) return 'Aprobado, pero repasa los temas fallidos.'
  return 'Necesitas repasar más. ¡No te rindas!'
}

export default function ResultScreen({ score, total, onRestart }: Props) {
  const percentage = Math.round((score / total) * 100)

  return (
    <div className={styles.container}>
      <div className={styles.emoji}>{getEmoji(score, total)}</div>
      <h2 className={styles.title}>Resultado final</h2>
      <div className={styles.scoreBadge}>
        {score} / {total}
      </div>
      <div className={styles.percentage}>{percentage}%</div>
      <p className={styles.message}>{getMessage(score, total)}</p>
      <button className={styles.restartBtn} onClick={onRestart}>
        Intentar de nuevo
      </button>
    </div>
  )
}
