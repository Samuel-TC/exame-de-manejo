import { useState } from 'react'
import { ZoomIn, X } from 'lucide-react'
import styles from './QuestionImage.module.css'

interface Props {
    src: string
    alt?: string
}

export default function QuestionImage({ src, alt = 'Imagen de la pregunta' }: Props) {
    const [open, setOpen] = useState(false)

    return (
        <>
            <button className={styles.thumbnail} onClick={() => setOpen(true)} title="Ampliar imagen">
                <img src={src} alt={alt} className={styles.thumbImg} />
                <span className={styles.zoomHint}>
                    <ZoomIn size={16} />
                    Ampliar
                </span>
            </button>

            {open && (
                <div className={styles.overlay} onClick={() => setOpen(false)}>
                    <div className={styles.lightbox} onClick={e => e.stopPropagation()}>
                        <button className={styles.closeBtn} onClick={() => setOpen(false)} title="Cerrar">
                            <X size={20} />
                        </button>
                        <img src={src} alt={alt} className={styles.fullImg} />
                    </div>
                </div>
            )}
        </>
    )
}
