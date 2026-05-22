export interface Question {
    id: number
    question: string
    options: string[]
    correctIndex: number
    explanation: string
    image?: string   // ruta relativa en src/assets/, opcional
}

export const questions: Question[] = [
    {
        id: 1,
        question: '¿Cuál es el significado de una luz roja en el semáforo?',
        options: ['Avanzar con precaución', 'Detenerse completamente', 'Reducir la velocidad', 'Ceder el paso'],
        correctIndex: 1,
        explanation: 'La luz roja indica que el conductor debe detenerse completamente antes de la línea de parada.',
        image: new URL('../assets/semaforo.jpg', import.meta.url).href,
    },
    {
        id: 2,
        question: '¿A qué velocidad máxima se puede circular en zona urbana?',
        options: ['40 km/h', '60 km/h', '80 km/h', '100 km/h'],
        correctIndex: 1,
        explanation: 'En zonas urbanas la velocidad máxima permitida es de 60 km/h salvo señalización contraria.',
    },
    {
        id: 3,
        question: '¿Qué significa la señal de "PARE"?',
        options: [
            'Reducir velocidad al 50%',
            'Ceder el paso a los vehículos que circulan por la vía principal',
            'Detenerse completamente y ceder el paso',
            'Solo detenerse si hay tráfico',
        ],
        correctIndex: 2,
        explanation: 'La señal PARE obliga al conductor a detenerse completamente y ceder el paso antes de continuar.',
        image: new URL('../assets/senal-pare.jpg', import.meta.url).href,
    },
    {
        id: 4,
        question: '¿Cuándo se deben usar las luces bajas (cortas)?',
        options: [
            'Solo de noche en autopista',
            'De noche, con lluvia, niebla o visibilidad reducida',
            'Solo cuando hay peatones',
            'Únicamente en túneles',
        ],
        correctIndex: 1,
        explanation: 'Las luces bajas deben usarse de noche y siempre que la visibilidad sea reducida por lluvia, niebla u otras condiciones.',
    },
    {
        id: 5,
        question: '¿Cuál es la distancia mínima de seguridad recomendada entre vehículos?',
        options: ['1 segundo de distancia', '2 segundos de distancia', '5 metros fijos', '10 metros fijos'],
        correctIndex: 1,
        explanation: 'Se recomienda mantener al menos 2 segundos de distancia respecto al vehículo de adelante (más en condiciones adversas).',
    },
    {
        id: 6,
        question: '¿Qué se debe hacer al acercarse a un cruce de ferrocarril sin barreras?',
        options: [
            'Acelerar para cruzar rápido',
            'Tocar el claxon y continuar',
            'Reducir la velocidad, mirar a ambos lados y cruzar con precaución',
            'Detenerse siempre 5 minutos',
        ],
        correctIndex: 2,
        explanation: 'En cruces de ferrocarril sin barreras debes reducir la velocidad, cerciorarte de que no viene tren y cruzar con precaución.',
    },
    {
        id: 7,
        question: '¿Está permitido usar el teléfono móvil mientras se conduce?',
        options: [
            'Sí, si es una llamada corta',
            'Solo con auriculares',
            'No, a menos que sea manos libres',
            'Sí, en semáforos en rojo',
        ],
        correctIndex: 2,
        explanation: 'El uso del teléfono al volante está prohibido salvo que se utilice un sistema de manos libres homologado.',
    },
    {
        id: 8,
        question: '¿Qué indica una línea continua en el centro de la calzada?',
        options: [
            'Se puede adelantar con cuidado',
            'Prohibido cruzar o adelantar',
            'Carril exclusivo para bicicletas',
            'Zona de frenada de emergencia',
        ],
        correctIndex: 1,
        explanation: 'La línea continua en el centro de la vía prohíbe cruzarla o adelantar.',
        image: new URL('../assets/linea-continua.jpg', import.meta.url).href,
    },
    {
        id: 9,
        question: '¿Cuál es la consecuencia de conducir bajo la influencia del alcohol?',
        options: [
            'Solo reduce los reflejos ligeramente',
            'Mejora la concentración',
            'Aumenta el tiempo de reacción y el riesgo de accidentes',
            'No afecta si el conductor está acostumbrado',
        ],
        correctIndex: 2,
        explanation: 'El alcohol aumenta significativamente el tiempo de reacción, reduce la coordinación y la visión, multiplicando el riesgo de accidente.',
    },
    {
        id: 10,
        question: '¿Qué debes hacer si el vehículo de adelante frena de repente?',
        options: [
            'Tocar el claxon y adelantarlo',
            'Frenar bruscamente y girar',
            'Frenar de forma controlada manteniendo la distancia de seguridad',
            'Cambiar de carril sin señalizar',
        ],
        correctIndex: 2,
        explanation: 'Mantener distancia de seguridad te permite frenar de forma controlada sin colisionar con el vehículo de adelante.',
    },
]
