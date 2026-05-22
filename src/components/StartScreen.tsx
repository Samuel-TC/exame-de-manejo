import styles from './StartScreen.module.css'

interface Props {
  onStart: () => void
}

export default function StartScreen({ onStart }: Props) {
  return (
    <div className={styles.container}>
      <div className={styles.icon}>🚗</div>
      <h1 className={styles.title}>Examen de Manejo</h1>
      <p className={styles.subtitle}>
        Pon a prueba tus conocimientos sobre las normas de tránsito y seguridad vial.
      </p>
      <ul className={styles.info}>
        <li>📝 10 preguntas de opción múltiple</li>
        <li>✅ Respuesta correcta con explicación</li>
        <li>🏆 Puntaje final al terminar</li>
      </ul>
      <button className={styles.startBtn} onClick={onStart}>
        Iniciar Examen
      </button>
    </div>
  )
}
