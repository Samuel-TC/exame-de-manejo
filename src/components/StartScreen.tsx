import { useState } from 'react'
import { Car, FileText, CheckCircle, Trophy, ChevronRight, Settings, Clock, Eye, Hash } from 'lucide-react'
import type { ExamConfig } from '../types/config'
import { defaultConfig } from '../types/config'
import styles from './StartScreen.module.css'

interface Props {
    onStart: (config: ExamConfig) => void
}

export default function StartScreen({ onStart }: Props) {
    const [config, setConfig] = useState<ExamConfig>(defaultConfig)

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

            {/* Configuración */}
            <div className={styles.configSection}>
                <div className={styles.configHeader}>
                    <Settings size={13} />
                    <span>Configuración del examen</span>
                </div>

                {/* Tiempo por pregunta */}
                <div className={styles.configRow}>
                    <div className={styles.configLabel}>
                        <Clock size={14} />
                        Tiempo por pregunta
                    </div>
                    <div className={styles.btnGroup}>
                        {([10, 20, null] as (10 | 20 | null)[]).map((t) => (
                            <button
                                key={String(t)}
                                className={`${styles.segBtn} ${config.timePerQuestion === t ? styles.segBtnActive : ''}`}
                                onClick={() => setConfig(c => ({ ...c, timePerQuestion: t }))}
                            >
                                {t === null ? 'Libre' : `${t}s`}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Mostrar respuesta */}
                <div className={styles.configRow}>
                    <div className={styles.configLabel}>
                        <Eye size={14} />
                        Mostrar respuesta al marcar
                    </div>
                    <button
                        className={`${styles.toggle} ${config.showFeedback ? styles.toggleOn : ''}`}
                        onClick={() => setConfig(c => ({ ...c, showFeedback: !c.showFeedback }))}
                        aria-pressed={config.showFeedback}
                    >
                        <span className={styles.toggleThumb} />
                    </button>
                </div>

                {/* Número de preguntas */}
                <div className={styles.configRow}>
                    <div className={styles.configLabel}>
                        <Hash size={14} />
                        Número de preguntas
                    </div>
                    <div className={styles.btnGroup}>
                        {([5, 10] as (5 | 10)[]).map((n) => (
                            <button
                                key={n}
                                className={`${styles.segBtn} ${config.questionCount === n ? styles.segBtnActive : ''}`}
                                onClick={() => setConfig(c => ({ ...c, questionCount: n }))}
                            >
                                {n}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            <div className={styles.divider} />

            <ul className={styles.info}>
                <li className={styles.infoItem}>
                    <FileText size={15} className={styles.infoIcon} />
                    {config.questionCount} preguntas de opción múltiple
                </li>
                <li className={styles.infoItem}>
                    <CheckCircle size={15} className={styles.infoIcon} />
                    {config.showFeedback ? 'Con retroalimentación inmediata' : 'Sin retroalimentación'}
                </li>
                <li className={styles.infoItem}>
                    <Trophy size={15} className={styles.infoIcon} />
                    Puntaje final al terminar
                </li>
            </ul>

            <button className={styles.startBtn} onClick={() => onStart(config)}>
                Iniciar Examen
                <ChevronRight size={18} />
            </button>
        </div>
    )
}
