import { Car, FileText, CheckCircle, Trophy, ChevronRight } from 'lucide-react'
import styles from './StartScreen.module.css'

interface Props {
  onStart: () => void
}

export default function StartScreen({ onStart }: Props) {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.iconWrap}>
          <Car size={32} strokeWidth={1.5} />
        </div>
        <h1 className={styles.title}>Examen de Manejo</h1>
        <p className={styles.subtitle}>
          Pon a prueba tus conocimientos sobre las normas de tránsito y seguridad vial.
        </p>
      </div>

      <div className={styles.divider} />

      <ul className={styles.info}>
        <li className={styles.infoItem}>
          <FileText size={16} className={styles.infoIcon} />
          10 preguntas de opción múltiple
        </li>
        <li className={styles.infoItem}>
          <CheckCircle size={16} className={styles.infoIcon} />
          Respuesta correcta con explicación
        </li>
        <li className={styles.infoItem}>
          <Trophy size={16} className={styles.infoIcon} />
          Puntaje final al terminar
        </li>
      </ul>

      <button className={styles.startBtn} onClick={onStart}>
        Iniciar Examen
        <ChevronRight size={18} />
      </button>
    </div>
  )
}
