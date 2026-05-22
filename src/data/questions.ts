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
        question: '¿Cuántos puntos acumula en su licencia un conductor que cometa una infracción de Categoría A según la Ley de Tránsito de Costa Rica?',
        options: ['2 puntos', '4 puntos', '6 puntos', '0 puntos'],
        correctIndex: 2,
        explanation: 'Las infracciones de Categoría A son las más graves y acumulan un total de 6 puntos en la licencia de conducir, además de la sanción económica correspondiente.',
    },
    {
        id: 2,
        question: '¿Cuál de las siguientes maniobras se considera una infracción de Categoría A que acumula 6 puntos?',
        options: [
            'Adelantar en curvas, intersecciones, cruces de ferrocarril, puentes o túneles',
            'No respetar la señal de alto en una intersección',
            'Conducir un vehículo con las placas de otro automóvil',
            'Superar en más de 40 km/h el límite de velocidad máximo'
        ],
        correctIndex: 0,
        explanation: 'Adelantar en lugares peligrosos como curvas, puentes, túneles, intersecciones o cruces de ferrocarril e invadir carriles separados por línea continua son faltas gravísimas de Categoría A.',
    },
    {
        id: 3,
        question: 'Si un conductor se niega a someterse a una prueba de alcoholimetría requerida por la autoridad de tránsito, ¿qué sanción de puntos recibe?',
        options: ['Ninguna, solo una multa económica', 'Acumula 4 puntos', 'Acumula 6 puntos', 'Suspensión automática por 5 años'],
        correctIndex: 2,
        explanation: 'La negativa a acatar el requisito de someterse a las pruebas de alcoholimetría está tipificada de forma estricta dentro de las infracciones de Categoría A, acumulando 6 puntos.',
    },
    {
        id: 4,
        question: '¿Cuántos puntos acumulan en la licencia las infracciones catalogadas dentro de la Categoría B?',
        options: ['6 puntos', '4 puntos', '2 puntos', '3 puntos'],
        correctIndex: 1,
        explanation: 'Las conductas delictivas o de riesgo alto encuadradas en la Categoría B de la legislación vial acumulan 4 puntos en el expediente del conductor.',
    },
    {
        id: 5,
        question: '¿Qué infracción se comete si se transporta a menores de 12 años con una estatura menor a 1,45 metros sin los dispositivos de seguridad (sillas/boosters) correspondientes?',
        options: ['Infracción Categoría A (6 puntos)', 'Infracción Categoría B (4 puntos)', 'Infracción Categoría C (2 puntos)', 'Es una falta leve sin acumulación de puntos'],
        correctIndex: 1,
        explanation: 'Permitir que menores de 12 años con estatura menor a 1,45 m viajen sin dispositivos de retención infantil es una falta de Categoría B que acumula 4 puntos.',
    },
    {
        id: 6,
        question: '¿Cuál es la consecuencia en puntos si un conductor supera en más de 40 km/h el límite de velocidad máximo establecido?',
        options: ['Acumula 6 puntos', 'Acumula 2 puntos', 'Acumula 4 puntos', 'No acumula puntos si paga la multa en los primeros 5 días'],
        correctIndex: 2,
        explanation: 'Exceder el límite de velocidad en más de 40 km/h califica como una infracción de Categoría B, sumando 4 puntos a la licencia.',
    },
    {
        id: 7,
        question: 'Circular con placas que pertenecen a otro vehículo, o con placas alteradas o falsas, conlleva una sanción de Categoría:',
        options: ['Categoría A', 'Categoría B', 'Categoría C', 'Categoría D'],
        correctIndex: 1,
        explanation: 'El uso indebido, alteración o falsificación de las placas de circulación física del vehículo se sanciona bajo la Categoría B (4 puntos).',
    },
    {
        id: 8,
        question: 'Ignorar la luz roja de un semáforo (salvo las excepciones explícitas de giro permitidas por ley) acumula:',
        options: ['6 puntos', '2 puntos', '5 puntos', '4 puntos'],
        correctIndex: 3,
        explanation: 'Irrespetar la luz roja de un semáforo o la señal de alto en las intersecciones acumula 4 puntos bajo la Categoría B.',
    },
    {
        id: 9,
        question: '¿Qué tipo de línea centro en la calzada prohíbe de forma absoluta el adelantamiento a otros vehículos?',
        options: ['Línea blanca discontinua', 'Línea de barrera continua', 'Línea de canalización', 'Línea de borde exterior'],
        correctIndex: 1,
        explanation: 'La línea de barrera continua prohíbe la invasión del carril contrario para efectuar maniobras de adelantamiento.',
        image: new URL('../assets/linea-continua.jpg', import.meta.url).href,
    },
    {
        id: 10,
        question: 'Según el Manual de Conductor de Costa Rica, la distancia mínima temporal estándar recomendada para seguir a otro vehículo en condiciones normales es de:',
        options: ['1 segundo', '2 segundos', '4 segundos', '5 segundos'],
        correctIndex: 1,
        explanation: 'Se establece la regla de los 2 segundos como margen de reacción mínimo seguro ante frenadas intempestivas del vehículo delantero.',
    },
    {
        id: 11,
        question: 'Al acercarse a una rotonda, ¿qué vehículo tiene la prioridad de paso por norma general?',
        options: [
            'El vehículo que circula dentro de la rotonda',
            'El vehículo que va a ingresar a la rotonda',
            'El vehículo de mayor tamaño',
            'El vehículo que circula por el carril izquierdo exterior'
        ],
        correctIndex: 0,
        explanation: 'Los vehículos que ya se encuentran circulando dentro de la rotonda tienen prioridad de paso absoluta sobre los que intentan ingresar.',
    },
    {
        id: 12,
        question: '¿Qué se debe hacer obligatoriamente ante una señal gráfica de "CEDA"?',
        options: [
            'Detenerse por completo siempre, haya o no tráfico',
            'Reducir la velocidad y detenerse únicamente si circulan vehículos, peatones o ciclistas con prioridad',
            'Acelerar para incorporarse antes que los demás',
            'Tocar la bocina para advertir la llegada'
        ],
        correctIndex: 1,
        explanation: 'La señal de Ceda el Paso no exige una detención obligatoria total si la vía está despejada, pero exige disminuir la marcha y detenerse si es necesario para dar paso.',
    },
    {
        id: 13,
        question: '¿Cuál es la función principal de los captaluces (ojos de gato) de color rojo en las carreteras?',
        options: [
            'Indicar el inicio de una zona escolar',
            'Advertir que se está circulando en sentido contrario o delimitar el borde derecho de la calzada de riesgo',
            'Indicar carriles exclusivos para transporte público',
            'Servir de adorno nocturno para curvas de autopistas'
        ],
        correctIndex: 1,
        explanation: 'Los captaluces rojos alertan sobre condiciones de peligro, bordes de calzada prohibidos o sentido contrario de circulación.',
    },
    {
        id: 14,
        question: 'En condiciones de lluvia intensa, neblina o visibilidad sumamente reducida durante el día, ¿qué luces deben encenderse?',
        options: ['Luces altas (largas)', 'Luces bajas (cortas) o antiniebla si posee', 'Únicamente las luces intermitentes de emergencia', 'Ninguna si es de día'],
        correctIndex: 1,
        explanation: 'Las luces bajas garantizan la visibilidad del automotor para otros conductores sin causar deslumbramiento, lo cual ocurre frecuentemente con las luces altas bajo neblina.',
    },
    {
        id: 15,
        question: '¿A partir de qué distancia antes de realizar un giro en una esquina se debe activar la luz direccional (señalero)?',
        options: ['Al menos 5 metros antes', 'Al menos 10 metros antes', 'Al menos 30 metros antes', 'Justo en el momento de iniciar el viraje'],
        correctIndex: 2,
        explanation: 'La normativa técnica indica que se debe señalizar la maniobra con un mínimo de 30 metros de anticipación para prevenir a los demás usuarios de la vía.',
    },
    {
        id: 16,
        question: '¿Qué significa un semáforo con una luz amarilla fija parpadeante o destellante continua?',
        options: [
            'Detención obligatoria inmediata',
            'Giro a la izquierda permitido libremente',
            'Avanzar con precaución, equivalente a un CEDA',
            'Semáforo descompuesto, pase rápido'
        ],
        correctIndex: 2,
        explanation: 'La luz amarilla intermitente advierte peligro y ordena a los conductores reducir la velocidad y avanzar con extrema precaución.',
    },
    {
        id: 17,
        question: 'Bajo la ley costarricense, ¿cuál es el límite de velocidad máximo por defecto en zonas escolares cuando hay presencia de estudiantes?',
        options: ['40 km/h', '25 km/h', '30 km/h', '20 km/h'],
        correctIndex: 1,
        explanation: 'Frente a centros educativos y de salud, el límite de velocidad se reduce drásticamente a 25 km/h cuando hay flujo de personas.',
    },
    {
        id: 18,
        question: '¿En cuál de las siguientes situaciones está totalmente prohibido efectuar un giro en U?',
        options: [
            'En intersecciones semaforizadas libres',
            'En curvas, puentes, pasos a desnivel, túneles o donde haya línea continua',
            'En avenidas de dos carriles',
            'Después de haber avanzado 100 metros en línea recta'
        ],
        correctIndex: 1,
        explanation: 'El giro en U está prohibido por ley en curvas, pendientes, puentes, túneles, pasos a desnivel y tramos señalizados con línea de barrera continua por el alto riesgo de colisión.',
    },
    {
        id: 19,
        question: '¿Qué indica una línea amarilla discontinua pintada en el centro de una calzada bidireccional?',
        options: [
            'Prohibición absoluta de adelantar',
            'Permiso para adelantar si las condiciones de visibilidad y seguridad son óptimas',
            'Carril exclusivo para vehículos de emergencia',
            'Zona de estacionamiento autorizado'
        ],
        correctIndex: 1,
        explanation: 'La línea discontinua o segmentada en el centro de la vía divide sentidos opuestos de circulación y autoriza la maniobra de adelantamiento.',
    },
    {
        id: 20,
        question: '¿Qué tipo de licencia se requiere en Costa Rica para conducir vehículos automotores livianos de uso particular (automóviles)?',
        options: ['Licencia Tipo A-1', 'Licencia Tipo B-1', 'Licencia Tipo B-2', 'Licencia Tipo C-2'],
        correctIndex: 1,
        explanation: 'La licencia B-1 faculta para conducir vehículos livianos de hasta 4000 kilogramos de peso bruto administrativo.',
    },
    {
        id: 21,
        question: '¿Está permitido adelantar a otro vehículo por el lado derecho en una calzada de un solo carril por sentido?',
        options: [
            'Sí, si el vehículo de adelante va muy despacio',
            'No, el adelantamiento por la derecha en estas circunstancias está prohibido',
            'Sí, si se utiliza el espaldón',
            'Sí, tocando la bocina previamente'
        ],
        correctIndex: 1,
        explanation: 'Salvo en vías con múltiples carriles claramente demarcados en el mismo sentido, adelantar por la derecha o usar el espaldón es ilegal y sumamente peligroso.',
    },
    {
        id: 22,
        question: '¿Qué documento obligatorio NO puede faltar físicamente o en validación digital al transitar por las vías costarricenses?',
        options: [
            'El título de propiedad original del vehículo',
            'La licencia de conducir vigente y el derecho de circulación (marchamo/RTV) al día',
            'El contrato de compraventa del auto',
            'La factura de la última revisión mecánica particular'
        ],
        correctIndex: 1,
        explanation: 'Todo conductor debe portar su licencia idónea vigente, así como los documentos del vehículo que certifiquen el pago de derechos de circulación y revisión técnica obligatoria.',
    },
    {
        id: 23,
        question: '¿A quién se le debe ceder el paso obligatoriamente si se presenta una unidad de bomberos o ambulancia con sirenas y luces encendidas?',
        options: [
            'Únicamente si transitan por autopistas nacionales',
            'Tienen prioridad de paso absoluta en cualquier vía, por lo que se debe despejar el carril apartándose hacia la derecha',
            'Solo si van por el carril izquierdo',
            'No tienen prioridad si el semáforo está en rojo para ellos'
        ],
        correctIndex: 1,
        explanation: 'Los vehículos de emergencia en cumplimiento de sus funciones tienen prioridad de paso. Los conductores deben maniobrar de forma segura para cederles el paso libre.',
    },
    {
        id: 24,
        question: '¿Cuál es el efecto principal del fenómeno conocido como "hidroplaneo" o "aquaplaning"?',
        options: [
            'El motor se apaga debido a la humedad del escape',
            'Las llantas pierden adherencia con el pavimento debido a una capa de agua, provocando pérdida de control',
            'Los frenos se bloquean de manera electrónica instantánea',
            'Las luces del tablero parpadean por cortocircuito'
        ],
        correctIndex: 1,
        explanation: 'El hidroplaneo ocurre cuando las llantas no logran evacuar el agua sobre la calzada, flotando sobre ella y anulando la capacidad de frenado y dirección.',
    },
    {
        id: 25,
        question: 'Producir ruido o emisiones contaminantes que excedan los límites establecidos por la ley vigente constituye una infracción de:',
        options: ['Categoría A', 'Categoría B', 'Categoría C', 'Categoría D'],
        correctIndex: 0,
        explanation: 'La contaminación sónica o ambiental por gases fuera de los rangos legales cometida por vehículos automotores está tipificada en la Categoría A.',
    },
    {
        id: 26,
        question: '¿Cuál es la vigencia máxima general de una licencia de conducir por primera vez (conductor novato) en Costa Rica?',
        options: ['2 años', '3 años', '5 años', '6 años'],
        correctIndex: 1,
        explanation: 'Las licencias de conducir que se expiden por primera vez tienen una vigencia limitada de 3 años como periodo de prueba y acumulación de historial.',
    },
    {
        id: 27,
        question: '¿Qué porcentaje de alcohol por litro de sangre define técnicamente el estado de ebriedad bajo la categoría de conductor profesional?',
        options: ['0.20 gramos o más', '0.50 gramos o más', '0.10 gramos o más', '0.00 gramos estrictos'],
        correctIndex: 0,
        explanation: 'Para conductores profesionales y novatos, el límite legal de alcohol en sangre es más estricto, considerándose infracción a partir de los 0.20 gramos por litro de sangre.',
    },
    {
        id: 28,
        question: '¿Cuál es el valor del límite de alcohol en sangre para conductores comunes o particulares antes de ser considerado delito penal?',
        options: ['0.50 gramos por litro', '0.75 gramos por litro', '0.30 gramos por litro', '1.00 gramos por litro'],
        correctIndex: 1,
        explanation: 'En conductores particulares, niveles de alcohol superiores a 0.75 gramos por litro de sangre constituyen un delito penal según la normativa vigente.',
    },
    {
        id: 29,
        question: '¿Qué distancia mínima debe mantener un conductor al adelantar a un ciclista en la vía pública?',
        options: ['0.5 metros', '1.0 metro', '1.5 metros', '2.0 metros'],
        correctIndex: 2,
        explanation: 'Por motivos de seguridad vial y protección al usuario vulnerable, la ley exige separación lateral mínima de 1.5 metros al adelantar ciclistas.',
    },
    {
        id: 30,
        question: '¿Bajo qué categoría se sanciona circular con un vehículo que no haya aprobado la Revisión Técnica Vehicular (RTV)?',
        options: ['Categoría B', 'Categoría C', 'Categoría D', 'Categoría E'],
        correctIndex: 1,
        explanation: 'No contar con la inspección técnica vehicular aprobada y vigente se sanciona de manera económica bajo las infracciones de Categoría C.',
    },
    {
        id: 31,
        question: '¿Cuál es la función principal de las líneas de borde de calzada de color blanco?',
        options: [
            'Indicar que se puede estacionar sobre ellas',
            'Delimitar el extremo derecho de la vía para guiar la conducción nocturna o con lluvia',
            'Separar carriles que van en sentido contrario',
            'Reservar espacio para paradas de autobuses'
        ],
        correctIndex: 1,
        explanation: 'Las líneas laterales continuas blancas guían al conductor mostrando el límite exterior utilizable de la calzada pavimentada.',
    },
    {
        id: 32,
        question: '¿Cuál de las siguientes es una conducta prohibida en zonas escolares?',
        options: [
            'Conducir con las luces bajas encendidas',
            'Estacionar vehículos bloqueando los accesos peatonales o rampas de personas con discapacidad',
            'Utilizar el sistema de aire acondicionado del automóvil',
            'Disminuir la velocidad a menos de 40 km/h'
        ],
        correctIndex: 1,
        explanation: 'El bloqueo de accesos y rampas en zonas escolares restringe de forma peligrosa la movilidad segura de los peatones y estudiantes.',
    },
    {
        id: 33,
        question: '¿A quién le corresponde la prioridad de paso en una intersección donde no existen señales de tránsito de ningún tipo?',
        options: [
            'Al vehículo de mayor tamaño',
            'Al vehículo que aparece por el lado derecho del conductor',
            'Al vehículo que transita a mayor velocidad',
            'Al vehículo que avanza en línea recta únicamente'
        ],
        correctIndex: 1,
        explanation: 'A falta de señalización regulatoria en cruces de igual jerarquía, aplica la regla general de cortesía vial de ceder el paso al vehículo que sale por la derecha.',
    },
    {
        id: 34,
        question: '¿Qué significan las líneas diagonales amarillas pintadas en forma de cuadrícula dentro de una intersección?',
        options: [
            'Zona permitida para el abordaje de pasajeros',
            'Área de estacionamiento momentáneo',
            'Prohibición de bloquear la intersección si hay congestionamiento vehicular',
            'Espacio exclusivo para giros rápidos a la izquierda'
        ],
        correctIndex: 2,
        explanation: 'La cuadrícula amarilla prohíbe quedar detenido dentro de la intersección bloqueando el flujo transversal aunque el semáforo esté en verde.',
    },
    {
        id: 35,
        question: '¿Qué tipo de sanción recibe el conductor que no utilice el cinturón de seguridad mientras conduce?',
        options: [
            'Infracción Categoría A con retiro del vehículo',
            'Infracción Categoría C con multa económica',
            'Infracción Categoría E sin repercusión económica',
            'Amonestación verbal únicamente'
        ],
        correctIndex: 1,
        explanation: 'No utilizar el cinturón de seguridad, o permitir que los acompañantes no lo usen, es catalogado como una infracción de Categoría C.',
    },
    {
        id: 36,
        question: '¿Cuál es la distancia mínima permitida para estacionar un vehículo cerca de una hidrante de bomberos?',
        options: ['1 metro', '3 metros', '5 metros', '10 metros'],
        correctIndex: 2,
        explanation: 'La ley prohíbe el estacionamiento a menos de 5 metros de esquinas, hidrantes o zonas de seguridad peatonal.',
    },
    {
        id: 37,
        question: '¿Qué se debe hacer si las luces direccionales de nuestro vehículo se encuentran dañadas provisionalmente?',
        options: [
            'No señalizar y realizar las maniobras de forma rápida',
            'Utilizar las señales manuales reglamentarias con el brazo izquierdo',
            'Tocar el claxon repetidamente antes de cada giro',
            'Encender y apagar las luces altas'
        ],
        correctIndex: 1,
        explanation: 'El Manual de Conductor describe las señales con el brazo extendido hacia afuera del vehículo como método legal alterno para indicar giros o detenciones.',
    },
    {
        id: 38,
        question: '¿Qué indica el brazo extendido horizontalmente hacia afuera por la ventana del conductor?',
        options: ['Que el vehículo va a detenerse', 'Que el vehículo va a realizar un giro a la izquierda', 'Que el vehículo va a realizar un giro a la derecha', 'Que da permiso para adelantar'],
        correctIndex: 1,
        explanation: 'El brazo extendido en posición completamente horizontal señala de forma estándar la intención de virar hacia el lado izquierdo.',
    },
    {
        id: 39,
        question: '¿Qué indica el brazo izquierdo doblado hacia arriba en un ángulo recto de 90 grados?',
        options: ['Giro a la izquierda', 'Giro a la derecha', 'Disminución de velocidad', 'Estacionamiento'],
        correctIndex: 1,
        explanation: 'El brazo en ángulo recto hacia arriba es la señal manual universal para advertir la maniobra de giro a la derecha.',
    },
    {
        id: 40,
        question: 'Cuando un conductor saca el brazo izquierdo apuntando de forma inclinada hacia el suelo, está indicando:',
        options: ['Que va a acelerar a fondo', 'Que va a disminuir la velocidad o detenerse completamente', 'Que busca estacionar en paralelo', 'Que la vía está libre adelante'],
        correctIndex: 1,
        explanation: 'El brazo extendido apuntando hacia abajo previene a los conductores traseros sobre una reducción considerable de marcha o parada.',
    },
    {
        id: 41,
        question: '¿Qué tipo de señal vial se clasifica con colores de fondo reglamentarios naranja y letras negras?',
        options: ['Señales Reglamentarias', 'Señales de Información Turística', 'Señales de Obras o Prevención Temporal en la Vía', 'Señales de Destino'],
        correctIndex: 2,
        explanation: 'El color naranja resalta zonas de construcción, reparaciones viales o desvíos temporales que requieren máxima alerta del conductor.',
    },
    {
        id: 42,
        question: '¿A qué velocidad máxima está permitido circular en autopistas nacionales bajo condiciones normales si no hay señalización que indique lo contrario?',
        options: ['80 km/h', '100 km/h', '120 km/h', '90 km/h'],
        correctIndex: 1,
        explanation: 'Por directriz vial, el límite superior genérico permitido en tramos libres de autopista debidamente diseñados es de 100 km/h.',
    },
    {
        id: 43,
        question: '¿Cuál es la sanción si un conductor transporta mayor cantidad de pasajeros que la capacidad estructural autorizada para la que fue diseñado el vehículo?',
        options: ['Infracción de Categoría A', 'Infracción de Categoría C', 'Infracción de Categoría D', 'No es sancionable si todos van sentados'],
        correctIndex: 1,
        explanation: 'El exceso de pasajeros respecto a la boleta de capacidad máxima del marchamo o RTV se penaliza bajo las multas de Categoría C.',
    },
    {
        id: 44,
        question: '¿Qué luces deben utilizarse en un vehículo cuando este sufre un desperfecto mecánico y queda varado a la orilla de la carretera?',
        options: ['Luces altas únicamente', 'Luces bajas y luz interna', 'Luces intermitentes de emergencia (luces de posición/hazzard)', 'Ninguna luz para no gastar batería'],
        correctIndex: 2,
        explanation: 'Las luces intermitentes simultáneas advierten a la distancia a otros conductores de la presencia de un obstáculo inmóvil.',
    },
    {
        id: 45,
        question: '¿Cuál de los siguientes elementos de seguridad activa en un vehículo ayuda directamente a evitar el bloqueo de las ruedas durante un frenado de emergencia?',
        options: ['El control de tracción (TCS)', 'El sistema de frenos antibloqueo (ABS)', 'La suspensión independiente', 'La dirección hidráulica asistida'],
        correctIndex: 1,
        explanation: 'El sistema ABS modula la presión hidráulica de frenado para evitar que las llantas se arrastren, permitiendo maniobrar el vehículo mientras se frena.',
    },
    {
        id: 46,
        question: '¿Qué se debe colocar prioritariamente detrás y delante de un vehículo varado en carretera para alertar a los demás usuarios?',
        options: ['Ramas de árboles grandes', 'Dispositivos reflectantes de peligro (triángulos de seguridad)', 'Piedras de tamaño considerable', 'El manual de usuario del auto'],
        correctIndex: 1,
        explanation: 'Los triángulos reflectivos homologados son obligatorios por ley y deben colocarse a distancias seguras para prevenir accidentes.',
    },
    {
        id: 47,
        question: '¿Cuál es el límite mínimo de profundidad permitido para el dibujo de las ranuras principales en las llantas de un automóvil liviano?',
        options: ['1.6 milímetros', '2.0 milímetros', '1.0 milímetro', '0.5 milímetros'],
        correctIndex: 0,
        explanation: 'Una profundidad inferior a 1.6 mm disminuye drásticamente el agarre del neumático, imposibilitando el desalojo correcto de agua y arriesgando multas o reprobación en RTV.',
    },
    {
        id: 48,
        question: '¿En qué lugar está prohibido realizar de forma tajante el lavado de vehículos automotores?',
        options: ['En el garaje de una casa particular', 'En lavacars autorizados comercialmente', 'En vías públicas, ríos, quebradas o fuentes de agua naturales', 'En fincas agrícolas privadas'],
        correctIndex: 2,
        explanation: 'Lavar autos en la vía pública o entornos fluviales infringe normativas de tránsito y ambientales por vertido de químicos y residuos.',
    },
    {
        id: 49,
        question: '¿Qué tipo de señales viales tienen un diseño circular con fondo blanco, anillo periférico rojo y símbolos de color negro?',
        options: ['Señales Informativas', 'Señales de Prevención de Peligro', 'Señales Reglamentarias de Prohibición o Restricción', 'Señales de Destino y Distancia'],
        correctIndex: 2,
        explanation: 'Las señales reglamentarias indican mandatos o prohibiciones estrictas cuyo incumplimiento directo genera infracción de tránsito.',
    },
    {
        id: 50,
        question: '¿Qué indica una flecha blanca pintada sobre el carril de circulación de una calzada urbana?',
        options: [
            'La dirección prohibida para avanzar',
            'La velocidad sugerida para mantener la ola verde',
            'El sentido de circulación obligatorio o giros permitidos desde ese carril',
            'La zona de cruce seguro para motocicletas'
        ],
        correctIndex: 2,
        explanation: 'Estas marcas viales sobre el pavimento ordenan los flujos dirigiendo de forma correcta los movimientos permitidos por carril.',
    },
    {
        id: 51,
        question: '¿Qué tipo de prioridad tiene el peatón que se dispone a cruzar sobre una zona de paso peatonal debidamente marcada (zebra)?',
        options: [
            'Tiene prioridad absoluta y todos los vehículos deben detenerse de forma segura',
            'Solo tiene prioridad si no vienen vehículos cerca',
            'Debe ceder el paso a los vehículos particulares',
            'La prioridad es compartida al 50% con las motocicletas'
        ],
        correctIndex: 0,
        explanation: 'El peatón es el usuario más vulnerable de la vía pública; en zonas de paso peatonal demarcadas, goza de prioridad de paso total sobre los vehículos.',
    },
    {
        id: 52,
        question: 'Según el Manual de Conductor, ¿cuál es el factor humano que interviene con mayor frecuencia en la generación de accidentes de tránsito?',
        options: ['Las fallas mecánicas imprevisibles', 'La imprudencia, la distracción y el irrespeto a las leyes viales', 'El mal estado de la carpeta asfáltica', 'Las condiciones climáticas adversas como neblina'],
        correctIndex: 1,
        explanation: 'Más del 90% de los accidentes de tránsito a nivel global y nacional ocurren debido a factores humanos como la velocidad excesiva, el alcohol o las distracciones.',
    },
    {
        id: 53,
        question: '¿Qué se conoce técnicamente como "tiempo de reacción" de un conductor?',
        options: [
            'El tiempo transcurrido desde que se aplica el freno hasta que el auto se detiene',
            'El lapso entre la percepción de un peligro visual y el momento en que el pie presiona el pedal del freno',
            'El tiempo que tarda el motor en responder al acelerar',
            'El periodo necesario para que los frenos se enfríen tras una frenada brusca'
        ],
        correctIndex: 1,
        explanation: 'El tiempo de reacción promedio en una persona en condiciones óptimas es de aproximadamente 1 segundo, intervalo en el cual el vehículo sigue avanzando a la misma velocidad.',
    },
    {
        id: 54,
        question: '¿Qué sucede con la distancia de frenado de un vehículo si la calzada se encuentra mojada por lluvia?',
        options: [
            'Se mantiene exactamente igual que en seco',
            'Disminuye a la mitad debido al enfriamiento del neumático',
            'Se duplica o triplica debido a la reducción en la adherencia y fricción de las llantas',
            'Se reduce a cero si el auto cuenta con frenos ABS'
        ],
        correctIndex: 2,
        explanation: 'El agua reduce el coeficiente de fricción entre la llanta y el pavimento, lo que incrementa notablemente el espacio requerido para detener por completo el auto.',
    },
    {
        id: 55,
        question: '¿En qué consiste el concepto de "Manejo Defensivo" en la seguridad vial?',
        options: [
            'Conducir de forma agresiva para evitar que otros autos se adelanten',
            'Circular siempre protegiendo el vehículo con defensas metálicas pesadas',
            'Conducir alerta, anticipando posibles errores de los demás usuarios y adaptándose a las condiciones del entorno',
            'Utilizar únicamente los carriles izquierdos para evitar peatones'
        ],
        correctIndex: 2,
        explanation: 'El manejo defensivo implica manejar esperando lo imprevisto, aplicando técnicas que resguarden la vida y eviten colisiones a pesar de las acciones incorrectas de terceros.',
    },
    {
        id: 56,
        question: '¿Cuál de los siguientes sistemas del vehículo pertenece a la denominada "Seguridad Pasiva"?',
        options: ['El sistema de frenos de disco', 'Los cojines de aire de seguridad (Airbags) y los cinturones de seguridad', 'Los faros delanteros de alta intensidad', 'La dirección asistida electrónicamente'],
        correctIndex: 1,
        explanation: 'Los elementos de seguridad pasiva no previenen el accidente, sino que actúan durante y después del impacto para minimizar las lesiones físicas de los ocupantes.',
    },
    {
        id: 57,
        question: '¿Qué indica una luz verde en el semáforo vehicular?',
        options: [
            'Avanzar de inmediato sin mirar a los lados',
            'Paso libre con precaución, siempre que la intersección esté despejada adelante',
            'Detenerse momentáneamente antes de continuar',
            'Girar obligatoriamente a la derecha'
        ],
        correctIndex: 1,
        explanation: 'La luz verde autoriza el paso, pero exige hacerlo con cuidado y cerciorarse de que no haya quedado un vehículo o peatón cruzando rezagado.',
    },
    {
        id: 58,
        question: '¿Bajo qué categoría se sanciona conducir bajo los efectos de medicamentos que disminuyan notoriamente las capacidades de conducción?',
        options: ['Categoría A', 'Categoría C', 'Categoría D', 'Categoría E'],
        correctIndex: 0,
        explanation: 'Manejar bajo los efectos de drogas, estupefacientes o medicamentos que alteren las capacidades psicomotoras se penaliza severamente dentro de las infracciones de la Categoría A.',
    },
    {
        id: 59,
        question: '¿Cuál es el límite máximo de velocidad permitido en pasos peatonales o zonas de alta concentración peatonal si no hay otra señal?',
        options: ['40 km/h', '25 km/h', '50 km/h', '30 km/h'],
        correctIndex: 1,
        explanation: 'Al igual que en las zonas escolares, los puntos de gran afluencia peatonal exigen por seguridad una reducción de velocidad hasta los 25 km/h.',
    },
    {
        id: 60,
        question: '¿Qué significa que las líneas que dividen carriles del mismo sentido de circulación sean de color blanco y discontinuas?',
        options: [
            'Que está totalmente prohibido cambiar de carril',
            'Que los carriles van en sentidos opuestos',
            'Que está permitido realizar maniobras de cambio de carril con la debida señalización previa',
            'Que es una zona exclusiva para vehículos de carga pesada'
        ],
        correctIndex: 2,
        explanation: 'El color blanco divide carriles con tránsito en la misma dirección; el patrón discontinuo o segmentado habilita el cambio seguro de carril.',
    },
    {
        id: 61,
        question: '¿A qué distancia de visibilidad mínima delantera se prohíbe realizar un adelantamiento seguro en carreteras de dos carriles?',
        options: ['Menos de 50 metros', 'Menos de 150 metros', 'Menos de 300 metros', 'Menos de 100 metros'],
        correctIndex: 1,
        explanation: 'Para adelantar con seguridad invadiendo el carril contrario, se requiere contar con una visibilidad despejada hacia el frente de al menos 150 metros.',
    },
    {
        id: 62,
        question: '¿Cuál es la función principal del embrague (clutch) en un vehículo de transmisión manual?',
        options: [
            'Frenar las llantas traseras en caso de emergencia',
            'Acoplar y desacoplar la fuerza motriz del motor hacia la caja de cambios',
            'Aumentar la presión del aceite en los cilindros',
            'Controlar la estabilidad lateral en las curvas'
        ],
        correctIndex: 1,
        explanation: 'El embrague desconecta mecánicamente la transmisión para permitir al conductor seleccionar una marcha diferente sin dañar los piñones.',
    },
    {
        id: 63,
        question: '¿Qué fenómeno físico genera que la carga de un vehículo tienda a desplazarse hacia afuera al tomar una curva pronunciada a alta velocidad?',
        options: ['La fuerza de fricción estática', 'La fuerza centrífuga', 'La gravedad aerodinámica', 'La inercia de frenado invertida'],
        correctIndex: 1,
        explanation: 'La fuerza centrífuga empuja los objetos y al vehículo hacia el exterior de la curva, pudiendo provocar un vuelco o derrape si se excede la velocidad límite.',
    },
    {
        id: 64,
        question: '¿Cuál de los siguientes componentes del motor requiere una revisión periódica de su nivel mediante una varilla de medición metálica?',
        options: ['El líquido de frenos', 'El aceite lubricante del motor', 'El líquido refrigerante del radiador', 'El fluido de la dirección'],
        correctIndex: 1,
        explanation: 'El nivel de aceite del motor se verifica de manera visual con la varilla de medición ubicada directamente en el bloque del motor.',
    },
    {
        id: 65,
        question: '¿Qué tipo de señal vertical se identifica por tener una forma octagonal, fondo de color rojo y letras blancas?',
        options: ['La señal de CEDA', 'La señal de PARE', 'La señal de una vía', 'La señal de velocidad máxima'],
        correctIndex: 1,
        explanation: 'La icónica forma de 8 lados de la señal de PARE está diseñada para ser reconocida por el conductor incluso desde su parte trasera o si está cubierta de nieve o barro.',
    },
    {
        id: 66,
        question: '¿De qué color son las líneas que delimitan los espacios de estacionamiento exclusivos para personas con discapacidad en Costa Rica?',
        options: ['Color amarillo intenso', 'Color azul', 'Color verde reflectante', 'Color rojo de advertencia'],
        correctIndex: 1,
        explanation: 'La demarcación horizontal de color azul identifica las zonas e íconos internacionales de accesibilidad regulada.',
    },
    {
        id: 67,
        question: '¿Qué se debe hacer de inmediato si el pedal del freno se va a fondo y el vehículo no disminuye la velocidad?',
        options: [
            'Apagar el motor por completo quitando la llave de encendido',
            'Bombear el pedal repetidamente, aplicar marchas más bajas (compresión) y usar el freno de mano de forma gradual',
            'Lanzarse del vehículo en movimiento',
            'Cerrar los ojos y esperar el impacto contra un objeto fijo'
        ],
        correctIndex: 1,
        explanation: 'El bombeo puede recuperar presión hidráulica temporal; la compresión frena el auto con la resistencia del motor y el freno de mano detiene las ruedas traseras controladamente.',
    },
    {
        id: 68,
        question: '¿Qué indica una luz roja intermitente o destellante en un semáforo?',
        options: [
            'Que el semáforo está dañado y se puede pasar sin detenerse',
            'Equivale exactamente a una señal de PARE: detención obligatoria previa y avanzar solo si la vía está despejada',
            'Que se aproxima un cambio inminente a luz verde',
            'Que el carril está cerrado por obras temporales'
        ],
        correctIndex: 1,
        explanation: 'La luz roja intermitente obliga a parar por completo antes de la línea de retención, permitiendo reanudar la marcha tras comprobar la ausencia de peligro.',
    },
    {
        id: 69,
        question: '¿Cuál es la edad mínima legal requerida en Costa Rica para poder optar por cualquier licencia de conducir de carácter profesional?',
        options: ['18 años', '20 años', '21 años', '25 años'],
        correctIndex: 2,
        explanation: 'Para obtener licencias tipo C o D (profesionales), se exige contar con una edad mínima de 21 años, además de experiencia previa con otras licencias.',
    },
    {
        id: 70,
        question: '¿Qué peligro directo se asocia con conducir manteniendo el pie apoyado continuamente sobre el pedal de embrague (clutch)?',
        options: [
            'El vehículo consume menos combustible',
            'Se provoca un desgaste prematuro e innecesario en los componentes físicos del embrague (patinamiento)',
            'Los frenos delanteros se bloquean de golpe',
            'Aumenta la potencia del motor de arranque'
        ],
        correctIndex: 1,
        explanation: 'Apoyar el pie genera fricción constante en el disco de embrague, sobrecalentando el mecanismo y acortando drásticamente su vida útil.',
    },
    {
        id: 71,
        question: '¿Qué tipo de luces del vehículo están diseñadas específicamente para no deslumbrar a los conductores que viajan en sentido contrario?',
        options: ['Las luces altas o de carretera', 'Las luces bajas o de corto alcance', 'Las luces de reversa', 'Los halógenos de techo'],
        correctIndex: 1,
        explanation: 'Las luces bajas proyectan el haz luminoso asimétricamente hacia el suelo y el borde derecho de la calzada para evitar cegar a otros usuarios.',
    },
    {
        id: 72,
        question: '¿Qué indica una línea blanca continua pintada transversalmente de lado a lado en un carril antes de una intersección?',
        options: [
            'Una zona de estacionamiento reservada',
            'La línea de parada obligatoria ante señales de PARE o semáforos en rojo',
            'Un carril exclusivo para peatones en carrera',
            'El inicio de una zona de peaje automatizado'
        ],
        correctIndex: 1,
        explanation: 'Es la línea de retención; el vehículo debe detenerse por completo antes de rebasar físicamente dicha marca sobre el pavimento.',
    },
    {
        id: 73,
        question: '¿Qué se debe hacer al transitar en una bajada o pendiente prolongada y muy pronunciada?',
        options: [
            'Colocar la palanca de cambios en neutro ("neutro" o "cochera") para ahorrar combustible',
            'Apagar el motor para enfriarlo rápidamente',
            'Enganchar el vehículo en una marcha baja para frenar por compresión del motor y no sobrecalentar los frenos',
            'Mantener el freno presionado de forma ininterrumpida durante toda la bajada'
        ],
        correctIndex: 2,
        explanation: 'Bajar en neutro o abusar del freno produce fatiga térmica ("fading"), expandiendo las balatas y dejando al automóvil totalmente sin capacidad de frenado.',
    },
    {
        id: 74,
        question: '¿En qué condición está permitido que un conductor particular circule por los carriles exclusivos para autobuses?',
        options: [
            'Únicamente para realizar un giro inmediato a la derecha en la próxima intersección o ingresar a una propiedad',
            'Siempre que haya mucho congestionamiento en los carriles comunes',
            'Durante las horas de la noche (de 10:00 p.m. a 5:00 a.m.)',
            'Si viaja con más de 4 acompañantes dentro del automóvil'
        ],
        correctIndex: 0,
        explanation: 'La invasión prolongada de carriles exclusivos de transporte público es sancionable; solo se permite cruzarlos de forma puntual para maniobras de giro indicadas.',
    },
    {
        id: 75,
        question: '¿Qué componente del sistema de escape del vehículo se encarga de reducir la toxicidad de los gases nocivos antes de ser expulsados al ambiente?',
        options: ['El silenciador trasero', 'El convertidor catalítico (catalizador)', 'El múltiple de admisión', 'La válvula de purga del cárter'],
        correctIndex: 1,
        explanation: 'El catalizador provoca reacciones químicas que transforman gases altamente nocivos (como el monóxido de carbono) en compuestos de menor impacto ecológico.',
    },
    {
        id: 76,
        question: '¿Qué se debe hacer si mientras conduce el capó del vehículo se abre de forma imprevista bloqueando la visibilidad del parabrisas?',
        options: [
            'Frenar en seco inmediatamente en el mismo carril',
            'Sacar la cabeza por la ventana lateral o mirar por el espacio inferior del capó desprendido, encender luces de emergencia y guiar el auto suavemente hacia el espaldón',
            'Acelerar para que el viento vuelva a cerrar el capó por la fuerza del aire',
            'Apagar el motor de inmediato y soltar el volante'
        ],
        correctIndex: 1,
        explanation: 'Ante la pérdida de visibilidad frontal por desprendimiento del capó, se debe mantener la calma, buscar un ángulo visual alterno para no perder la trayectoria, señalizar y apartarse de la corriente de tránsito de forma segura.',
    },
    {
        id: 77,
        question: '¿Qué indica el encendido de un testigo luminoso (luz de advertencia) de color rojo con la figura de una aceitera en el tablero del vehículo?',
        options: [
            'Que el nivel de combustible está bajo',
            'Que la presión de aceite del motor es peligrosamente baja y se debe detener el vehículo de inmediato',
            'Que el líquido de frenos está en su nivel óptimo',
            'Que se requiere cambiar el filtro de aire'
        ],
        correctIndex: 1,
        explanation: 'La luz roja de presión de aceite advierte una falta de lubricación interna en el motor. Continuar circulando en este estado causará daños severos e irreparables por fricción térmica (motor fundido).',
    },
    {
        id: 78,
        question: '¿Bajo qué categoría se sanciona a un conductor que circule en la vía pública con un vehículo modificado para emitir niveles de ruido superiores a los permitidos por la ley?',
        options: ['Categoría A', 'Categoría B', 'Categoría C', 'Categoría D'],
        correctIndex: 0,
        explanation: 'Modificar el sistema de escape (mufler/mufla) para generar contaminación sónica por encima de los límites regulatorios es una infracción de Categoría A.',
    },
    {
        id: 79,
        question: '¿Cuál es el principal peligro de conducir un vehículo con amortiguadores o elementos de suspensión en mal estado?',
        options: [
            'El motor consume más líquido refrigerante',
            'Se incrementa la distancia de frenado, disminuye la estabilidad en curvas y las llantas se desgastan de forma irregular',
            'La batería se descarga por completo durante la noche',
            'Las luces direccionales dejan de funcionar intermitentemente'
        ],
        correctIndex: 1,
        explanation: 'Los amortiguadores defectuosos impiden que las llantas mantengan un contacto firme y constante con el pavimento, comprometiendo gravemente el control de la dirección y el frenado.',
    },
    {
        id: 80,
        question: '¿Qué tipo de señalización vial se utiliza para separar carriles de tránsito que circulan en sentidos opuestos en carreteras de doble vía?',
        options: ['Líneas de color blanco', 'Líneas de color amarillo', 'Líneas de color azul', 'Líneas de color verde'],
        correctIndex: 1,
        explanation: 'El color amarillo se reserva exclusivamente para separar flujos vehiculares que viajan en direcciones contrarias.',
    },
    {
        id: 81,
        question: '¿Qué se debe hacer si al circular de noche un conductor que viene en sentido contrario mantiene las luces altas encendidas causándole deslumbramiento?',
        options: [
            'Encender las luces altas propias para deslumbrarlo también en represalia',
            'Desviar la mirada ligeramente hacia la línea blanca del borde derecho de la calzada para guiar la trayectoria',
            'Cerrar los ojos por completo hasta que el otro vehículo pase',
            'Frenar bruscamente en seco en mitad de la carretera'
        ],
        correctIndex: 1,
        explanation: 'Para evitar la ceguera temporal provocada por el deslumbramiento, se debe dirigir la vista de forma periférica hacia la línea de borde derecho, usándola como referencia visual de guía.',
    },
    {
        id: 82,
        question: '¿Cuál es la función del sistema de dirección del vehículo?',
        options: [
            'Transmitir la fuerza del motor a las llantas traseras',
            'Permitir al conductor orientar las ruedas delanteras para dirigir el sentido de marcha del vehículo',
            'Moderar las vibraciones causadas por las irregularidades del camino',
            'Reducir las revoluciones por minuto del motor al frenar'
        ],
        correctIndex: 1,
        explanation: 'El sistema de dirección convierte los movimientos aplicados por el usuario sobre el volante en giros angulares de las ruedas directrices.',
    },
    {
        id: 83,
        question: '¿Cuál es la velocidad máxima permitida por ley al circular dentro de un estacionamiento público o privado?',
        options: ['20 km/h', '10 km/h', '25 km/h', '15 km/h'],
        correctIndex: 1,
        explanation: 'En estacionamientos y zonas de maniobra confinadas similares, la velocidad máxima estándar es de 10 km/h para salvaguardar la integridad de peatones y bienes.',
    },
    {
        id: 84,
        question: '¿Qué indica una línea continua de color blanco pintada en el borde de una calzada?',
        options: [
            'Que está permitido adelantar cruzando esa línea',
            'El límite exterior derecho de la vía pavimentada, más allá de la cual se encuentra el espaldón',
            'Una zona de detención obligatoria para buses',
            'Que la calle es de un solo sentido inverso'
        ],
        correctIndex: 1,
        explanation: 'La línea de borde de calzada sirve de guía visual continua, delimitando el área de rodamiento seguro respecto a las cunetas o estructuras laterales.',
    },
    {
        id: 85,
        question: '¿A partir de qué nivel de acumulación de puntos se suspende por primera vez la licencia de un conductor con categoría de "novato"?',
        options: ['A los 12 puntos', 'A los 6 puntos', 'A los 4 puntos', 'A los 8 puntos'],
        correctIndex: 1,
        explanation: 'Los conductores novatos cuentan con un umbral de tolerancia menor. Si acumulan 6 puntos o más en su expediente vial durante su primera vigencia, su licencia queda suspendida.',
    },
    {
        id: 86,
        question: '¿Qué tipo de infracción comete un conductor que circula sin portar los dispositivos de seguridad obligatorios como el extintor de incendios, los triángulos o el chaleco reflectivo?',
        options: ['Categoría B', 'Categoría C', 'Categoría D', 'Categoría E'],
        correctIndex: 2,
        explanation: 'No llevar en el vehículo el kit de seguridad reglamentario exigido por la ley se penaliza bajo las infracciones económicas de la Categoría D.',
    },
    {
        id: 87,
        question: '¿En cuál de los siguientes lugares está permitido estacionar un vehículo automotor de forma legal?',
        options: [
            'Sobre las aceras o ciclovías',
            'Frente a la salida de una cochera o garaje particular debidamente señalizado',
            'A una distancia mayor a 5 metros de una esquina, en un sector de calzada libre sin línea amarilla de restricción',
            'En curvas o puentes de rutas nacionales'
        ],
        correctIndex: 2,
        explanation: 'Estacionar es permitido en zonas destinadas para ello, respetando las distancias de esquinas (mínimo 5 metros) y sin obstruir pasos o accesos privados.',
    },
    {
        id: 88,
        question: '¿Cuál es la función de la batería en el sistema eléctrico de un automóvil?',
        options: [
            'Generar corriente eléctrica ininterrumpida mientras el motor está encendido',
            'Almacenar energía química para proporcionar la corriente eléctrica necesaria para arrancar el motor y alimentar sistemas con el vehículo apagado',
            'Regular la temperatura interna del alternador',
            'Limpiar los circuitos integrados de la computadora central'
        ],
        correctIndex: 1,
        explanation: 'La batería actúa como reserva de energía inicial para el arranque. Una vez encendido el motor, el alternador toma el relevo de la generación eléctrica principal.',
    },
    {
        id: 89,
        question: '¿Qué se debe verificar prioritariamente en el mantenimiento diario de los neumáticos?',
        options: [
            'El color del aro metálico',
            'La marca de fabricación de la llanta',
            'La presión de inflado en frío recomendada por el fabricante y el desgaste de la banda de rodamiento',
            'El balanceo dinámico de los contrapesos traseros'
        ],
        correctIndex: 2,
        explanation: 'Una presión de inflado incorrecta perjudica el consumo, la adherencia y acelera el deterioro del neumático, elevando el riesgo de estallido en carretera.',
    },
    {
        id: 90,
        question: '¿Qué tipo de señales viales verticales tienen forma de rombo, color de fondo amarillo y símbolos o letras negras?',
        options: ['Señales Reglamentarias', 'Señales de Prevención o Advertencia de Peligro', 'Señales Informativas de Servicios', 'Señales de Identificación de Ruta'],
        correctIndex: 1,
        explanation: 'Las señales preventivas en forma de rombo amarillo alertan con anticipación sobre la existencia de un peligro o condición especial adelante en la vía.',
    },
    {
        id: 91,
        question: '¿Qué se conoce como "distancia de parada total"?',
        options: [
            'La distancia recorrida únicamente mientras se presionan los frenos',
            'La suma de la distancia recorrida durante el tiempo de reacción más la distancia recorrida durante el frenado efectivo',
            'El espacio que le toma al motor apagarse por completo',
            'La distancia recorrida al usar únicamente el freno de mano'
        ],
        correctIndex: 1,
        explanation: 'La distancia de parada total contempla desde el instante en que el peligro es visto por el ojo humano hasta que el automóvil queda completamente inmovil.',
    },
    {
        id: 92,
        question: '¿Cuál es el límite máximo de velocidad permitido en zonas urbanas de Costa Rica si no existe rotulación específica en la vía?',
        options: ['40 km/h', '60 km/h', '50 km/h', '80 km/h'],
        correctIndex: 1,
        explanation: 'La legislación costarricense establece los 60 km/h como tope general genérico para el tránsito por vías públicas urbanas a falta de señalamiento.',
    },
    {
        id: 93,
        question: '¿Qué indica una señal reglamentaria que muestra una flecha curva hacia la izquierda cruzada por una barra diagonal de color rojo?',
        options: [
            'Giro a la izquierda permitido con precaución',
            'Prohibición de realizar giros hacia la izquierda en esa intersección',
            'Inicio de carril exclusivo de giro',
            'Obligación de doblar a la derecha'
        ],
        correctIndex: 1,
        explanation: 'El aro rojo con barra transversal diagonal indica una prohibición explícita según las convenciones de señalización vial.',
    },
    {
        id: 94,
        question: '¿Qué tipo de fluido hidráulico debe revisarse regularmente en un depósito plástico semitransparente ubicado cerca de la bomba principal de frenos?',
        options: ['El líquido refrigerante', 'El líquido de frenos', 'El aceite de transmisión de la caja', 'El agua para el limpiaparabrisas'],
        correctIndex: 1,
        explanation: 'El nivel de líquido de frenos es crítico para mantener la presión hidráulica del sistema; si desciende de los rangos seguros, denota fugas o desgaste severo en pastillas.',
    },
    {
        id: 95,
        question: '¿Qué indica una línea amarilla continua pintada sobre el borde del caño o acera en zonas urbanas?',
        options: [
            'Zona habilitada para parada de taxis libres',
            'Prohibición absoluta de estacionar vehículos en ese tramo de la calzada',
            'Espacio exclusivo para carga y descarga comercial',
            'Carril preferencial para ciclistas los fines de semana'
        ],
        correctIndex: 1,
        explanation: 'La demarcación horizontal de color amarillo continuo en el borde del cordón de la acera restringe y prohíbe el estacionamiento de automotores las 24 horas.',
    },
    {
        id: 96,
        question: '¿Cuál es la función del sistema de suspensión del vehículo?',
        options: [
            'Proporcionar la energía eléctrica para las luces del tablero',
            'Absorber las irregularidades del terreno para brindar confort a los ocupantes y mantener la estabilidad y adherencia de las llantas',
            'Enfriar los gases de escape calientes antes de salir por la mufla',
            'Controlar la mezcla exacta de aire y combustible'
        ],
        correctIndex: 1,
        explanation: 'La suspensión interconecta de forma flexible el chasis con las ruedas, amortiguando los impactos dinámicos de la marcha.',
    },
    {
        id: 97,
        question: '¿Qué indica la luz verde parpadeante o destellante en un semáforo vehicular según el Manual del Conductor?',
        options: [
            'Que se puede acelerar más rápido para pasar',
            'Advierte que el periodo de luz verde está por terminar y cambiará próximamente a luz amarilla',
            'Que el semáforo tiene un fallo eléctrico menor',
            'Que se autoriza el giro libre continuo en U'
        ],
        correctIndex: 1,
        explanation: 'La luz verde intermitente previene al conductor del cierre inminente de la prioridad de paso de ese carril.',
    },
    {
        id: 98,
        question: '¿Qué se debe hacer obligatoriamente antes de iniciar la marcha en reversa con un vehículo?',
        options: [
            'Tocar la bocina tres veces de forma consecutiva',
            'Cerciorarse visualmente a través de los espejos y de forma directa de que la zona trasera esté completamente despejada de peatones u objetos',
            'Encender los halógenos delanteros de alta potencia',
            'Colocar la transmisión en primera marcha'
        ],
        correctIndex: 1,
        explanation: 'Debido a los puntos ciegos traseros, la maniobra en reversa exige extrema cautela visual para evitar atropellos o colisiones a baja velocidad.',
    },
    {
        id: 99,
        question: '¿A qué distancia de seguridad temporal mínima se aconseja circular detrás de otro vehículo si las condiciones del clima presentan lluvia torrencial o neblina densa?',
        options: ['1 segundo', '2 segundos', 'Al menos 4 segundos', 'La misma distancia que en seco'],
        correctIndex: 2,
        explanation: 'Al deteriorarse las condiciones viales por factores atmosféricos, se debe duplicar el margen de seguridad temporal reglamentario pasando de 2 a un mínimo de 4 segundos.',
    },
    {
        id: 100,
        question: '¿Qué tipo de infracción comete un conductor que circula de noche con las luces del vehículo totalmente apagadas?',
        options: ['Categoría A', 'Categoría B', 'Categoría C', 'Categoría D'],
        correctIndex: 2,
        explanation: 'Circular sin las luces encendidas en los horarios establecidos por ley (de 6:00 p.m. a 6:00 a.m.) o bajo condiciones de visibilidad nula califica como una falta de Categoría C.',
    },
    {
        id: 101,
        question: '¿Qué distancia mínima hacia adelante debe tener libre y visible un conductor para poder iniciar una maniobra de adelantamiento en una vía de dos carriles con sentidos opuestos?',
        options: ['Al menos 50 metros', 'Al menos 100 metros', 'Al menos 150 metros', 'Al menos 300 metros'],
        correctIndex: 2,
        explanation: 'Para adelantar invadiendo el carril contrario con total seguridad, el Manual del Conductor establece que se requiere una visibilidad libre hacia el frente de al menos 150 metros.',
    },
    {
        id: 102,
        question: '¿Qué tipo de infracción comete el conductor que utiliza un vehículo para prestar servicio de transporte público de personas sin contar con la respectiva autorización, concesión o permiso del Estado?',
        options: ['Categoría A', 'Categoría B', 'Categoría C', 'Categoría D'],
        correctIndex: 0,
        explanation: 'Prestar servicios de transporte público de manera ilegal o no autorizada ("pirata") es una falta sumamente grave clasificada dentro de la Categoría A.',
    },
    {
        id: 103,
        question: '¿Cuál es la función principal del alternador en el sistema eléctrico de un vehículo automotor?',
        options: [
            'Proporcionar la chispa inicial para encender los cilindros',
            'Almacenar la corriente eléctrica mientras el vehículo permanece apagado',
            'Generar la energía eléctrica necesaria para los sistemas del automóvil y recargar la batería mientras el motor está en marcha',
            'Controlar la velocidad del motor de arranque'
        ],
        correctIndex: 2,
        explanation: 'Mientras el motor gira, el alternador transforma la energía mecánica en energía eléctrica, abasteciendo al vehículo y manteniendo la carga de la batería.',
    },
    {
        id: 104,
        question: '¿Qué indica una señal de tránsito vertical de forma triangular con el vértice apuntando hacia abajo, borde rojo y fondo blanco?',
        options: ['Señal de PARE', 'Señal de CEDA EL PASO', 'Zona de incorporación rápida', 'Aproximación a una rotonda'],
        correctIndex: 1,
        explanation: 'La señal de Ceda el Paso se caracteriza universalmente por su diseño triangular invertido para facilitar su reconocimiento inmediato.',
    },
    {
        id: 105,
        question: 'Bajo la ley de tránsito, ¿en cuál de los siguientes supuestos se permite adelantar a otro vehículo por la derecha de forma legal?',
        options: [
            'En cualquier autopista si el vehículo de adelante circula a velocidad muy baja',
            'Cuando el vehículo precedente indique claramente su intención de girar o virar hacia la izquierda y exista espacio suficiente en la calzada',
            'Utilizando el espaldón derecho pavimentado',
            'Nunca, está prohibido de manera absoluta en todo escenario'
        ],
        correctIndex: 1,
        explanation: 'Se permite el adelantamiento por la derecha de forma excepcional si el auto delantero se detiene o va a realizar un giro a la izquierda, siempre que se haga dentro de la calzada pavimentada.',
    },
    {
        id: 106,
        question: '¿Qué componente del sistema de frenado ejerce fricción directa contra los discos de las ruedas para detener el movimiento del vehículo?',
        options: ['Las balatas o pastillas de freno', 'El cilindro maestro', 'El servofreno de vacío', 'Los cables del freno de mano'],
        correctIndex: 0,
        explanation: 'Las pastillas de freno son presionadas hidráulicamente por las pinzas (calipers) contra las caras del disco, convirtiendo la energía cinética en calor.',
    },
    {
        id: 107,
        question: '¿Cuál de las siguientes condiciones climáticas amerita disminuir la velocidad a la mitad del límite establecido por riesgo de pérdida de control?',
        options: ['Un día soleado con vientos leves', 'Lluvia persistente que genera acumulación de agua y riesgo de hidroplaneo', 'Condiciones nocturnas con cielo despejado', 'Transitar por una zona costera'],
        correctIndex: 1,
        explanation: 'La presencia de agua en la calzada reduce el coeficiente de adherencia y visibilidad, exigiendo adecuar la marcha por debajo de los límites comunes.',
    },
    {
        id: 108,
        question: '¿Qué tipo de señalización vial horizontal consiste en líneas blancas discontinuas paralelas pintadas de forma transversal en la calzada urbana?',
        options: ['Línea de parada obligatoria', 'Zona de cruce peatonal de tipo "zebra"', 'Coto de estacionamiento comercial', 'Carril exclusivo para motocicletas'],
        correctIndex: 1,
        explanation: 'Las líneas transversales paralelas (pistas de zebra) delimitan los pasillos exclusivos de cruce seguro para los peatones.',
    },
    {
        id: 109,
        question: '¿A qué distancia mínima de una esquina o intersección urbana está permitido estacionar un vehículo?',
        options: ['A 2 metros', 'A 3 metros', 'A 5 metros', 'A 10 metros'],
        correctIndex: 2,
        explanation: 'La ley prohíbe estacionar a menos de 5 metros de esquinas, curvas o pasos peatonales para no obstruir la visibilidad de los demás conductores.',
    },
    {
        id: 110,
        question: '¿Qué tipo de infracción comete el conductor que altera de cualquier forma el motor o los sistemas del vehículo para evadir los controles de emisiones contaminantes?',
        options: ['Categoría A', 'Categoría B', 'Categoría C', 'Categoría D'],
        correctIndex: 0,
        explanation: 'Las conductas asociadas a provocar contaminación ambiental agravada o la alteración de dispositivos de control técnico pertenecen a la Categoría A.',
    },
    {
        id: 111,
        question: '¿Qué se debe hacer si mientras se conduce estalla repentinamente una de las llantas delanteras del vehículo?',
        options: [
            'Frenar a fondo inmediatamente y girar el volante hacia el lado contrario',
            'Sujetar el volante firmemente con ambas manos de forma recta, levantar el pie del acelerador y frenar suavemente una vez controlado el trayecto',
            'Apagar el motor de inmediato para que el auto se detenga solo',
            'Colocar la palanca en reversa para contrarrestar el empuje'
        ],
        correctIndex: 1,
        explanation: 'El estallido de una llanta delantera desestabiliza la dirección; un frenazo brusco empeoraría el desvío provocando un vuelco. Se debe priorizar mantener el rumbo antes de disminuir la marcha.',
    },
    {
        id: 112,
        question: '¿Qué tipo de luces traseras deben encenderse automáticamente en el vehículo cuando el conductor coloca la palanca de cambios en posición de retroceso?',
        options: ['Luces rojas fijas', 'Luces de color blanco', 'Luces de color amarillo intermitente', 'Luces azules decorativas'],
        correctIndex: 1,
        explanation: 'Las luces de reversa son obligatoriamente de color blanco. Tienen la doble función de iluminar la parte trasera y advertir a otros peatones o conductores de la dirección de la marcha.',
    },
    {
        id: 113,
        question: '¿Cuál es el propósito del líquido refrigerante dentro del sistema de enfriamiento del motor?',
        options: [
            'Lubricar los pistones y las bielas',
            'Absorber el exceso de calor generado por la combustión interna del motor para mantenerlo en su temperatura óptima de operación',
            'Aumentar el octanaje de la gasolina en los inyectores',
            'Limpiar los depósitos de carbón de las bujías'
        ],
        correctIndex: 1,
        explanation: 'El líquido refrigerante circula por las galerías del bloque del motor absorbiendo el calor generado, el cual es disipado posteriormente al pasar por el radiador.',
    },
    {
        id: 114,
        question: '¿Qué tipo de señalización vial vertical tiene un formato rectangular, fondo azul y pictogramas blancos?',
        options: ['Señales Reglamentarias', 'Señales Preventivas', 'Señales Informativas de Servicios o Sitios de Interés', 'Señales de Obras'],
        correctIndex: 2,
        explanation: 'El fondo azul o verde en señales rectangulares se destina a guiar al usuario e informarle sobre la ubicación de hospitales, gasolineras, teléfonos públicos o destinos.',
    },
    {
        id: 115,
        question: '¿Cuál es la sanción de puntos que recibe un conductor que acumula una infracción por irrespetar una señal de alto o la luz roja del semáforo?',
        options: ['Acumula 6 puntos', 'Acumula 2 puntos', 'Acumula 4 puntos', 'No acumula puntos si no causa un accidente'],
        correctIndex: 2,
        explanation: 'Pasarse una luz roja o una señal de alto es una falta grave catalogada dentro de la Categoría B, sumando 4 puntos al expediente de la licencia.',
    },
    {
        id: 116,
        question: '¿Qué indica el testigo luminoso en forma de motor (Check Engine) encendido de color amarillo o naranja en el panel de instrumentos?',
        options: [
            'Que el motor se encuentra sin aceite de manera crítica',
            'Que la computadora del vehículo ha detectado una falla en el sistema de inyección, encendido o control de emisiones',
            'Que es necesario cambiar las llantas delanteras',
            'Que las puertas del auto se encuentran abiertas'
        ],
        correctIndex: 1,
        explanation: 'El testigo Check Engine alerta sobre anomalías técnicas controladas por la unidad electrónica del auto que requieren diagnóstico mecánico formal.',
    },
    {
        id: 117,
        question: '¿Qué se conoce como "fatiga al conducir" y cuál es su impacto en la seguridad vial?',
        options: [
            'El desgaste normal de las piezas metálicas de la transmisión',
            'Un estado de cansancio físico o mental que reduce los reflejos, aumenta el tiempo de reacción y eleva el riesgo de dormirse al volante',
            'La pérdida de potencia del motor al subir pendientes',
            'La saturación del tráfico en las horas pico'
        ],
        correctIndex: 1,
        explanation: 'La fatiga nubla el juicio del conductor y ralentiza la capacidad de respuesta ante emergencias, siendo causante de colisiones graves por invasión de carril.',
    },
    {
        id: 118,
        question: '¿Qué tipo de demarcación horizontal prohíbe el adelantamiento de vehículos únicamente para uno de los sentidos de circulación en una calzada?',
        options: [
            'Una línea blanca discontinua sencilla',
            'Una línea de barrera doble, combinada (una línea continua y otra discontinua en paralelo)',
            'Una línea transversal de retención',
            'Líneas canalizadoras de color azul'
        ],
        correctIndex: 1,
        explanation: 'En las líneas combinadas, el conductor que tiene de su lado la línea continua no puede adelantar, mientras que el del lado de la línea discontinua sí está autorizado.',
    },
    {
        id: 119,
        question: '¿Cuál es el peligro de conducir con un nivel extremadamente bajo de combustible en el tanque de forma recurrente?',
        options: [
            'El combustible pierde octanaje de manera automática',
            'La bomba de combustible puede sobrecalentarse y dañarse, además de absorber impurezas o sedimentos del fondo del tanque',
            'Las llantas delanteras pierden balance dinámico',
            'El líquido de frenos hierve por el calor excedente'
        ],
        correctIndex: 1,
        explanation: 'La bomba de combustible eléctrica se enfría y lubrica con la misma gasolina del tanque; trabajar "en seco" o con reservas mínimas acelera su desgaste térmico.',
    },
    {
        id: 120,
        question: '¿Qué se debe verificar visualmente en el sistema de luces antes de realizar un viaje largo por carretera?',
        options: [
            'El tamaño de los bombillos internos',
            'Que funcionen correctamente las luces altas, bajas, direccionales, de freno, reversa y de emergencia, limpiando los focos de suciedad',
            'El color del cableado eléctrico del alternador',
            'Que los fusibles sean todos del mismo amperaje fijo'
        ],
        correctIndex: 1,
        explanation: 'Asegurar el funcionamiento del conjunto de iluminación es vital para ver la vía y ser visto con precisión por los demás conductores.',
    },
    {
        id: 121,
        question: '¿Qué tipo de infracción comete el conductor que circula en reversa por más de 50 metros sin justificación técnica de fuerza mayor?',
        options: ['Categoría B', 'Categoría C', 'Categoría D', 'Categoría E'],
        correctIndex: 2,
        explanation: 'Circular en reversa de forma prolongada e injustificada genera graves riesgos de colisión y atropello, castigándose bajo la Categoría D.',
    },
    {
        id: 122,
        question: '¿Cuál es la función del termostato en el sistema de enfriamiento del motor del vehículo?',
        options: [
            'Medir los gases tóxicos que salen por la mufla',
            'Regular el flujo de líquido refrigerante hacia el radiador según la temperatura interna del motor para optimizar su funcionamiento',
            'Encender las luces de emergencia si el auto se calienta',
            'Aumentar la presión del aceite en la caja de cambios'
        ],
        correctIndex: 1,
        explanation: 'El termostato permanece cerrado cuando el motor está frío para que alcance rápido su temperatura de trabajo ideal y se abre al calentarse para permitir el paso del refrigerante hacia el radiador.',
    },
    {
        id: 123,
        question: '¿Qué indica una señal reglamentaria circular con fondo blanco, aro rojo y el número "60" inscrito en color negro en su centro?',
        options: [
            'La velocidad mínima requerida en ese tramo de vía',
            'La velocidad máxima permitida de circulación en kilómetros por hora',
            'La distancia restante para llegar al próximo peaje',
            'El peso bruto máximo autorizado en toneladas'
        ],
        correctIndex: 1,
        explanation: 'Esta señal limita el tope legal de velocidad máxima permitida; superarlo conlleva sanciones administrativas según los rangos de exceso.',
    },
    {
        id: 124,
        question: '¿Qué se debe hacer si mientras conduce de noche el tablero de instrumentos se apaga por completo de forma imprevista?',
        options: [
            'Continuar conduciendo a la misma velocidad confiando en la memoria de la ruta',
            'Encender luces de emergencia, disminuir la velocidad paulatinamente y buscar un lugar seguro fuera de la calzada para detenerse a revisar la falla',
            'Apagar las luces delanteras principales para intentar reiniciar el sistema',
            'Golpear fuertemente el volante hasta que vuelva la electricidad'
        ],
        correctIndex: 1,
        explanation: 'La pérdida de luces del tablero compromete el monitoreo técnico del auto y usualmente antecede a fallas eléctricas totales. Se debe buscar el resguardo en el espaldón con precaución.',
    },
    {
        id: 125,
        question: '¿Bajo qué categoría se sanciona al conductor que se estaciona bloqueando una rampa de acceso peatonal diseñada para personas con movilidad reducida?',
        options: ['Categoría B', 'Categoría C', 'Categoría D', 'Categoría E'],
        correctIndex: 1,
        explanation: 'Bloquear rampas de accesibilidad o estacionarse en espacios destinados a personas con discapacidad sin contar con la debida acreditación es una infracción de Categoría C.',
    },
    {
        id: 126,
        question: '¿Qué distancia mínima de visibilidad libre debe tener un conductor antes de iniciar un adelantamiento en una pendiente o cuesta?',
        options: [
            'No se requiere visibilidad si se acelera rápido',
            'Al menos 150 metros de visibilidad despejada hacia el frente',
            'Al menos 50 metros si se usan las luces altas',
            'Está prohibido adelantar en pendientes independientemente de la visibilidad'
        ],
        correctIndex: 3,
        explanation: 'De acuerdo con el Manual del Conductor, está estrictamente prohibido adelantar en pendientes, curvas o tramos de visibilidad reducida por el alto riesgo de colisión frontal.',
    },
    {
        id: 127,
        question: '¿Qué componente del motor se encarga de transformar el movimiento lineal de los pistones en un movimiento rotatorio continuo para la transmisión?',
        options: ['El árbol de levas', 'El cigüeñal', 'El alternador', 'La culata'],
        correctIndex: 1,
        explanation: 'El cigüeñal funciona como un mecanismo de biela-manivela que convierte la fuerza lineal de la combustión en los pistones en rotación mecánica pura.',
    },
    {
        id: 128,
        question: '¿Qué tipo de señalización vertical se caracteriza por tener una forma circular, fondo blanco, bordes rojos y símbolos que indican una restricción física o legal?',
        options: ['Señales Informativas', 'Señales Preventivas', 'Señales Reglamentarias', 'Señales de Obras'],
        correctIndex: 2,
        explanation: 'Las señales reglamentarias imponen obligaciones, prohibiciones o restricciones al tránsito, y su desacato constituye una infracción de tránsito.',
    },
    {
        id: 129,
        question: '¿Qué indica una línea blanca continua pintada de forma transversal en el carril antes de una senda peatonal?',
        options: [
            'Zona permitida para estacionar motocicletas',
            'La línea de retención donde el vehículo debe detenerse por completo ante un alto o luz roja',
            'Un espacio reservado para el giro en U',
            'El inicio de una autopista nacional'
        ],
        correctIndex: 1,
        explanation: 'La línea de retención horizontal marca el límite físico que el paragolpes del vehículo no debe sobrepasar para resguardar el espacio peatonal o el flujo transversal.',
    },
    {
        id: 130,
        question: '¿Qué tipo de infracción comete un conductor que circula utilizando luces de alta intensidad modificadas (como LED o Xenón no homologadas) que encandilan a otros usuarios?',
        options: ['Categoría A', 'Categoría B', 'Categoría C', 'Categoría D'],
        correctIndex: 2,
        explanation: 'Circular con sistemas de iluminación que encandilen o no cumplan con las especificaciones técnicas estipuladas por la ley califica como infracción de Categoría C.',
    },
    {
        id: 131,
        question: '¿Cuál es el orden prioritario de acatamiento cuando un conductor encuentra indicaciones distintas en una misma intersección?',
        options: [
            'Semáforo, señales verticales, marcas en el pavimento, oficiales de tránsito',
            'Oficiales de tránsito, semáforos, señales verticales, marcas en el pavimento',
            'Señales verticales, oficiales de tránsito, semáforos, marcas en el pavimento',
            'El conductor decide cuál señal seguir según el congestionamiento'
        ],
        correctIndex: 1,
        explanation: 'Las indicaciones del Oficial de Tránsito tienen la máxima jerarquía legal y prevalecen sobre los semáforos, señales verticales y demarcación horizontal.',
    },
    {
        id: 132,
        question: '¿Qué función cumple el tapón del radiador dentro del sistema de enfriamiento del vehículo?',
        options: [
            'Evitar que el combustible se evapore',
            'Mantener la presión adecuada en el sistema para elevar el punto de ebullición del líquido refrigerante y permitir la salida al tanque de expansión',
            'Filtrar las impurezas del aceite del motor',
            'Conectar el alternador con la bomba de agua'
        ],
        correctIndex: 1,
        explanation: 'El tapón del radiador actúa como una válvula de seguridad calibrada a una presión específica para controlar la expansión térmica del refrigerante.',
    },
    {
        id: 133,
        question: '¿Cuál es la velocidad máxima permitida por ley al circular en presencia de concentraciones masivas de peatones, tales como procesiones o desfiles?',
        options: ['10 km/h', '20 km/h', '25 km/h', '5 km/h'],
        correctIndex: 1,
        explanation: 'Ante concentraciones masivas de personas autorizadas en la vía, la velocidad máxima de los automotores se reduce por seguridad a un límite de 20 km/h.',
    },
    {
        id: 134,
        question: '¿Qué indica una línea central discontinua de color blanco en una calzada de múltiples carriles?',
        options: [
            'Que el tránsito fluye en sentidos opuestos',
            'Que los carriles van en el mismo sentido de circulación y se permite cambiar de carril con la debida señalización',
            'Prohibición de adelantar en ese tramo',
            'Carril exclusivo para el transporte pesado de mercancías'
        ],
        correctIndex: 1,
        explanation: 'Las líneas blancas separan flujos que se dirigen hacia el mismo sentido; al estar segmentadas o discontinuas, validan las maniobras de cambio de carril.',
    },
    {
        id: 135,
        question: '¿Qué tipo de infracción comete un conductor novato que acumula 4 puntos en su licencia durante el primer año de vigencia?',
        options: [
            'Ninguna, el límite de suspensión es de 12 puntos para todos',
            'Comete una falta acumulativa que lo deja a solo 2 puntos de la suspensión total de su licencia',
            'Suspensión automática de la licencia por 2 años',
            'Debe repetir únicamente el dictamen médico'
        ],
        correctIndex: 1,
        explanation: 'El conductor novato pierde el derecho a renovar o sufre suspensión si acumula 6 o más puntos, por lo que llegar a 4 puntos compromete críticamente su estatus.',
    },
    {
        id: 136,
        question: '¿Cuál es la función principal del sistema de lubricación en el motor de un vehículo?',
        options: [
            'Aumentar la temperatura de combustión',
            'Reducir la fricción y el desgaste entre las piezas metálicas móviles, además de enfriar y limpiar internamente el motor',
            'Filtrar el aire que ingresa a los cilindros',
            'Evitar que el líquido de frenos pierda consistencia'
        ],
        correctIndex: 1,
        explanation: 'El aceite genera una película deslizante entre los componentes en movimiento, disipando calor y reteniendo partículas microscópicas de desgaste.',
    },
    {
        id: 137,
        question: '¿Qué distancia mínima de estacionamiento se debe respetar con respecto a la entrada de hospitales, clínicas o centros de emergencia?',
        options: ['3 metros', '5 metros', '10 metros', '15 metros'],
        correctIndex: 2,
        explanation: 'La ley prohíbe estacionar a menos de 10 metros de las salidas e ingresos de centros hospitalarios y de rescate para asegurar el libre flujo de ambulancias.',
    },
    {
        id: 138,
        question: '¿Qué indica el encendido de un testigo luminoso de color rojo con el símbolo de una batería en el tablero de instrumentos?',
        options: [
            'Que la batería está cargada al máximo',
            'Que existe un fallo en el sistema de carga (alternador o regulador) y el vehículo consume la reserva directa de la batería',
            'Que las luces direccionales quedaron encendidas',
            'Que se requiere cambiar las bujías de encendido'
        ],
        correctIndex: 1,
        explanation: 'Este testigo advierte que el alternador no está generando corriente eléctrica, por lo que el auto se detendrá pronto al agotarse la energía de la batería.',
    },
    {
        id: 139,
        question: '¿Cuál es la función del servofreno (booster) en el sistema de frenado moderno?',
        options: [
            'Bloquear las llantas en caso de que falle el conductor',
            'Multiplicar la fuerza ejercida por el pie del conductor sobre el pedal de freno utilizando vacío, facilitando un frenado más suave y efectivo',
            'Regular la dirección de las ruedas traseras',
            'Evitar que el líquido de frenos hierva debido a la fricción'
        ],
        correctIndex: 1,
        explanation: 'El servofreno disminuye significativamente el esfuerzo físico requerido para activar los frenos hidráulicos aprovechando la presión de vacío del motor.',
    },
    {
        id: 140,
        question: '¿Qué tipo de señalización vial vertical tiene un formato de escudo e identifica las rutas nacionales o interamericanas?',
        options: ['Señales de Advertencia', 'Señales de Obras', 'Señales de Identificación de Rutas (Informativas)', 'Señales de Restricción'],
        correctIndex: 2,
        explanation: 'Las señales informativas de ruta con forma de escudo guían a los conductores sobre la red vial nacional en la que se encuentran transitando.',
    },
    {
        id: 141,
        question: '¿Bajo qué categoría se sanciona a un conductor que circule con un vehículo comercial cargado con un peso superior al máximo autorizado por su diseño técnico?',
        options: ['Categoría B', 'Categoría C', 'Categoría D', 'Categoría E'],
        correctIndex: 1,
        explanation: 'El sobrepeso en vehículos de carga daña la infraestructura vial y compromete el frenado, penalizándose bajo las multas de la Categoría C.',
    },
    {
        id: 142,
        question: '¿Qué peligro físico se asocia con el uso de neumáticos con una presión de inflado muy inferior a la recomendada por el fabricante?',
        options: [
            'El neumático se enfría demasiado rápido',
            'Aumenta el riesgo de desllantado en curvas, se eleva el consumo de combustible y la llanta se sobrecalienta en los flancos laterales',
            'Los frenos ABS dejan de funcionar electrónicamente',
            'El motor reduce automáticamente sus revoluciones por minuto'
        ],
        correctIndex: 1,
        explanation: 'Las llantas bajas se deforman estructuralmente al rodar, generando fricción térmica excesiva en las paredes laterales, lo cual precipita reventones a alta velocidad.',
    },
    {
        id: 143,
        question: '¿Qué se conoce técnicamente como "conducción eficiente o ecológica"?',
        options: [
            'Avanzar a la máxima velocidad posible para terminar rápido el viaje',
            'Técnicas de manejo que optimizan el consumo de combustible, reducen las emisiones de gases y disminuyen el desgaste general de los componentes',
            'Utilizar gasolina mezclada con agua destilada',
            'Conducir únicamente cuesta abajo manteniendo el motor apagado'
        ],
        correctIndex: 1,
        explanation: 'La conducción eficiente implica realizar cambios de marcha a bajas revoluciones, mantener velocidades constantes y evitar aceleraciones o frenazos bruscos.',
    },
    {
        id: 144,
        question: '¿Qué tipo de demarcación horizontal consiste en líneas diagonales blancas o amarillas continuas rodeadas por una línea perimetral sólida?',
        options: ['Zonas de estacionamiento regulado', 'Islas de canalización o zonas exentas de tránsito vehicular', 'Pistas exclusivas de aceleración', 'Puntos de abordaje para taxis urbanos'],
        correctIndex: 1,
        explanation: 'Las islas de canalización organizan los flujos viales; está estrictamente prohibido transitar o estacionar sobre estas áreas demarcadas.',
    },
    {
        id: 145,
        question: '¿A qué distancia de seguridad se debe colocar el triángulo reflectivo trasero si nuestro vehículo queda varado en una curva cerrada de un solo carril?',
        options: [
            'Justo pegado al parachoques trasero',
            'A una distancia suficiente antes del inicio de la curva para advertir con tiempo real a los conductores que se aproximan',
            'A exactamente 5 metros del auto',
            'No es necesario colocarlo si es de día'
        ],
        correctIndex: 1,
        explanation: 'En curvas u obstáculos visuales, los dispositivos de emergencia deben situarse antes de la zona crítica para otorgar a terceros un tiempo de reacción efectivo.',
    },
    {
        id: 146,
        question: '¿Qué tipo de infracción comete el conductor que se niega a mostrar los documentos de identidad o del vehículo cuando un Oficial de Tránsito se lo requiere legítimamente?',
        options: ['Categoría B', 'Categoría C', 'Categoría D', 'Categoría E'],
        correctIndex: 2,
        explanation: 'Negarse a presentar la licencia de conducir, cédula o documentos vehiculares ante las autoridades de control vial constituye una infracción de Categoría D.',
    },
    {
        id: 147,
        question: '¿Cuál es el componente del vehículo encargado de absorber los gases calientes de la combustión y mitigar de forma acústica el ruido emitido por el motor?',
        options: ['El múltiple de admisión', 'El radiador de calefacción', 'El silenciador del sistema de escape (mufla)', 'El filtro de habitáculo'],
        correctIndex: 2,
        explanation: 'El silenciador canaliza las ondas de sonido expansivas de los gases del escape a través de cámaras internas para atenuar la contaminación sónica.',
    },
    {
        id: 148,
        question: '¿Qué indica una señal de tránsito reglamentaria con fondo blanco, anillo rojo y un símbolo de un camión con una barra diagonal roja cruzada encima?',
        options: [
            'Zona preferencial para camiones de carga',
            'Prohibición de circulación para vehículos pesados o camiones en esa vía específica',
            'Aproximación a una báscula de pesaje nacional',
            'Carril de velocidad reducida obligatorio'
        ],
        correctIndex: 1,
        explanation: 'El diseño circular reglamentario con la línea transversal roja cancela el permiso de tránsito para el tipo de vehículo ilustrado en el pictograma.',
    },
    {
        id: 149,
        question: '¿Qué se debe hacer si las ruedas traseras del vehículo comienzan a derrapar hacia el lado izquierdo en una calzada mojada?',
        options: [
            'Frenar bruscamente a fondo y girar el volante hacia el lado derecho',
            'Girar el volante suavemente hacia el mismo lado del derrape (izquierdo) para estabilizar la trayectoria y evitar acelerar',
            'Girar el volante con fuerza hacia la derecha y acelerar a fondo',
            'Colocar el freno de mano de inmediato'
        ],
        correctIndex: 1,
        explanation: 'En los derrapes del eje trasero (sobreviraje), se debe aplicar la técnica de contravolante, orientando las ruedas delanteras hacia el mismo lado al que se desliza la parte trasera para recuperar el control.',
    },
    {
        id: 150,
        question: '¿Bajo qué categoría se sanciona circular con un vehículo que tenga los parabrisas agrietados u obstruidos por objetos que reduzcan de forma peligrosa la visibilidad del conductor?',
        options: ['Categoría B', 'Categoría C', 'Categoría D', 'Categoría E'],
        correctIndex: 2,
        explanation: 'Transitar con elementos estructurales del auto dañados o con polarizados y objetos que comprometan el campo visual mínimo reglamentario es una falta de Categoría D.',
    },
    {
        id: 151,
        question: '¿Qué tipo de señalización vial horizontal consiste en líneas blancas pintadas en forma de zigzag en los bordes del carril de circulación?',
        options: [
            'Zona permitida para el estacionamiento de motocicletas de reparto',
            'Advertencia de aproximación a un paso peatonal o zona escolar, donde está prohibido estacionar o adelantar',
            'Carril exclusivo para vehículos con tracción en las cuatro ruedas',
            'Indicación de zona de curvas peligrosas consecutivas'
        ],
        correctIndex: 1,
        explanation: 'Las líneas en zigzag pintadas sobre el pavimento alertan con antelación al conductor sobre la cercanía de un cruce peatonal regulado o zona escolar, exigiendo reducir la velocidad.',
    },
    {
        id: 152,
        question: '¿Cuál es la función del embrague de fricción (disco de clutch) en un automóvil de transmisión manual?',
        options: [
            'Frenar el motor de forma electrónica instantánea',
            'Acoplar y desacoplar la transmisión de la fuerza del motor hacia la caja de cambios mediante fricción física',
            'Regular la mezcla de aire y combustible que ingresa a los cilindros',
            'Distribuir el aceite lubricante hacia el árbol de levas'
        ],
        correctIndex: 1,
        explanation: 'El disco de embrague presiona contra el volante de inercia del motor para transmitir el giro; al pisar el pedal, se separan interrumpiendo el flujo de fuerza para cambiar de marcha.',
    },
    {
        id: 153,
        question: '¿Qué tipo de infracción comete un conductor que circula transportando materiales peligrosos sin los rótulos de identificación internacional requeridos por ley?',
        options: ['Categoría A', 'Categoría B', 'Categoría C', 'Categoría D'],
        correctIndex: 0,
        explanation: 'Transportar sustancias inflamables, tóxicas o peligrosas sin la señalización reglamentaria y los permisos correspondientes es una falta gravísima de Categoría A.',
    },
    {
        id: 154,
        question: '¿Qué indica una señal reglamentaria con fondo blanco, aro rojo y la figura de un peatón con una línea diagonal roja encima?',
        options: [
            'Zona de cruce peatonal recomendado',
            'Prohibición de tránsito o cruce de peatones en esa vía o sector específico',
            'Inicio de acera compartida con ciclistas',
            'Punto de abordaje exclusivo para transporte público'
        ],
        correctIndex: 1,
        explanation: 'Las señales reglamentarias con la barra transversal roja denotan una prohibición estricta; en este caso, restringe el paso peatonal en tramos de alta peligrosidad vial.',
    },
    {
        id: 155,
        question: '¿Qué componente del sistema eléctrico automotriz se encarga de elevar el bajo voltaje de la batería para generar la chispa de alta tensión en las bujías?',
        options: ['El alternador', 'La bobina de encendido', 'El motor de arranque', 'El distribuidor de corriente'],
        correctIndex: 1,
        explanation: 'La bobina de encendido transforma la corriente de 12 voltios de la batería en miles de voltios indispensables para que la bujía cree la chispa e inicie la combustión.',
    },
    {
        id: 156,
        question: '¿A qué distancia mínima de una señal de "PARADA DE AUTOBÚS" está permitido estacionar un vehículo particular?',
        options: ['A 5 metros', 'A 10 metros', 'A 15 metros', 'A 20 metros'],
        correctIndex: 1,
        explanation: 'La Ley de Tránsito costarricense prohíbe el estacionamiento de autos particulares a menos de 10 metros de los puntos oficiales de parada de transporte colectivo.',
    },
    {
        id: 157,
        question: '¿Qué efecto tiene en la conducción llevar una presión de inflado excesivamente alta (sobreinflado) en los neumáticos?',
        options: [
            'El neumático se desgasta únicamente en los bordes exteriores',
            'Disminuye la superficie de contacto con el suelo, la suspensión se vuelve muy rígida y el neumático se desgasta prematuramente en el centro de la banda de rodamiento',
            'Se duplica la adherencia sobre calzadas mojadas',
            'El sistema de frenos ABS se desactiva de forma permanente'
        ],
        correctIndex: 1,
        explanation: 'Las llantas muy infladas se abomban hacia el centro, reduciendo la fricción óptima con el pavimento, provocando rebotes inestables y acortando la vida útil del neumático.',
    },
    {
        id: 158,
        question: '¿Qué indica una luz amarilla parpadeante o intermitente en una intersección controlada por semáforo?',
        options: [
            'Detención obligatoria total antes de avanzar',
            'Avanzar con precaución, reduciendo la velocidad y cediendo el paso si hay peatones o vehículos cruzando',
            'Que el semáforo cambiará inmediatamente a luz roja',
            'Que el carril es de sentido exclusivo de emergencia'
        ],
        correctIndex: 1,
        explanation: 'La luz amarilla intermitente funciona de manera equivalente a una señal de CEDA EL PASO; no exige parar por completo a menos que circulen usuarios con prioridad.',
    },
    {
        id: 159,
        question: '¿Qué tipo de infracción comete un conductor que circula con el derecho de circulación (marchamo) vencido?',
        options: ['Categoría B', 'Categoría C', 'Categoría D', 'Categoría E'],
        correctIndex: 1,
        explanation: 'Circular por las vías públicas con el marchamo o derecho de circulación vencido constituye una infracción administrativa catalogada dentro de la Categoría C.',
    },
    {
        id: 160,
        question: '¿Cuál es la función de los anillos o segmentos del pistón dentro del cilindro del motor?',
        options: [
            'Controlar la apertura de las válvulas de admisión',
            'Asegurar el sellado de los gases de combustión en la cámara y evitar que el aceite de lubricación ingrese a la zona de quemado',
            'Conectar el cigüeñal con el alternador',
            'Filtrar las impurezas de la gasolina'
        ],
        correctIndex: 1,
        explanation: 'Los anillos del pistón mantienen la compresión del motor aislada en la parte superior y barren el exceso de aceite de las paredes del cilindro hacia el cárter.',
    },
    {
        id: 161,
        question: '¿Qué se debe hacer de forma prioritaria si el vehículo comienza a patinar sobre una superficie con hielo o aceite (pérdida total de adherencia)?',
        options: [
            'Frenar bruscamente y girar el volante con fuerza hacia el lado contrario',
            'No frenar, mantener la calma, levantar suavemente el pie del acelerador y dirigir el volante con movimientos sutiles hacia donde se requiera avanzar',
            'Apagar el motor y colocar la transmisión en neutro',
            'Activar de inmediato el freno de mano'
        ],
        correctIndex: 1,
        explanation: 'Pisar el freno durante un patinaje bloquea por completo las ruedas y prolonga el arrastre incontrolado. Es vital dejar rodar las llantas libres para recuperar tracción.',
    },
    {
        id: 162,
        question: '¿Qué tipo de demarcación vial consiste en líneas blancas continuas en forma de flechas que apuntan hacia adentro del carril?',
        options: [
            'Indicación de zona de parqueo permitido',
            'Flechas de retorno u obligación de abandonar ese carril de circulación porque está próximo a terminar o estrecharse',
            'Carril preferencial para vehículos de turismo',
            'Punto de inicio de zona de velocidad libre'
        ],
        correctIndex: 1,
        explanation: 'Estas marcas viales ordenan la reincorporación oportuna hacia los carriles principales antes del fin físico del carril actual.',
    },
    {
        id: 163,
        question: '¿Bajo qué categoría se sanciona al conductor que se distraiga manejando por utilizar teléfonos celulares u otros dispositivos de comunicación sin el sistema de manos libres?',
        options: ['Categoría A', 'Categoría B', 'Categoría C', 'Categoría D'],
        correctIndex: 1,
        explanation: 'El uso manual de celulares o dispositivos electrónicos al conducir genera un alto índice de riesgo y accidentes, sancionándose bajo la Categoría B.',
    },
    {
        id: 164,
        question: '¿Cuál es la función del radiador en el sistema de enfriamiento del motor?',
        options: [
            'Calentar el aceite de la transmisión de forma rápida',
            'Disipar el calor del líquido refrigerante caliente proveniente del motor al hacer el fluido circular por finos conductos expuestos al flujo de aire',
            'Mezclar el agua destilada con los gases del escape',
            'Generar corriente eléctrica para el ventilador'
        ],
        correctIndex: 1,
        explanation: 'El radiador es un intercambiador de calor; el aire ambiental enfría el líquido refrigerante que pasa por sus celdas antes de que este retorne al bloque del motor.',
    },
    {
        id: 165,
        question: '¿Qué tipo de licencia se requiere legalmente en Costa Rica para conducir vehículos pesados articulados (como camiones tipo tráiler)?',
        options: ['Licencia Tipo B-2', 'Licencia Tipo B-4', 'Licencia Tipo C-2', 'Licencia Tipo T-G'],
        correctIndex: 1,
        explanation: 'La licencia de conducir de clase B-4 habilita de forma exclusiva para operar vehículos de carga pesada de tipo articulado.',
    },
    {
        id: 166,
        question: '¿Qué distancia mínima de estacionamiento se debe respetar con respecto a una señal de "ALTO" o semáforo instalado en una intersección?',
        options: ['A 3 metros', 'A 5 metros', 'A 10 metros', 'A 15 metros'],
        correctIndex: 2,
        explanation: 'Estacionar a menos de 10 metros de señales viales de detención o semáforos interfiere con la visibilidad visual de los automotores que se aproximan al cruce, estando prohibido por ley.',
    },
    {
        id: 167,
        question: '¿Cuál es la función principal de los fusibles dentro del sistema eléctrico del automóvil?',
        options: [
            'Generar corriente alterna para los focos delanteros',
            'Proteger los componentes eléctricos interrumpiendo el flujo de corriente (fundiéndose) en caso de una sobrecarga o cortocircuito',
            'Aumentar la potencia de carga de la batería',
            'Alimentar las bujías de precalentamiento'
        ],
        correctIndex: 1,
        explanation: 'Los fusibles actúan como eslabones débiles de protección; ante un exceso perjudicial de amperaje, su filamento interno se rompe para salvar los módulos electrónicos costosos.',
    },
    {
        id: 168,
        question: '¿Qué indica una señal informativa de forma cuadrada, fondo verde y un pictograma de un avión de color blanco?',
        options: [
            'Prohibición de vuelo bajo en el sector',
            'La proximidad o dirección hacia un aeropuerto o aeródromo internacional',
            'Zona propensa a ruidos de turbinas aeronáuticas',
            'Fábrica de suministros mecánicos aéreos'
        ],
        correctIndex: 1,
        explanation: 'Las señales informativas de color de fondo verde guían sobre destinos geográficos e infraestructura de transporte masivo relevante.',
    },
    {
        id: 169,
        question: '¿Bajo qué categoría se sanciona a un conductor que circule en la vía pública con una licencia de conducir suspendida por acumulación previa de puntos?',
        options: ['Categoría A', 'Categoría B', 'Categoría C', 'Categoría D'],
        correctIndex: 0,
        explanation: 'Conducir con una licencia suspendida administrativamente desafía de forma grave el marco legal de seguridad vial, catalogándose bajo la Categoría A.',
    },
    {
        id: 170,
        question: '¿Qué peligro directo representa conducir manteniendo el nivel de aceite del motor por debajo del indicador mínimo de la varilla?',
        options: [
            'El auto consume mayor cantidad de líquido lavaparabrisas',
            'Se genera una severa falta de lubricación que eleva la temperatura por fricción metálica, desgastando y pudiendo fundir o destruir el motor',
            'Las marchas de la caja automática se bloquean de inmediato',
            'Se produce un cortocircuito en las luces de posición'
        ],
        correctIndex: 1,
        explanation: 'Sin suficiente aceite, la bomba hidráulica absorbe aire y pierde presión, rompiendo la película protectora entre bielas, pistones y cigüeñal, destruyendo el bloque mecánico.',
    },
    {
        id: 171,
        question: '¿Qué tipo de demarcación horizontal consiste en líneas blancas transversales continuas que cruzan diagonalmente una intersección?',
        options: [
            'Espacio de uso exclusivo para el giro de autobuses urbanos',
            'Paso peatonal exclusivo o preferente de gran afluencia (zonas comerciales de alto flujo)',
            'Área reservada para vehículos de valores bancarios',
            'Zonas de prohibición absoluta de frenado'
        ],
        correctIndex: 1,
        explanation: 'Los pasos peatonales diagonales o densamente demarcados resguardan el tránsito a pie en encrucijadas metropolitanas con prioridad peatonal.',
    },
    {
        id: 172,
        question: '¿Qué se debe hacer de inmediato si el indicador de temperatura del tablero sube hasta la zona roja (overheating)?',
        options: [
            'Acelerar a fondo para que el aire enfríe el radiador con mayor velocidad',
            'Detener el vehículo de forma segura fuera de la calzada, apagar el motor y esperar a que se enfríe por completo antes de revisar los niveles (NUNCA abrir el tapón del radiador caliente)',
            'Abrir el tapón del radiador de forma inmediata para liberar el vapor',
            'Echar agua fría directamente sobre el bloque del motor encendido'
        ],
        correctIndex: 1,
        explanation: 'El sobrecalentamiento deforma culatas y bloques. Quitar el tapón bajo presión liberará vapor hirviendo causando quemaduras graves; se debe enfriar de forma natural.',
    },
    {
        id: 173,
        question: '¿Qué tipo de infracción comete un conductor que transporta niños menores de 12 años en el asiento delantero del acompañante?',
        options: ['Categoría B', 'Categoría C', 'Categoría D', 'Categoría E'],
        correctIndex: 0,
        explanation: 'Por razones de seguridad biomecánica ante desaceleraciones e impactos, los menores de 12 años deben viajar obligatoriamente en los asientos traseros, penalizándose lo contrario en la Categoría B.',
    },
    {
        id: 174,
        question: '¿Cuál es la función de la junta de la culata (empaque de cabezote) en el motor del vehículo?',
        options: [
            'Conectar los pistones con las bujías',
            'Asegurar el sellado hermético entre el bloque del motor y la culata para evitar fugas de gases de compresión, líquido refrigerante o aceite lubricante',
            'Filtrar el combustible antes del riel de inyectores',
            'Controlar el flujo de corriente hacia las luces altas'
        ],
        correctIndex: 1,
        explanation: 'El empaque de culata soporta altas presiones y temperaturas, manteniendo aislados e independientes los circuitos de refrigeración, lubricación y combustión.',
    },
    {
        id: 175,
        question: '¿Qué indica una señal reglamentaria con forma circular, fondo blanco, anillo periférico rojo y una silueta de una bicicleta cruzada por una barra roja?',
        options: [
            'Ciclovía exclusiva adelante',
            'Prohibición de circulación de bicicletas en esa ruta o calzada específica',
            'Punto de alquiler autorizado de bicicletas',
            'Zona de precaución por ciclistas en la vía'
        ],
        correctIndex: 1,
        explanation: 'Este elemento restringe de manera legal el tránsito de bicicletas en autopistas o túneles donde las diferencias de velocidad representan un riesgo crítico.',
    },
    {
        id: 176,
        question: '¿Qué componente del sistema de frenos se encarga de distribuir la presión hidráulica de forma equilibrada entre las ruedas delanteras y traseras para evitar derrapes?',
        options: [
            'El freno de mano mecánico',
            'La válvula dosificadora o reguladora de presión',
            'El depósito del líquido de frenos',
            'La palanca del pedal'
        ],
        correctIndex: 1,
        explanation: 'La válvula reguladora distribuye la fuerza de frenado de manera asimétrica (usualmente más fuerza adelante) para evitar que el eje trasero se bloquee y el auto derrape.',
    },
    {
        id: 177,
        question: '¿Qué tipo de señalización vial horizontal consiste en líneas blancas discontinuas cortas y muy juntas que cruzan transversalmente un carril?',
        options: [
            'Línea de ceda el paso u obligación de dar prioridad si se aproximan otros usuarios',
            'Zona reservada para el cruce de ganado',
            'Demarcación de velocidad mínima permitida',
            'Línea de estacionamiento tarifado'
        ],
        correctIndex: 0,
        explanation: 'Estas líneas transversales segmentadas indican el punto límite donde el conductor debe detener la marcha para ceder el paso ante un rótulo vertical de CEDA EL PASO.',
    },
    {
        id: 178,
        question: '¿Bajo qué categoría se sanciona a un conductor que circule transportando carga que tape o dificulte la visibilidad de las luces direccionales o de freno del vehículo?',
        options: ['Categoría B', 'Categoría C', 'Categoría D', 'Categoría E'],
        correctIndex: 2,
        explanation: 'Llevar carga de manera inadecuada obstruyendo los sistemas ópticos de comunicación del vehículo es una infracción tipificada dentro de la Categoría D.',
    },
    {
        id: 179,
        question: '¿Cuál es la función principal de las bujías en un motor de combustión interna que utiliza gasolina?',
        options: [
            'Inyectar el combustible a alta presión en los cilindros',
            'Producir la chispa eléctrica necesaria para inflamar la mezcla de aire y combustible dentro de la cámara de combustión',
            'Lubricar las paredes internas del pistón',
            'Controlar la temperatura del líquido refrigerante'
        ],
        correctIndex: 1,
        explanation: 'La bujía recibe el alto voltaje de la bobina y genera un arco eléctrico (chispa) que detona la mezcla comprimida, empujando el pistón hacia abajo.',
    },
    {
        id: 180,
        question: '¿A qué distancia mínima de un cruce ferroviario o vía de tren está totalmente prohibido estacionar un vehículo?',
        options: ['A 5 metros', 'A 10 metros', 'A 15 metros', 'A 20 metros'],
        correctIndex: 1,
        explanation: 'Por estrictas razones de seguridad y derecho de vía del ferrocarril, la Ley de Tránsito prohíbe el estacionamiento a menos de 10 metros de los rieles.',
    },
    {
        id: 181,
        question: '¿Qué peligro físico directo se genera al conducir con amortiguadores totalmente desgastados al pasar por una curva?',
        options: [
            'El motor se apaga debido a la fuerza G',
            'El vehículo pierde estabilidad, se inclina excesivamente hacia el exterior de la curva y las llantas pierden contacto óptimo con el pavimento',
            'Los frenos se bloquean de forma electrónica automática',
            'La presión de inflado de las llantas aumenta instantáneamente'
        ],
        correctIndex: 1,
        explanation: 'Los amortiguadores en mal estado no logran mitigar la oscilación de la carrocería, reduciendo el agarre neumático y facilitando la pérdida de control o vuelco.',
    },
    {
        id: 182,
        question: '¿Qué indica una señal informativa de tránsito con forma rectangular, fondo azul y el pictograma blanco de un teléfono de red pública?',
        options: [
            'Prohibición de llamadas en esa zona',
            'La cercanía de un puesto de asistencia con teléfono disponible',
            'Zona de cobertura de internet exclusiva',
            'Oficina central de telecomunicaciones nacionales'
        ],
        correctIndex: 1,
        explanation: 'Las señales azules son de servicios informativos; facilitan al usuario la localización de asistencia básica en carretera.',
    },
    {
        id: 183,
        question: '¿Bajo qué categoría se sanciona al conductor que circule sin el seguro obligatorio de automóviles (SOA) vigente y al día?',
        options: ['Categoría B', 'Categoría C', 'Categoría D', 'Categoría E'],
        correctIndex: 1,
        explanation: 'No contar con el Seguro Obligatorio del marchamo al día constituye una infracción de Categoría C, conllevando también el retiro de las placas físicas.',
    },
    {
        id: 184,
        question: '¿Cuál es la función del cárter en el bloque inferior de un motor de automóvil?',
        options: [
            'Filtrar el aire que entra a la admisión',
            'Servir como depósito o almacén para el aceite lubricante del motor, permitiendo su enfriamiento y recolección',
            'Albergar el líquido hidráulico de los frenos',
            'Proteger mecánicamente la correa de distribución exterior'
        ],
        correctIndex: 1,
        explanation: 'El cárter es una bandeja metálica atornillada a la base del bloque donde descansa el aceite cuando el motor está apagado o circula impulsado por la bomba.',
    },
    {
        id: 185,
        question: '¿Qué tipo de demarcación horizontal consiste en líneas blancas transversales continuas pintadas en paralelo simulando los dientes de un tiburón?',
        options: [
            'Zona preferencial de velocidad libre',
            'Líneas de advertencia de reducción de carril inminente',
            'Indicación avanzada de obligatoriedad de ceder el paso a peatones o ciclistas en la vía',
            'Espacios de estacionamiento para carga pesada'
        ],
        correctIndex: 2,
        explanation: 'Estas marcas geométricas transversales guían e instan visualmente al conductor a aminorar la velocidad por prioridad ajena próxima en el trazado urbano.',
    },
    {
        id: 186,
        question: '¿Qué se debe hacer de forma obligatoria antes de iniciar un viaje largo en carretera para evitar fallas por fatiga mecánica?',
        options: [
            'Lavar la carrocería del vehículo a alta presión',
            'Verificar niveles de fluidos (aceite, refrigerante, líquido de frenos), estado y presión de llantas, y el correcto funcionamiento de todas las luces',
            'Cambiar las bujías de encendido de forma preventiva',
            'Desconectar el fusible del sistema de aire acondicionado'
        ],
        correctIndex: 1,
        explanation: 'La revisión previas de los componentes críticos reduce drásticamente las probabilidades de quedar varado o sufrir un accidente por fallas mecánicas previsibles.',
    },
    {
        id: 187,
        question: '¿Qué indica una señal de tránsito reglamentaria circular con fondo blanco, aro rojo y una flecha recta apuntando hacia arriba junto a otra en sentido opuesto de menor tamaño?',
        options: [
            'Prioridad de paso para el sentido de circulación que regula la señal',
            'Doble vía obligatoria adelante sin giros',
            'Restricción de velocidad por carriles angostos',
            'Prohibición de adelantar camiones pesados'
        ],
        correctIndex: 0,
        explanation: 'Esta señal regula pasos estrechos indicando cuál de los flujos de tránsito en sentidos opuestos goza del derecho prioritario de cruce.',
    },
    {
        id: 188,
        question: '¿Bajo qué categoría se sanciona al conductor que arroje basura, escombros u objetos contundentes desde un vehículo hacia la vía pública?',
        options: ['Categoría B', 'Categoría C', 'Categoría D', 'Categoría E'],
        correctIndex: 2,
        explanation: 'Arrojar deshechos o contaminar la infraestructura vial desde el automotor atenta contra el medio ambiente y la seguridad, tipificándose en la Categoría D.',
    },
    {
        id: 189,
        question: '¿Cuál es la función del sensor de oxígeno en el sistema de control electrónico de inyección del motor?',
        options: [
            'Medir la cantidad de aire que ingresa al filtro',
            'Analizar los gases de escape para medir la concentración de oxígeno residual, permitiendo a la computadora ajustar la mezcla exacta de combustible',
            'Aumentar la presión de los inyectores en frío',
            'Enfriar los gases calientes antes del catalizador'
        ],
        correctIndex: 1,
        explanation: 'El sensor de oxígeno (sonda lambda) retroalimenta a la unidad de control (ECU) para mantener una mezcla estequiométrica óptima y reducir gases contaminantes.',
    },
    {
        id: 190,
        question: '¿Qué distancia de seguridad lateral se debe mantener de forma obligatoria al transitar de forma paralela a un autobús que realiza una parada?',
        options: ['Al menos 0.5 metros', 'Al menos 1.0 metro', 'Al menos 1.5 metros de margen prudencial', 'No se requiere distancia si se avanza despacio'],
        correctIndex: 2,
        explanation: 'Mantener un espacio lateral amplio (mínimo de 1.5 metros) previene colisiones ante descensos imprevistos o peatones saliendo apresuradamente por el frente del bus.',
    },
    {
        id: 191,
        question: '¿Qué se conoce técnicamente como el efecto "fading" o fatiga térmica en el sistema de frenos?',
        options: [
            'El congelamiento del líquido hidráulico debido al clima frío',
            'La pérdida temporal de eficacia de los frenos causada por el sobrecalentamiento excesivo de pastillas y discos tras un uso abusivo y prolongado',
            'El agrietamiento de las mangueras de vacío del servofreno',
            'El desgaste prematuro del dibujo de los neumáticos traseros'
        ],
        correctIndex: 1,
        explanation: 'Al calentarse en extremo los componentes de fricción, los materiales pierden coeficiente de adherencia, provocando que el pedal se sienta duro pero el auto no frene.',
    },
    {
        id: 192,
        question: '¿Qué tipo de demarcación horizontal consiste en líneas continuas blancas pintadas de forma longitudinal delimitando áreas triangulares en las salidas de autopistas?',
        options: [
            'Zonas habilitadas para el estacionamiento de emergencia',
            'Líneas de canalización o "pistas de convergencia/divergencia", sobre las cuales está terminantemente prohibido circular o detenerse',
            'Espacios exclusivos para el control de oficiales de tránsito',
            'Carriles para giros rápidos en reversa'
        ],
        correctIndex: 1,
        explanation: 'Estas zonas canalizadoras de flujo guían el tráfico hacia salidas o incorporaciones; invadirlas genera un severo riesgo de colisión por alcance.',
    },
    {
        id: 193,
        question: '¿Bajo qué categoría se sanciona circular con un vehículo cuyas placas oficiales se encuentren tapadas, recortadas o dobladas dificultando su lectura?',
        options: ['Categoría B', 'Categoría C', 'Categoría D', 'Categoría E'],
        correctIndex: 1,
        explanation: 'Llevar placas oficiales con alteraciones físicas, ocultas o de difícil lectura impide la correcta identificación del bien, penalizándose bajo la Categoría C.',
    },
    {
        id: 194,
        question: '¿Cuál es la función principal de la banda o correa de distribución en el motor de un vehículo?',
        options: [
            'Conectar el cigüeñal con el alternador para generar luz',
            'Sincronizar de forma exacta el movimiento de rotación del cigüeñal con la apertura y cierre de las válvulas de admisión y escape en la culata',
            'Impulsar el fluido de la dirección asistida',
            'Controlar la temperatura del aire acondicionado'
        ],
        correctIndex: 1,
        explanation: 'La correa o cadena de distribución asegura la coordinación mecánica interna; si se rompe en marcha, los pistones impactan las válvulas destruyendo el motor.',
    },
    {
        id: 195,
        question: '¿Qué indica una señal de tránsito vertical de prevención temporal con forma de rombo, color de fondo naranja y el pictograma de un banderillero humano?',
        options: [
            'Zona permanente de desfiles folclóricos',
            'Proximidad a un tramo de vía en obras controlada por personal técnico regulando el paso alternado de vehículos mediante banderas o paletas',
            'Inicio de parque de diversiones infantil',
            'Estación de peaje manual'
        ],
        correctIndex: 1,
        explanation: 'El color naranja resalta la naturaleza transitoria de obras en ejecución; el pictograma exige máxima atención a las señas manuales del personal vial.',
    },
    {
        id: 196,
        question: '¿Qué se debe hacer de forma inmediata si mientras se conduce se enciende el testigo luminoso amarillo de nivel bajo de presión de llantas (TPMS)?',
        options: [
            'Ignorarlo hasta la próxima revisión técnica anual',
            'Disminuir la velocidad de forma controlada y dirigirse a una estación de servicio cercana para revisar visualmente y calibrar la presión de inflado de los neumáticos',
            'Frenar bruscamente en mitad de la vía para cambiar la llanta dañado',
            'Aumentar la velocidad para que la fuerza centrífuga infle la llanta'
        ],
        correctIndex: 1,
        explanation: 'El sistema TPMS alerta sobre una descompresión peligrosa en una o más ruedas, lo cual afecta severamente el frenado y la estabilidad si no se corrige prontamente.',
    },
    {
        id: 197,
        question: '¿Cuál es la función de la válvula PCV (Ventilación Positiva del Cárter) en los motores modernos?',
        options: [
            'Aumentar la presión del líquido refrigerante',
            'Recircular de manera controlada los vapores y gases nocivos acumulados en el cárter hacia la cámara de combustión para ser quemados de nuevo',
            'Filtrar las impurezas gruesas de la gasolina',
            'Regular el encendido automático de los electroventiladores'
        ],
        correctIndex: 1,
        explanation: 'La válvula PCV evita la acumulación de presiones internas nocivas de vapores de aceite en el motor, disminuyendo fugas por retenedores y reduciendo emisiones.',
    },
    {
        id: 198,
        question: '¿Qué indica una señal reglamentaria con forma circular, fondo blanco, aro rojo y dos flechas apuntando hacia arriba en paralelo, estando la de la izquierda cruzada por una barra diagonal roja?',
        options: [
            'Prohibición de cambiar de carril hacia la izquierda',
            'Prohibición estricta de efectuar maniobras de adelantamiento en ese sector de la vía',
            'Inicio de carril exclusivo para transporte público',
            'Obligatoriedad de mantener la derecha únicamente a camiones'
        ],
        correctIndex: 1,
        explanation: 'Esta señal reglamenta e impone la prohibición de adelantar, reforzando usualmente zonas con líneas de barrera continuas en el pavimento.',
    },
    {
        id: 199,
        question: '¿Bajo qué categoría de infracción se sanciona el conducir un vehículo automotor sin portar el correspondiente chaleco retroreflectivo de seguridad obligatoria?',
        options: ['Categoría B', 'Categoría C', 'Categoría D', 'Categoría E'],
        correctIndex: 2,
        explanation: 'No llevar prendas de alta visibilidad reflectiva homologadas (chaleco) dentro del kit de emergencia vial obligatorio se sanciona bajo la Categoría D.',
    },
    {
        id: 200,
        question: '¿Cuál es la función del líquido de frenos dentro del sistema de frenado hidráulico del automóvil?',
        options: [
            'Lubricar las caras exteriores del disco de freno',
            'Transmitir de forma incompresible e instantánea la fuerza ejercida desde el pedal de freno hacia los cilindros de las ruedas para accionar las pastillas',
            'Limpiar los sensores electrónicos del sistema ABS',
            'Enfriar los neumáticos traseros durante la marcha prolongada'
        ],
        correctIndex: 1,
        explanation: 'Al ser un fluido hidráulico incompresible, el líquido de frenos soporta extremas presiones y temperaturas operativas transmitiendo de manera íntegra el mandato de frenado.',
    },
    {
        id: 201,
        question: '¿Cuáles son los tres elementos fundamentales que integran la denominada "Trilogía Vial"?',
        options: [
            'El conductor, el pasajero y el peatón',
            'El factor humano, el factor vehicular y el factor ambiental (vía y entorno)',
            'La velocidad, el alcohol y las distracciones',
            'El MOPT, el COSEVI y la Policía de Tránsito'
        ],
        correctIndex: 1,
        explanation: 'La Trilogía Vial está compuesta por el factor humano (usuarios), el factor vehicular (el automóvil) y el factor ambiental (las calles, el clima y el entorno).',
    },
    {
        id: 202,
        question: '¿Cuál es la definición formal de "Tránsito" según los lineamientos de seguridad vial?',
        options: [
            'El traslado de mercancías pesadas de un puerto a otro',
            'La acción de circular o desplazarse de un lugar a otro por las vías públicas',
            'El cobro de peajes en las rutas nacionales',
            'La detención de vehículos en un congestionamiento urbano'
        ],
        correctIndex: 1,
        explanation: 'El tránsito es el flujo dinámico de personas, animales o vehículos que se desplazan a lo largo de una infraestructura vial pública o privada abierta al público.',
    },
    {
        id: 203,
        question: '¿En qué se diferencia el concepto de "Transporte" respecto al de "Tránsito"?',
        options: [
            'El transporte es únicamente de carácter público y el tránsito es privado',
            'El tránsito es la acción de desplazarse, mientras que el transporte es la acción de trasladar personas o bienes de un lugar a otro',
            'No hay ninguna diferencia, son sinónimos legales',
            'El transporte solo incluye a los vehículos ferroviarios'
        ],
        correctIndex: 1,
        explanation: 'El tránsito es el movimiento o circulación en sí, mientras que el transporte implica el traslado efectivo de un punto A a un punto B de carga o pasajeros.',
    },
    {
        id: 204,
        question: '¿Cuál es el objetivo primordial de la disciplina de la "Seguridad Vial"?',
        options: [
            'Aumentar la recaudación económica del Estado mediante multas',
            'Prevenir, minimizar o eliminar los accidentes de tránsito y sus consecuencias para proteger la vida humana',
            'Garantizar que todos los vehículos viajen a más de 100 km/h',
            'Diseñar calles exclusivamente para el uso de automóviles livianos'
        ],
        correctIndex: 1,
        explanation: 'La seguridad vial estudia e implementa normas, conductas y diseños técnicos para reducir al mínimo los siniestros viales y resguardar la integridad física de la población.',
    },
    {
        id: 205,
        question: 'Dentro del factor ambiental de la trilogía vial, ¿cuáles son los dos componentes principales de la vía pública?',
        options: [
            'Los árboles y los postes eléctricos',
            'La calzada (área de rodamiento) y la acera o zona peatonal',
            'Los semáforos y los oficiales de tránsito',
            'Los peajes y las vallas publicitarias'
        ],
        correctIndex: 1,
        explanation: 'La estructura de la vía pública se divide esencialmente en la zona destinada a la circulación vehicular (calzada) y la zona destinada a los peatones (acera/espaldares).',
    },
    {
        id: 206,
        question: '¿Cómo se define legalmente a un "Conductor Novato" en Costa Rica?',
        options: [
            'Cualquier persona menor de 21 años que maneje',
            'El conductor que obtiene su licencia por primera vez y se encuentra en un periodo de prueba por 3 años',
            'El conductor que maneja únicamente vehículos automáticos',
            'Aquel que no ha realizado el curso teórico del MOPT'
        ],
        correctIndex: 1,
        explanation: 'Conductor novato es quien expide su licencia de conducir por primera vez. Durante sus primeros 3 años está sujeto a restricciones de puntos más estrictas.',
    },
    {
        id: 207,
        question: '¿Qué cantidad máxima de puntos acumulados tolera la ley para un conductor profesional o particular común en su renovación de licencia si esta se expidió por 5 o 6 años?',
        options: ['Menos de 4 puntos', 'Menos de 6 puntos', 'Menos de 12 puntos', 'Hasta 20 puntos'],
        correctIndex: 2,
        explanation: 'Un conductor común o profesional que acumule 12 puntos o más sufrirá la suspensión automática de su licencia y perderá el derecho a renovación ordinaria.',
    },
    {
        id: 208,
        question: 'Si un conductor común renueva su licencia con un acumulado de entre 5 y 8 puntos, ¿por cuánto tiempo se le expedirá su nueva licencia?',
        options: ['Por 6 años', 'Por 4 años', 'Por 3 años', 'Se le suspende de inmediato'],
        correctIndex: 1,
        explanation: 'La ley costarricense premia el buen historial. Si acumula de 5 a 8 puntos la vigencia se reduce a 4 años (en lugar de los 6 años máximos que se otorgan si tiene de 0 a 4 puntos).',
    },
    {
        id: 209,
        question: '¿Qué indica el Manual del Conductor respecto a la "Distancia de Percepción"?',
        options: [
            'La distancia que recorre el auto desde que se aplican los frenos',
            'El espacio que recorre el vehículo desde que el peligro aparece hasta que el cerebro del conductor lo reconoce visualmente',
            'La longitud total de una zona de frenado de emergencia',
            'El alcance máximo de las luces altas en la noche'
        ],
        correctIndex: 1,
        explanation: 'La distancia de percepción es el tramo recorrido por el auto durante la fracción de segundo que le toma al ojo ver el peligro y al cerebro procesar qué está pasando.',
    },
    {
        id: 210,
        question: '¿Qué es la "Fuerza de Fricción" o adherencia en el ámbito de la conducción?',
        options: [
            'La resistencia del viento contra el parabrisas',
            'La fuerza de agarre que se genera entre el caucho de la llanta y la superficie del pavimento',
            'La presión del aceite dentro de los pistones',
            'El empuje que ejerce el motor al acelerar'
        ],
        correctIndex: 1,
        explanation: 'La fricción es el elemento físico que permite que el auto acelere, gire y frene de forma controlada. Si la fricción se reduce (por lluvia o desgaste), el auto patina.',
    },
    {
        id: 211,
        question: '¿Qué tipo de infracción comete el conductor que circula con un vehículo que no cuenta con el juego de cinturones de seguridad en perfecto estado para todos sus ocupantes?',
        options: ['Categoría A', 'Categoría B', 'Categoría C', 'Categoría D'],
        correctIndex: 2,
        explanation: 'Circular sin los cinturones obligatorios o con estos defectuosos califica como una falta de Categoría C.',
    },
    {
        id: 212,
        question: '¿Cuál es la sanción administrativa si un conductor es atrapado conduciendo a una velocidad superior a los 120 km/h en cualquier vía del país?',
        options: [
            'Multa Categoría C sin pérdida de puntos',
            'Infracción Categoría A (acumula 6 puntos en la licencia) y posible arresto o proceso judicial',
            'Únicamente retiro del vehículo sin multa',
            'Amonestación por escrito del oficial'
        ],
        correctIndex: 1,
        explanation: 'Superar los 120 km/h se considera conducción temeraria gravísima, tipificada bajo la Categoría A, sumando 6 puntos y exponiendo al infractor a cargos penales.',
    },
    {
        id: 213,
        question: '¿Cuál de los siguientes usuarios de la vía pública tiene la menor prioridad de paso en el orden jerárquico vial?',
        options: ['El peatón', 'El ciclista', 'El conductor de un vehículo articulado pesado', 'El conductor de un vehículo motorizado particular'],
        correctIndex: 3,
        explanation: 'En la pirámide de movilidad vial, el vehículo particular motorizado cede prioridad ante peatones, ciclistas, vehículos de emergencia y transporte público.',
    },
    {
        id: 214,
        question: '¿Qué tipo de señal vertical se utiliza para indicar el fin de una restricción previamente establecida en la carretera?',
        options: ['Señal Preventiva', 'Señal Reglamentaria de Fin de Restricción', 'Señal Informativa de Destino', 'Señal de Obras'],
        correctIndex: 1,
        explanation: 'Las señales de fin de restricción (como fin de prohibición de adelantar o fin de límite de velocidad) son señales reglamentarias con fondo blanco y líneas diagonales grises o negras.',
    },
    {
        id: 215,
        question: '¿Qué significan las líneas blancas continuas pintadas en forma de canales curvos en una aproximación a una isla de canalización?',
        options: [
            'Zonas habilitadas para giros rápidos en U',
            'Líneas guía de canalización que orientan y separan los flujos vehiculares hacia carriles específicos de salida',
            'Pasos peatonales alternos',
            'Líneas de frenado obligatorio en seco'
        ],
        correctIndex: 1,
        explanation: 'La marcas viales de canalización dirigen de manera física y visual las trayectorias de los vehículos hacia los carriles adecuados ante bifurcaciones.',
    },
    {
        id: 216,
        question: '¿Qué se conoce como "Efecto Túnel" en la seguridad vial?',
        options: [
            'La pérdida de audición al entrar a una estructura cerrada',
            'El estrechamiento del campo visual periférico del conductor conforme aumenta la velocidad del vehículo',
            'El parpadeo involuntario de las luces delanteras',
            'La sensación de encierro al manejar de noche'
        ],
        correctIndex: 1,
        explanation: 'A mayor velocidad, el cerebro descarta la información visual de los lados para concentrarse al frente, reduciendo el campo de visión de casi 180° a menos de 30° (efecto túnel).',
    },
    {
        id: 217,
        question: '¿Bajo qué categoría se sanciona a un conductor que se detenga a recoger o dejar pasajeros en zonas expresamente prohibidas o de alto riesgo vial?',
        options: ['Categoría B', 'Categoría C', 'Categoría D', 'Categoría E'],
        correctIndex: 2,
        explanation: 'Efectuar paradas de pasajeros en autopistas, curvas o lugares señalizados con línea amarilla sin dársena autorizada es una infracción de Categoría D.',
    },
    {
        id: 218,
        question: '¿Cuál es la función principal del sistema de alimentación de combustible del vehículo?',
        options: [
            'Alimentar los bombillos de los focos principales',
            'Suministrar la cantidad exacta de combustible (gasolina o diésel) a las cámaras de combustión del motor',
            'Limpiar los gases calientes de la mufla',
            'Lubricar el eje del alternador'
        ],
        correctIndex: 1,
        explanation: 'El sistema de alimentación (bomba, filtro e inyectores) transporta y dosifica el carburante necesario para que ocurra la explosión en los cilindros.',
    },
    {
        id: 219,
        question: '¿Qué tipo de señalización vial vertical tiene forma circular con fondo azul y flechas o pictogramas de color blanco?',
        options: ['Señal de Advertencia de Peligro', 'Señales Reglamentarias de Obligación', 'Señales Informativas de Ruta', 'Señales de Destino'],
        correctIndex: 1,
        explanation: 'Las señales circulares de fondo azul imponen un mandato u obligación (por ejemplo: "Uso obligatorio de luces" o "Dirección obligatoria de giro").',
    },
    {
        id: 220,
        question: '¿Qué distancia mínima debe dejar un conductor al estacionar su vehículo cerca de la entrada de un cuartel de bomberos o delegación policial?',
        options: ['A 2 metros', 'A 5 metros', 'A 10 metros', 'A 15 metros'],
        correctIndex: 2,
        explanation: 'Para garantizar salidas de respuesta rápida ante emergencias, está prohibido estacionarse a menos de 10 metros de dichos recintos oficiales.',
    },
    {
        id: 221,
        question: '¿Qué describe el Manual del Conductor sobre el "Punto Ciego" de los espejos retrovisores?',
        options: [
            'Un daño físico o ruptura en el cristal del espejo',
            'Las áreas laterales y traseras del vehículo que quedan fuera del campo visual de los espejos y exigen girar levemente la cabeza',
            'El reflejo encandilante de las luces altas traseras',
            'La visibilidad nula que se produce al llover'
        ],
        correctIndex: 1,
        explanation: 'Los puntos ciegos son zonas ocultas por la carrocería del auto que los espejos comunes no logran reflejar. Es vital verificar mirando de reojo antes de cambiar de carril.',
    },
    {
        id: 222,
        question: '¿Cuál es la velocidad máxima permitida por ley al transitar por una zona residencial urbana si no hay señales que indiquen lo contrario?',
        options: ['60 km/h', '40 km/h', '25 km/h', '50 km/h'],
        correctIndex: 1,
        explanation: 'Mientras que las vías urbanas comunes permiten hasta 60 km/h, en calles residenciales y comerciales densas el límite baja por defecto a 40 km/h.',
    },
    {
        id: 223,
        question: '¿Qué tipo de infracción comete un conductor que circule en un horario o zona restringida por la medida administrativa de "Restricción Vehicular" (Pico y Placa)?',
        options: ['Categoría B', 'Categoría C', 'Categoría D', 'Categoría E'],
        correctIndex: 1,
        explanation: 'Incumplir las directrices oficiales de restricción vehicular urbana se castiga bajo las infracciones económicas de la Categoría C.',
    },
    {
        id: 224,
        question: '¿Qué función cumple la dirección asistida (hidráulica o electrónica) en un automóvil moderno?',
        options: [
            'Evitar que el volante se mueva solo al frenar',
            'Reducir notablemente el esfuerzo físico que debe aplicar el conductor sobre el volante para girar las ruedas',
            'Alinear las llantas traseras automáticamente',
            'Bloquear la transmisión en pendientes'
        ],
        correctIndex: 1,
        explanation: 'Los sistemas asistidos aportan fuerza complementaria (hidráulica o por motor eléctrico) haciendo la dirección sumamente suave y maniobrable a bajas velocidades.',
    },
    {
        id: 225,
        question: '¿Qué se conoce como "Conducción Agresiva" y cuál es su peligro principal?',
        options: [
            'Manejar a la velocidad mínima permitida en autopistas',
            'Estilo de conducción hostil (irrespetar distancias, acelerones, cambios bruscos de carril) que multiplica el riesgo de violencia y accidentes fatales',
            'El uso correcto de los sistemas de seguridad activa',
            'Conducir camiones pesados cargados al límite'
        ],
        correctIndex: 1,
        explanation: 'La conducción agresiva ignora la cortesía vial y los márgenes de seguridad, poniendo en riesgo directo la vida del conductor y de terceros.',
    },
    {
        id: 226,
        question: '¿Qué significan las siglas del protocolo universal "PAS" utilizado en la atención de accidentes de tránsito?',
        options: [
            'Prevenir, Auxiliar, Salvar',
            'Proteger, Avisar, Socorrer',
            'Parar, Analizar, Sanar',
            'Prudencia, Alerta, Seguridad'
        ],
        correctIndex: 1,
        explanation: 'El protocolo PAS define el orden correcto de actuación ante una emergencia: 1. Proteger la zona (evitar más accidentes), 2. Avisar a las autoridades (911), 3. Socorrer a las víctimas.',
    },
    {
        id: 227,
        question: 'Dentro del protocolo PAS, ¿cuál es la primera acción concreta que se debe realizar para cumplir con la etapa de "Proteger"?',
        options: [
            'Sacar a los heridos del vehículo lo más rápido posible',
            'Estacionar nuestro vehículo en un lugar seguro, encender luces de emergencia y colocar los triángulos de seguridad antes del accidente',
            'Llamar por teléfono a los familiares de los heridos',
            'Dar de beber agua a las personas que están inconscientes'
        ],
        correctIndex: 1,
        explanation: 'Proteger significa hacer la escena segura. Si no señalizamos el accidente primero, nos exponemos a que otro vehículo choque contra nosotros o contra las víctimas.',
    },
    {
        id: 228,
        question: 'Al realizar la llamada de emergencia (etapa de "Avisar" del protocolo PAS), ¿cuál es el dato más crítico que se debe aportar?',
        options: [
            'La marca y color de los autos involucrados',
            'La ubicación exacta del accidente, cantidad de heridos y su estado general',
            'El nombre del dueño de la póliza de seguros',
            'El costo estimado de los daños materiales'
        ],
        correctIndex: 1,
        explanation: 'Dar indicaciones precisas del lugar y la gravedad del siniestro permite al sistema 911 despachar las unidades adecuadas (bomberos, ambulancias avanzadas, etc.) sin demoras.',
    },
    {
        id: 229,
        question: 'Como norma general de primeros auxilios, ¿se debe mover o sacar a un herido del interior de un vehículo accidentado?',
        options: [
            'Sí, siempre para que se estire en el suelo caliente',
            'No, salvo que exista un peligro inminente de muerte (como un incendio del vehículo o riesgo de caída al abismo)',
            'Sí, para revisar si tiene fracturas en las piernas',
            'Queda a criterio del primer peatón que pase'
        ],
        correctIndex: 1,
        explanation: 'Mover incorrectamente a una víctima de accidente de tránsito puede agravar lesiones de columna o médula espinal causando parálisis permanente. Solo se mueve en caso de riesgo vital extremo.',
    },
    {
        id: 230,
        question: '¿Qué se debe hacer si una víctima de un accidente de tránsito presenta una hemorragia grave (sangrado abundante) en un brazo?',
        options: [
            'Aplicar un torniquete flojo con cables eléctricos',
            'Efectuar presión directa y firme sobre la herida utilizando una gasa, paño limpio o apósito',
            'Lavar la herida con abundante alcohol caliente',
            'Doblar fuertemente el brazo hacia atrás'
        ],
        correctIndex: 1,
        explanation: 'La presión directa sobre el punto de sangrado es la técnica inicial más segura y efectiva para contener una hemorragia severa externa en extremidades.',
    },
    {
        id: 231,
        question: '¿Está permitido darle comida o líquidos (como agua o refrescos) a una persona herida o inconsciente en la escena de un choque?',
        options: [
            'Sí, para calmar los nervios',
            'No, está totalmente contraindicado por riesgo de asfixia, broncoaspiración o complicación en una cirugía de emergencia',
            'Solo si la persona lo pide con insistencia',
            'Solo bebidas calientes azucaradas'
        ],
        correctIndex: 1,
        explanation: 'Nunca se debe suministrar nada por la boca a un herido grave; si pierde el conocimiento, el líquido podría pasar a los pulmones causando asfixia severa.',
    },
    {
        id: 232,
        question: '¿Cómo se debe actuar si un motociclista accidentado está tirado en la calzada y respira con dificultad?',
        options: [
            'Quitarle el casco rápidamente para que respire mejor',
            'No quitarle el casco bajo ninguna circunstancia, mantener su cabeza alineada y esperar a los paramédicos',
            'Sentarlo en la acera apoyado contra un poste',
            'Darle respiración boca a boca a través del visor'
        ],
        correctIndex: 1,
        explanation: 'Retirar el casco a un motociclista sin la técnica médica adecuada puede provocar daños medulares irreparables a nivel cervical. Solo el personal de rescate debe retirarlo.',
    },
    {
        id: 233,
        question: '¿Qué es el "Estado de Shock" en una víctima de accidente y cuál es un síntoma común?',
        options: [
            'Un ataque de furia y gritos incontrolables',
            'Un fallo del sistema circulatorio que impide llevar sangre a los órganos vitales; se nota por piel pálida, fría, sudorosa y pulso rápido',
            'El bloqueo mecánico de las articulaciones',
            'La pérdida temporal de la visión nocturna'
        ],
        correctIndex: 1,
        explanation: 'El shock hipovolémico o traumático es una complicación potencialmente mortal. Mantener a la víctima acostada y abrigada ayuda a mitigar el cuadro mientras llega asistencia.',
    },
    {
        id: 234,
        question: '¿Qué técnica básica se utiliza para verificar si un herido inconsciente está respirando en la escena de un accidente?',
        options: [
            'Tomarle la temperatura con la mano en la frente',
            'La maniobra de "Ver, Oír y Sentir" (VOS): mirar el pecho si sube, oír el aire salir y sentir el aliento en la mejilla',
            'Mover fuertemente sus hombros de lado a lado',
            'Pinchando la punta de los dedos con una aguja'
        ],
        correctIndex: 1,
        explanation: 'La evaluación VOS permite determinar en menos de 10 segundos si la persona respira para saber si requiere maniobras críticas de reanimación.',
    },
    {
        id: 235,
        question: 'Si un vehículo accidentado comienza a emanar humo denso del motor y amenaza con incendiarse, ¿cómo debe proceder para evacuar a un ocupante atrapado?',
        options: [
            'Esperar obligatoriamente a que lleguen los bomberos sin importar el fuego',
            'Extraer a la víctima con el máximo cuidado posible del cuello y eje del cuerpo, arrastrándola hacia una zona segura alejada del auto',
            'Girar el carro sobre su costado para apagar las llamas',
            'Rociar el interior del auto con el extintor de polvo sobre la cara de la persona'
        ],
        correctIndex: 1,
        explanation: 'Ante un peligro inminente como fuego o explosión, la regla de no mover al paciente se rompe para salvar la vida de la víctima de forma inmediata.',
    },
    {
        id: 236,
        question: '¿Cuál es la función del botiquín de primeros auxilios que se aconseja portar dentro del kit vehicular?',
        options: [
            'Almacenar herramientas mecánicas como llaves e inglesas',
            'Disponer de material básico de curación (gasas, vendajes, esparadrapo, guantes) para estabilizar heridas leves o contener sangrados',
            'Llevar analgésicos fuertes y medicamentos recetados',
            'Guardar los documentos del marchamo y título del auto'
        ],
        correctIndex: 1,
        explanation: 'El botiquín vehicular debe contener elementos de curación y protección biológica (como guantes) para atender emergencias inmediatas sin recetar medicamentos.',
    },
    {
        id: 237,
        question: '¿Qué se debe hacer con un herido que presenta una quemadura grave causada por fluidos calientes del radiador del auto?',
        options: [
            'Aplicar pasta de dientes, manteca o aceites de cocina sobre la piel',
            'Enfriar la zona afectada aplicando únicamente agua limpia a temperatura ambiente por varios minutos y cubrir con un paño limpio húmedo',
            'Arrancar la ropa que haya quedado adherida a la quemadura',
            'Romper las ampollas que se formen de inmediato'
        ],
        correctIndex: 1,
        explanation: 'Los remedios caseros atrapan el calor y empeoran la quemadura. Lavar con agua fresca limpia detiene la progresión térmica del daño en los tejidos.',
    },
    {
        id: 238,
        question: '¿Cuál es la posición de seguridad recomendada para acostar a un herido inconsciente que SÍ respira con normalidad y no presenta sospecha de trauma de columna?',
        options: [
            'Boca abajo con las piernas dobladas',
            'Posición Lateral de Seguridad (PLS) o de lado, para evitar que se asfixie con su propia lengua o vómito',
            'Completamente sentado con la cabeza hacia atrás',
            'Colgado boca abajo sobre el asiento'
        ],
        correctIndex: 1,
        explanation: 'La posición lateral de seguridad mantiene la vía aérea abierta y despejada si el paciente inconsciente llega a vomitar, previniendo la muerte por asfixia.',
    },
    {
        id: 239,
        question: '¿Qué tipo de guantes se deben utilizar de forma obligatoria al atender a una víctima que sangra en la carretera?',
        options: ['Guantes de lona de trabajo pesado', 'Guantes de látex, nitrilo o vinilo desechables', 'Guantes de lana para el frío', 'Ninguno, es mejor usar las manos descubiertas'],
        correctIndex: 1,
        explanation: 'Los guantes desechables médicos crean una barrera de bioseguridad indispensable que protege al auxiliador de enfermedades transmisibles por la sangre.',
    },
    {
        id: 240,
        question: '¿Qué indica el Manual del Conductor sobre el manejo del estrés emocional de los involucrados en un accidente vial?',
        options: [
            'Discutir fuertemente para ver quién acepta la culpa',
            'Mantener la calma, hablar con tono firme pero tranquilo, apartar a los curiosos y dar apoyo psicológico básico a las víctimas',
            'Abandonar la escena corriendo para calmarse',
            'Gritar órdenes de forma agresiva'
        ],
        correctIndex: 1,
        explanation: 'El apoyo emocional inicial reduce la ansiedad de los lesionados, estabiliza sus signos vitales y facilita las labores de rescate.',
    },
    {
        id: 241,
        question: 'Si una persona sufre una fractura visible expuesta (el hueso rompió la piel) en una pierna, ¿qué acción está prohibida realizar?',
        options: [
            'Cubrir la herida con un apósito estéril limpio',
            'Intentar empujar el hueso hacia adentro o alinear la extremidad a la fuerza',
            'Inmovilizar la pierna tal y como se encuentra',
            'Llamar de inmediato a una ambulancia del 911'
        ],
        correctIndex: 1,
        explanation: 'Nunca se debe intentar acomodar un hueso roto o introducirlo de vuelta, ya que causará desgarros masivos en arterias, músculos y nervios circundantes.',
    },
    {
        id: 242,
        question: '¿Qué se debe hacer si un herido en un choque presenta un objeto metálico o trozo de vidrio profundamente incrustado en el cuerpo?',
        options: [
            'Extraer el objeto rápidamente con unos alicates',
            'No retirar el objeto; fijarlo o estabilizarlo en su posición con vendajes para que no se mueva y esperar auxilio médico',
            'Girar el objeto para ver qué tan profundo entró',
            'Lavar la herida echando jabón en polvo directamente'
        ],
        correctIndex: 1,
        explanation: 'El objeto incrustado puede estar haciendo un efecto de "tapón" que evita una hemorragia masiva interna. Removerlo fuera de un quirófano puede provocar un desangrado fatal.',
    },
    {
        id: 243,
        question: 'Al colocar los triángulos de seguridad para proteger la escena de un accidente en una carretera recta de alta velocidad, ¿a qué distancia mínima trasera se deben situar?',
        options: ['A 5 metros', 'A 15 metros', 'A un mínimo de 90 a 100 metros para dar tiempo real de frenado a los camiones pesados', 'Justo debajo de la mufla del auto'],
        correctIndex: 2,
        explanation: 'En vías rápidas, un auto que viaja a 90 km/h avanza muchos metros por segundo; colocar el triángulo a gran distancia salva vidas al alertar con antelación real.',
    },
    {
        id: 244,
        question: '¿Qué indica el Manual de Conductor sobre el riesgo de insolación o hipotermia en los heridos tirados en el pavimento?',
        options: [
            'Que el clima no afecta los cuadros médicos',
            'Que se debe proteger a la víctima del sol extremo o del frío/lluvia cubriéndola con una manta limpia para evitar que pierda temperatura corporal',
            'Que es bueno mojar a la persona con agua helada',
            'Dejarla expuesta para que se ventile'
        ],
        correctIndex: 1,
        explanation: 'El cuerpo en shock pierde la capacidad de regular la temperatura de manera adecuada; la hipotermia agrava los trastornos de coagulación del paciente.',
    },
    {
        id: 245,
        question: '¿Qué se debe verificar constantemente en un herido grave mientras llega la ambulancia?',
        options: [
            'El estado de su cuenta bancaria',
            'Si mantiene la respiración activa, si recupera o pierde el conocimiento y si aumentan los sangrados',
            'La marca de los zapatos que calza',
            'Si recuerda el número de placa de su auto'
        ],
        correctIndex: 1,
        explanation: 'El estado de un paciente politraumatizado puede deteriorarse en minutos. El monitoreo continuo permite detectar si entra en paro cardiorrespiratorio.',
    },
    {
        id: 246,
        question: '¿Cuál es el número de teléfono único y oficial en Costa Rica para coordinar la respuesta médica, policial y de bomberos ante un accidente vial?',
        options: ['El 118', 'El 911', 'El 123', 'El 2222-2222'],
        correctIndex: 1,
        explanation: 'El sistema 911 centraliza todas las llamadas de emergencia del país, derivando la alerta de inmediato a la Cruz Roja, Bomberos o Tránsito.',
    },
    {
        id: 247,
        question: '¿Qué tipo de vendaje se utiliza para inmovilizar un brazo lesionado o con sospecha de fractura de clavícula apoyándolo contra el pecho?',
        options: ['Un vendaje circular compresivo apretado', 'Un cabestrillo (utilizando un pañuelo triangular o tela)', 'Un vendaje elástico cruzado en las piernas', 'Amarrar el brazo con cinta plástica adhesiva'],
        correctIndex: 1,
        explanation: 'El cabestrillo descansa el peso del miembro superior afectado reduciendo el dolor y previniendo movimientos dañinos en articulaciones fracturadas.',
    },
    {
        id: 248,
        question: 'Si una víctima inconsciente sufre un sangrado leve por la nariz o los oídos tras un fuerte impacto en la cabeza, ¿qué se debe sospechar?',
        options: [
            'Una alergia común al polvo del camino',
            'Un trauma craneoencefálico severo (fractura de la base del cráneo); no se debe bloquear la salida de esa sangre',
            'Que tiene la presión baja únicamente',
            'Un resfriado común repentino'
        ],
        correctIndex: 1,
        explanation: 'La salida de líquido cefalorraquídeo o sangre por oídos/nariz indica lesiones internas en el cráneo. Taponar dichos orificios eleva peligrosamente la presión intracraneal.',
    },
    {
        id: 249,
        question: '¿Qué actitud debe tomar un conductor si presencia un accidente menor en carretera donde ya hay personal de rescate laborando?',
        options: [
            'Detenerse en media calle a tomar fotos y videos con el celular',
            'Disminuir la marcha al mínimo para mirar con detalle obstruyendo el paso',
            'Continuar su marcha con precaución, despejando la vía para no generar un taponamiento vehicular o un segundo choque',
            'Tocar el claxon de forma insistente para que se quiten de la vía'
        ],
        correctIndex: 2,
        explanation: 'El "efecto mirón" provoca colisiones por alcance traseras y frena el flujo de vehículos de emergencia. Si la escena está atendida, se debe circular fluidamente.',
    },
    {
        id: 250,
        question: '¿Qué significado técnico tiene la etapa de "Socorrer" en el protocolo PAS?',
        options: [
            'Efectuar reparaciones mecánicas rápidas a los autos',
            'Brindar los cuidados iniciales de soporte básico indispensables a las víctimas según los conocimientos que se posean, sin empeorar su condición',
            'Buscar testigos para iniciar demandas judiciales',
            'Retirar los escombros de la calle'
        ],
        correctIndex: 1,
        explanation: 'Socorrer es la última fase. Implica asistir a los lesionados aplicando técnicas básicas comprobadas, manteniendo como premisa "no hacer más daño".',
    },
    {
        id: 251,
        question: '¿Cuál es el beneficio directo del concepto de "Conducción Eficiente o Ecológica"?',
        options: [
            'Permite duplicar la velocidad máxima del automóvil',
            'Reduce de un 10% a un 25% el consumo de combustible, disminuye la emisión de gases contaminantes y aminora los costos de mantenimiento mecánico',
            'Evita que el auto requiera la revisión técnica vehicular (RTV)',
            'Permite circular por los carriles exclusivos de autobuses urbanos'
        ],
        correctIndex: 1,
        explanation: 'La conducción eficiente aplica técnicas inteligentes de aceleración, frenado y selección de marchas para optimizar el rendimiento energético del automotor.',
    },
    {
        id: 252,
        question: '¿Qué acción al arrancar un motor de inyección electrónica moderno contradice las normas de la conducción eficiente?',
        options: [
            'Iniciar la marcha de inmediato suavemente sin acelerar el auto en frío',
            'Pisar el pedal del acelerador a fondo antes y durante el encendido del motor',
            'Mantener apagados los sistemas eléctricos innecesarios al arrancar',
            'Verificar que la palanca se encuentre en neutro o parking'
        ],
        correctIndex: 1,
        explanation: 'Los motores modernos regulan la mezcla de combustible automáticamente mediante la computadora. Dar "acelerones" en vacío gasta gasolina inútilmente y raya los cilindros secos.',
    },
    {
        id: 253,
        question: 'Para mantener una conducción eficiente en un vehículo manual, ¿en qué rango general de revoluciones por minuto (RPM) se aconseja realizar los cambios de marcha en motores de gasolina?',
        options: ['Entre 1000 y 1500 RPM', 'Entre 2000 y 2500 RPM', 'A más de 4000 RPM', 'Justo antes de que el motor se apague'],
        correctIndex: 1,
        explanation: 'Realizar los cambios entre las 2000 y 2500 RPM mantiene al motor de gasolina trabajando en su rango de torque óptimo sin forzar el consumo de combustible.',
    },
    {
        id: 254,
        question: '¿Qué sucede con el consumo de combustible si un conductor transita en una marcha baja (como segunda velocidad) a altas revoluciones de forma sostenida?',
        options: [
            'El combustible rinde más debido a la presión interna',
            'El consumo de gasolina se incrementa drásticamente y el motor se sobrecalienta de forma innecesaria',
            'El alternador genera el doble de energía reduciendo el gasto',
            'Se limpian los inyectores automáticamente'
        ],
        correctIndex: 1,
        explanation: 'Manejar en marchas cortas revolucionando el motor de forma innecesaria es uno de los hábitos que más desperdicia carburante en entornos urbanos.',
    },
    {
        id: 255,
        question: '¿Cómo afecta mantener las ventanas completamente abiertas al circular por autopista a altas velocidades (más de 80 km/h) el rendimiento del auto?',
        options: [
            'Mejora la velocidad al enfriar la cabina',
            'Aumenta la resistencia aerodinámica del vehículo, obligando al motor a esforzarse más y elevando el consumo de combustible',
            'Reduce el gasto de gasolina al apagar el aire acondicionado',
            'No genera ningún impacto medible'
        ],
        correctIndex: 1,
        explanation: 'A altas velocidades, las ventanas abiertas crean un efecto de "paracaídas" (turbulencia interna). Es más eficiente cerrar las ventanas y utilizar la ventilación o el aire acondicionado moderado.',
    },
    {
        id: 256,
        question: '¿Qué técnica de anticipación visual favorece directamente la conducción eficiente?',
        options: [
            'Mirar únicamente el parachoques del auto de adelante',
            'Mirar a lo lejos en la carretera (anticipar semáforos en rojo o presas) para dejar rodar el auto por inercia sin acelerar ni frenar bruscamente',
            'Circular pegado a los camiones para cortar el viento',
            'Acelerar a fondo al ver que un semáforo cambia a amarillo'
        ],
        correctIndex: 1,
        explanation: 'Prever las condiciones del tránsito permite soltar el acelerador a tiempo y aprovechar la energía cinética del auto, evitando frenazos que obliguen a arrancar desde cero.',
    },
    {
        id: 257,
        question: '¿Cuál es el impacto ecológico directo de un sistema de escape con el convertidor catalítico (catalizador) suprimido o dañado?',
        options: [
            'El auto emite mayor cantidad de oxígeno limpio',
            'Se multiplican las emisiones de gases altamente tóxicos (monóxido de carbono y óxidos de nitrógeno) hacia la atmósfera',
            'El motor reduce su ruido un 50%',
            'Aumenta el octanaje del diésel automáticamente'
        ],
        correctIndex: 1,
        explanation: 'El catalizador es un dispositivo de control de emisiones crítico. Circular sin él provoca que el vehículo sea altamente contaminante e inhabilita la aprobación de RTV.',
    },
    {
        id: 258,
        question: '¿Qué indica el Manual del Conductor sobre el uso del aire acondicionado respecto al consumo de combustible?',
        options: [
            'El aire acondicionado genera su propia energía y no gasta combustible',
            'El compresor del aire acondicionado es accionado por el motor, por lo que su uso continuo eleva el consumo de combustible entre un 5% y un 20%',
            'Usar el aire acondicionado ahorra aceite de motor',
            'Se debe encender únicamente en bajadas pronunciadas'
        ],
        correctIndex: 1,
        explanation: 'Dado que el aire acondicionado absorbe potencia mecánica del motor, se recomienda utilizarlo de manera racional, especialmente en cuestas o tráfico pesado.',
    },
    {
        id: 259,
        question: '¿Qué práctica de mantenimiento preventivo de los neumáticos incide directamente en la reducción de las emisiones contaminantes?',
        options: [
            'Pintar los aros con pintura anticorrosiva',
            'Mantener las llantas infladas a la presión correcta recomendada por el fabricante para disminuir la resistencia a la rodadura',
            'Lavar las llantas con detergentes biodegradables amargos',
            'Utilizar neumáticos con el dibujo totalmente liso'
        ],
        correctIndex: 1,
        explanation: 'Una llanta desinflada genera mayor fricción y arrastre contra el suelo, lo que obliga al motor a consumir más combustible y, por ende, a contaminar más.',
    },
    {
        id: 260,
        question: 'Al acercarse a una rotonda de dos carriles, si el conductor planea tomar la **primera salida (girar a la derecha)** o continuar **directo (segunda salida)**, ¿en qué carril debe colocarse obligatoriamente antes de ingresar?',
        options: ['En el carril izquierdo de aproximación', 'En el carril derecho de aproximación', 'Es indistinto en cualquier carril', 'Sobre el espaldón derecho'],
        correctIndex: 1,
        explanation: 'Para realizar giros a la derecha o seguir recto en una rotonda estándar, la normativa de tránsito exige ingresar colocándose en el carril derecho exterior.',
    },
    {
        id: 261,
        question: 'Si va a ingresar a una rotonda y desea tomar la **tercera salida (giro a la izquierda)** o realizar un **giro completo en U**, ¿qué carril de acceso debe elegir de forma obligatoria?',
        options: ['El carril derecho exterior', 'El carril izquierdo interior de aproximación', 'El carril central reversible', 'Se debe entrar montado sobre la acera central'],
        correctIndex: 1,
        explanation: 'Los giros largos dentro de la rotonda (terceras salidas o vueltas en U) requieren colocarse en el carril izquierdo para no cortar la trayectoria de los que van directo.',
    },
    {
        id: 262,
        question: '¿Qué luz direccional se debe activar obligatoriamente **justo antes de salir** de una rotonda para avisar a los autos que esperan ingresar?',
        options: ['La luz direccional izquierda', 'La luz direccional derecha', 'Las luces intermitentes de emergencia simultáneas', 'Ninguna, dentro de la rotonda no se usan direccionales'],
        correctIndex: 1,
        explanation: 'Señalizar con la luz direccional derecha momentos antes de tomar la salida elegida es obligatorio para indicar a los demás usuarios que abandonamos el anillo vial.',
    },
    {
        id: 263,
        question: '¿Está permitido adelantar a otros vehículos o realizar cambios de carril bruscos dentro del anillo de una rotonda?',
        options: [
            'Sí, si el carril de al lado está desocupado por 5 metros',
            'No, está prohibido adelantar y cambiar de carril dentro de la rotonda; se debe mantener la trayectoria elegida de forma fija',
            'Sí, tocando la bocina previamente',
            'Solo está permitido a motocicletas y taxis libres'
        ],
        correctIndex: 1,
        explanation: 'Las rotondas son zonas de maniobra confinada. Cambiar de carril internamente corta el flujo lateral y es una de las mayores causas de colisiones de costado en el país.',
    },
    {
        id: 264,
        question: '¿Qué se debe hacer si un conductor por error toma un carril equivocado dentro de la rotonda y se pasa de la salida que necesitaba?',
        options: [
            'Frenar en seco y dar marcha atrás (reversa) en la rotonda',
            'Dar una vuelta completa adicional al anillo de la rotonda con calma para incorporarse de forma correcta al carril de salida',
            'Girar bruscamente cortando los carriles exteriores',
            'Detener el auto y bajarse a pedir indicaciones'
        ],
        correctIndex: 1,
        explanation: 'La gran ventaja geométrica de la rotonda es que permite dar vueltas continuas. Si pierde su salida, simplemente complete un giro adicional de forma segura.',
    },
    {
        id: 265,
        question: '¿Cuál es la velocidad máxima recomendada por el diseño vial al circular dentro del anillo de una rotonda en Costa Rica si no hay otra rotulación?',
        options: ['60 km/h', '30 km/h o 40 km/h según el tamaño del dispositivo', '80 km/h', '20 km/h fijos en toda rotonda'],
        correctIndex: 1,
        explanation: 'Las rotondas están diseñadas como moderadores de velocidad urbana; se debe circular a baja velocidad (usualmente 30-40 km/h) para controlar las fuerzas centrífugas.',
    },
    {
        id: 266,
        question: '¿Qué elemento aerodinámico o accesorio instalado en el techo del vehículo perjudica severamente la conducción eficiente?',
        options: [
            'Las barras portaequipajes o canastas de techo vacías (generan fricción innecesaria con el viento)',
            'Las luces halógenas de fábrica bajo el parachoques',
            'El sistema de sensores de estacionamiento traseros',
            'Las escobillas del limpiaparabrisas'
        ],
        correctIndex: 0,
        explanation: 'Llevar estructuras vacías en el techo altera la aerodinámica original del auto, provocando que gaste hasta un 10% más de combustible en autopista de forma inútil.',
    },
    {
        id: 267,
        question: '¿Cuál es el peligro ambiental derivado de desechar el aceite quemado del motor directamente en el suelo o alcantarillado público?',
        options: [
            'El aceite se evapora creando nubes tóxicas ácidas',
            'Un solo litro de aceite usado de motor puede contaminar hasta un millón de litros de agua potable, destruyendo ecosistemas fluviales',
            'El aceite corroe las tuberías de plástico de las casas',
            'No contamina si el aceite era de base sintética'
        ],
        correctIndex: 1,
        explanation: 'El aceite de motor usado contiene metales pesados y compuestos altamente cancerígenos y estables. Debe reciclarse exclusivamente en centros autorizados.',
    },
    {
        id: 268,
        question: '¿Qué se conoce en conducción eficiente como "frenar con el motor" o compresión?',
        options: [
            'Apagar el interruptor de encendido del auto en marcha',
            'Soltar el acelerador manteniendo la marcha engranada, permitiendo que la resistencia mecánica interna del motor reduzca la velocidad del vehículo',
            'Colocar la palanca de cambios en posición de reversa',
            'Pisar el pedal de embrague a fondo de forma continua'
        ],
        correctIndex: 1,
        explanation: 'Aprovechar la compresión corta la inyección de combustible en los autos modernos (gasto cero) y ahorra desgaste físico en las pastillas de freno.',
    },
    {
        id: 269,
        question: '¿Qué indica el Manual del Conductor sobre mantener el motor encendido en ralentí (auto detenido) por periodos prolongados (más de un minuto)?',
        options: [
            'Que ahorra batería y limpia las bujías',
            'Se aconseja apagar el motor (por ejemplo en presas totales o esperas), ya que mantenerlo encendido inmóvil consume combustible y genera contaminación estéril',
            'Que el motor consume menos si está detenido encendido que si se vuelve a arrancar',
            'Que es obligatorio para mantener la presión de las llantas'
        ],
        correctIndex: 1,
        explanation: 'Los arranques modernos no gastan combustible extra. Mantener el carro encendido estacionado desperdicia recursos y satura el aire local de monóxido de carbono.',
    },
    {
        id: 270,
        question: '¿Cuál es la función del filtro de aire del motor y cómo afecta la conducción eficiente si está completamente obstruido por suciedad?',
        options: [
            'Limpia el aire de la cabina; si está sucio daña el aire acondicionado',
            'Filtra las impurezas del aire que ingresa a los cilindros; si está obstruido altera la mezcla, reduce la potencia del motor y eleva drásticamente el consumo de combustible',
            'Limpia los gases de la mufla antes del catalizador',
            'Inyecta oxígeno líquido a los frenos'
        ],
        correctIndex: 1,
        explanation: 'Un filtro obstruido ahoga al motor. Al no recibir suficiente oxígeno, la computadora compensa inyectando más gasolina, aumentando el consumo y el humo negro.',
    },
    {
        id: 271,
        question: 'Al circular dentro de una rotonda de tres carriles, si un vehículo viaja por el carril central, ¿qué cuidado especial debe tener al aproximarse a su salida?',
        options: [
            'Tiene prioridad y puede salir directamente cortando el carril exterior derecho',
            'Debe incorporarse con anticipación segura al carril exterior derecho o ceder el paso si el carril lateral está ocupado antes de efectuar el viraje de salida',
            'Debe tocar la bocina y acelerar al máximo',
            'Está prohibido salir desde el carril central en cualquier rotonda'
        ],
        correctIndex: 1,
        explanation: 'Quien viaja por los carriles internos de una rotonda debe maniobrar con cuidado y ceder el paso a quienes circulan por el carril exterior antes de cortar su carril para salir.',
    },
    {
        id: 272,
        question: '¿Qué tipo de contaminante vehicular se genera de forma masiva por el desgaste físico normal de las balatas de freno y las llantas contra el pavimento?',
        options: ['Gases de efecto invernadero pesados', 'Material particulado sólido microscópico (polvo contaminante ambiental)', 'Radiación infrarroja térmica destructiva', 'Monóxido de carbono líquido'],
        correctIndex: 1,
        explanation: 'La fricción tritura el caucho y los compuestos de las pastillas creando partículas suspendidas microscópicas (PM10 y PM2.5) que afectan las vías respiratorias urbanas.',
    },
    {
        id: 273,
        question: '¿Cómo afecta la distribución incorrecta de la carga (llevar todo el peso en el maletero trasero o sobre el techo) la seguridad activa del automóvil?',
        options: [
            'Mejora el agarre de las ruedas directrices delanteras',
            'Altera el centro de gravedad, disminuye la estabilidad en curvas y reduce la adherencia de las llantas delanteras afectando la dirección y el frenado',
            'Evita que el auto sufra derrapes traseros',
            'Aumenta la potencia del motor de forma aerodinámica'
        ],
        correctIndex: 1,
        explanation: 'Equilibrar la carga resguarda el reparto de pesos simétrico en las suspensiones, garantizando que las ruedas directrices no pierdan fricción contra el suelo.',
    },
    {
        id: 274,
        question: '¿Qué estilo de conducción maximiza la vida útil de los componentes mecánicos de la transmisión y frenos del vehículo?',
        options: [
            'Un manejo defensivo, suave y progresivo, evitando aceleraciones violentas y frenadas de emergencia continuas',
            'Utilizar el freno de mano para detenerse en todos los semáforos',
            'Conducir siempre al límite de revoluciones permitido por el fabricante',
            'Cambiar de marchas de forma rápida sin pisar completo el pedal de embrague'
        ],
        correctIndex: 0,
        explanation: 'La conducción fluida minimiza los esfuerzos de cizalladura térmica y mecánica en embragues, cajas de cambio y balatas, extendiendo su durabilidad y reduciendo averías.',
    },
    {
        id: 275,
        question: '¿Qué se debe hacer si al intentar ingresar a una rotonda la visibilidad del carril izquierdo está obstruida por arbustos o estructuras?',
        options: [
            'Ingresar rápido sin frenar confiando en que no viene nadie',
            'Detenerse por completo en la línea de CEDA antes de ingresar para cerciorarse plenamente de que el anillo de la rotonda está libre',
            'Encender las luces altas y tocar la bocina continuamente mientras avanza',
            'Ingresar en reversa para proteger el frente del auto'
        ],
        correctIndex: 1,
        explanation: 'Si la visibilidad de la prioridad de paso está comprometida, el conductor debe tratar el CEDA como un PARE por seguridad elemental, deteniéndose a comprobar el flujo libre.',
    },
    {
        id: 276,
        question: '¿Cuál es el plazo de tiempo máximo permitido por la ley para impugnar (apelar) una boleta de citación o multa de tránsito con la que el conductor no esté de acuerdo?',
        options: ['5 días hábiles', '10 días hábiles', '30 días naturales', '3 meses de gracia'],
        correctIndex: 1,
        explanation: 'El infractor cuenta con un periodo estricto de 10 días hábiles contados a partir del día siguiente de recibir la multa para presentar su apelación formal ante el COSEVI.',
    },
    {
        id: 277,
        question: '¿Qué descuento económico ofrece la Ley de Tránsito si un conductor paga una multa de Categoría C, D o E dentro de los primeros 5 días hábiles posteriores a su imposición?',
        options: ['Un 10% de descuento', 'Un 15% de descuento', 'Un 30% de descuento', 'Un 50% de descuento'],
        correctIndex: 2,
        explanation: 'Las faltas menores o medias (Categorías C, D y E) disfrutan de un beneficio de pronto pago del 30% de reducción sobre el costo base de la multa si se cancela en los primeros 5 días hábiles.',
    },
    {
        id: 278,
        question: '¿Cuáles categorías de infracciones NO reciben ningún tipo de descuento económico por pronto pago debido a su gravedad extrema?',
        options: [
            'Las infracciones de Categoría D y E',
            'Las infracciones de Categoría A y B',
            'Únicamente las multas por estacionamiento indebido',
            'Todas las multas tienen descuento en Costa Rica'
        ],
        correctIndex: 1,
        explanation: 'Las faltas de Categoría A (6 puntos) y Categoría B (4 puntos) protegen conductas de altísimo riesgo vital, por lo que el legislador les negó el beneficio de descuento por pronto pago.',
    },
    {
        id: 279,
        question: 'Si un conductor acumula el tope de puntos permitido y sufre la **primera suspensión** de su licencia, ¿por cuánto tiempo queda inhabilitado legalmente para conducir?',
        options: ['Por 3 meses', 'Por 6 meses', 'Por 1 año', 'Por 2 años'],
        correctIndex: 1,
        explanation: 'La primera suspensión de la licencia por pérdida total del umbral de puntos acarrea un castigo administrativo de retiro de circulación por un plazo fijo de 6 meses.',
    },
    {
        id: 280,
        question: 'En caso de sufrir una **segunda suspensión consecutiva** por reincidir en la pérdida de puntos en su licencia de conducir, el plazo de inhabilitación se eleva a:',
        options: ['1 año', '2 años', '3 años', '5 años'],
        correctIndex: 0,
        explanation: 'La reincidencia se castiga de forma progresiva. Una segunda suspensión eleva el plazo de inhabilitación para conducir a un año completo.',
    },
    {
        id: 281,
        question: '¿Qué requisito obligatorio debe cumplir un conductor cuya licencia fue suspendida por puntos antes de poder solicitar la renovación o devolución de la misma?',
        options: [
            'Pagar únicamente el doble del costo del marchamo',
            'Aprobar un curso de sensibilización y reeducación vial (curso teórico de puntos) y cumplir el plazo de sanción',
            'Presentar una carta de recomendación de su trabajo',
            'Comprar un vehículo nuevo cero kilómetros'
        ],
        correctIndex: 1,
        explanation: 'Para recuperar el derecho a portar licencia tras una suspensión, se debe purgar el tiempo de castigo y ganar obligatoriamente el curso teórico especial dictado por el MOPT.',
    },
    {
        id: 282,
        question: '¿Qué tipo de infracción comete el conductor que circula transportando mascotas o animales sueltos en el regazo del conductor o de forma que interfiera con los controles del auto?',
        options: ['Categoría B', 'Categoría C', 'Categoría D', 'Categoría E'],
        correctIndex: 2,
        explanation: 'Llevar animales de forma que limiten los movimientos o la visibilidad del operario del auto constituye una falta de Categoría D.',
    },
    {
        id: 283,
        question: '¿Cuál es la vigencia máxima regular que se le otorga a una licencia de conducir particular o profesional si el conductor mantuvo un historial perfecto de **0 puntos** durante la vigencia anterior?',
        options: ['3 años', '4 años', '5 años', '6 años'],
        correctIndex: 3,
        explanation: 'El conductor ejemplar que mantenga su expediente limpio de puntos (0 puntos) recibe el beneficio máximo de renovación de su licencia por un lapso de 6 años.',
    },
    {
        id: 284,
        question: '¿Qué trámite o documento legal certifica anualmente que un vehículo automotor cuenta con las coberturas mínimas de responsabilidad civil ante accidentes de tránsito para poder circular?',
        options: [
            'La boleta de aprobación de RTV',
            'El Derecho de Circulación (conocido popularmente como Marchamo)',
            'La carta de compraventa firmada ante notario',
            'El título de propiedad del Registro Nacional'
        ],
        correctIndex: 1,
        explanation: 'El marchamo incluye el Seguro Obligatorio de Automóviles (SOA); portar su sticker y documento al día es requisito ineludible para transitar de forma lícita.',
    },
    {
        id: 285,
        question: '¿Qué tipo de sanción comete un conductor que se estacione obstruyendo una ciclovía debidamente demarcada por las autoridades viales?',
        options: ['Categoría B', 'Categoría C', 'Categoría D', 'Categoría E'],
        correctIndex: 1,
        explanation: 'La obstrucción de espacios exclusivos de movilidad alternativa o vulnerable como las ciclovías se penaliza bajo las multas de la Categoría C.',
    },
    {
        id: 286,
        question: '¿Cuál es la consecuencia legal inmediata si un Oficial de Tránsito sorprende a un conductor manejando un auto sin haber obtenido nunca una licencia de conducir (no acreditado)?',
        options: [
            'Se le impone una multa económica Categoría C y se procede a la inmovilización (retiro) del vehículo si no hay un conductor autorizado que lo retire',
            'Únicamente se le da una advertencia verbal',
            'Se le obliga a matricular el curso teórico ese mismo día',
            'Se le decomisa el teléfono celular'
        ],
        correctIndex: 0,
        explanation: 'Conducir sin estar acreditado ante el MOPT es una falta seria de Categoría C que faculta a las autoridades a retirar el automóvil de circulación física de forma preventiva.',
    },
    {
        id: 287,
        question: '¿Bajo qué categoría se sanciona al conductor que se niegue a ceder el paso a peatones en zonas de paso peatonal demarcadas con zebra?',
        options: ['Categoría B', 'Categoría C', 'Categoría D', 'Categoría E'],
        correctIndex: 1,
        explanation: 'Irrespetar la prioridad de paso peatonal expresa en pasos de zebra constituye una falta administrativa de Categoría C.',
    },
    {
        id: 288,
        question: '¿Qué indica la ley respecto a la colocación de objetos decorativos (luces de neón, calcomanías opacas extensas) en el parabrisas delantero o vidrios laterales delanteros?',
        options: [
            'Están permitidos si combinan con el color del auto',
            'Están totalmente prohibidos si reducen el campo de visión del conductor o alteran las condiciones de iluminación reglamentarias',
            'Solo se permiten a los vehículos de transporte de carga',
            'Están permitidos únicamente durante los fines de semana'
        ],
        correctIndex: 1,
        explanation: 'Mantener limpios los cristales del habitáculo garantiza la visibilidad de seguridad periférica; alterarlos se sanciona bajo infracciones de Categoría D.',
    },
    {
        id: 289,
        question: '¿Qué autoridad nacional autónoma es la encargada exclusiva de administrar los fondos de la seguridad vial y el registro de puntos de las licencias en Costa Rica?',
        options: ['El MOPT directamente', 'El COSEVI (Consejo de Seguridad Vial)', 'El Ministerio de Hacienda', 'La Aresep'],
        correctIndex: 1,
        explanation: 'El COSEVI es el órgano desconcentrado encargado del control de las infracciones, recaudación, campañas de seguridad vial y bases de datos de conductores.',
    },
    {
        id: 290,
        question: '¿Cuál de las siguientes maniobras se considera una infracción de Categoría C?',
        options: [
            'Adelantar en curvas de doble línea continua',
            'Conducir un vehículo articulado sin licencia B-4',
            'Conducir un vehículo que exceda los límites de emisiones contaminantes permitidos',
            'Irrespetar las indicaciones de prioridad de paso dadas por señales fijas o semáforos intermitentes'
        ],
        correctIndex: 2,
        explanation: 'Superar de forma leve o moderada las emisiones técnicas ambientales reguladas o circular sin dispositivos mecánicos limpios es una falta de Categoría C (o Categoría A si es adulteración grave).',
    },
    {
        id: 291,
        question: '¿Qué indica el Manual del Conductor sobre circular con un menor de edad como pasajero en una motocicleta si este es menor de 5 años?',
        options: [
            'Está permitido si lleva un casco del tamaño adecuado',
            'Está estrictamente prohibido por ley transportar en motocicletas a menores de 5 años por su vulnerabilidad física extrema',
            'Está permitido únicamente para viajes cortos de menos de 1 kilómetro',
            'Solo si viaja amarrado al conductor'
        ],
        correctIndex: 1,
        explanation: 'Transportar niños menores de 5 años en motocicletas o bicimotos es ilegal en Costa Rica debido al riesgo de lesiones fatales por caídas o impactos.',
    },
    {
        id: 292,
        question: '¿Bajo qué rango de velocidad por debajo del límite máximo establecido se considera que un conductor comete una infracción por "circular a velocidad anormalmente reducida" obstruyendo el tráfico?',
        options: [
            'Manejar a menos de 60 km/h en ciudad',
            'Circular por debajo de la velocidad mínima obligatoria señalizada en la vía sin justificación técnica o mecánica',
            'Circular a 40 km/h en zonas residenciales',
            'No existe sanción por ir despacio'
        ],
        correctIndex: 1,
        explanation: 'Manejar a velocidades extremadamente bajas sin causa justificada entorpece el tránsito provocando adelantamientos peligrosos de terceros, castigándose en la Categoría E.',
    },
    {
        id: 293,
        question: '¿Qué tipo de infracción comete un conductor que use la bocina (claxon) del vehículo de forma innecesaria para apresurar el tránsito frente a hospitales o iglesias?',
        options: ['Categoría B', 'Categoría C', 'Categoría D', 'Categoría E'],
        correctIndex: 3,
        explanation: 'El uso abusivo o injustificado de la bocina (contaminación sónica focalizada) en zonas hospitalarias o urbanas comunes es una falta leve de Categoría E.',
    },
    {
        id: 294,
        question: '¿Qué documento legal es indispensable portar para justificar de forma provisional la circulación de un vehículo que acaba de ser inscrito en el Registro Nacional y aún no cuenta con las placas metálicas físicas?',
        options: [
            'La factura de compra de la agencia de autos',
            'El permiso temporal de circulación con placas provisionales (cartones oficiales vigentes) otorgado por el Registro o el MOPT',
            'Una nota firmada por el conductor',
            'El contrato de seguro particular del auto'
        ],
        correctIndex: 1,
        explanation: 'Transitar sin placas físicas o sin los cartones de autorización temporal vigentes faculta al oficial a retirar el vehículo de circulación bajo la Categoría B.',
    },
    {
        id: 295,
        question: '¿Cuál es la consecuencia directa en puntos si un conductor acumula de forma simultánea dos infracciones graves de Categoría B (4 puntos cada una) en un mismo día?',
        options: ['Acumula un total de 4 puntos únicamente', 'Acumula un total de 8 puntos en su expediente vial', 'Se borran los puntos por ocurrir el mismo día', 'Pierde la licencia por 10 años'],
        correctIndex: 1,
        explanation: 'Los puntos por infracciones cometidas son completamente acumulativos en el expediente personal del conductor, sumándose de manera íntegra independientemente del lapso de tiempo.',
    },
    {
        id: 296,
        question: '¿Qué tipo de señalización vial vertical consiste en paneles electrónicos luminosos dinámicos que cambian de mensaje según las alertas del tráfico en tiempo real?',
        options: ['Señales Reglamentarias Fijas', 'Señales de Mensaje Variable (SMV)', 'Señales de Información de Destino de Madera', 'Señales de Obras Pasivas'],
        correctIndex: 1,
        explanation: 'Las Señales de Mensaje Variable (SMV) aportan información dinámica e inmediata sobre accidentes adelante, desvíos climáticos o velocidades reguladas temporalmente.',
    },
    {
        id: 297,
        question: '¿Bajo qué categoría se sanciona a un conductor de transporte público (autobús o taxi) que preste el servicio de forma descortés o maltrate de palabra a los usuarios?',
        options: ['Categoría B', 'Categoría C', 'Categoría D', 'Categoría E'],
        correctIndex: 3,
        explanation: 'Las conductas asociadas a faltas menores de cortesía o regulaciones de atención en el servicio público de transporte se encuadran en la Categoría E.',
    },
    {
        id: 298,
        question: '¿Cuál es el margen de tolerancia en kilómetros por hora que permite la ley antes de sancionar económicamente un exceso de velocidad en tramos controlados por radares automáticos o cámaras?',
        options: ['No hay margen, a 1 km/h de exceso se multa', 'Hay una tolerancia técnica reglamentaria de velocidad según el diseño del dispositivo', 'Se permiten hasta 40 km/h de exceso libres', 'Depende de la marca del automóvil'],
        correctIndex: 1,
        explanation: 'Los sistemas de control automatizado operan bajo márgenes técnicos de calibración estipulados para absorber pequeñas variaciones de velocímetros.',
    },
    {
        id: 299,
        question: '¿Qué componente del motor se encarga de monitorear e indicar visualmente en el tablero de instrumentos el número de revoluciones por minuto (RPM) a las que gira el cigüeñal?',
        options: ['El velocímetro', 'El tacómetro', 'El odómetro', 'El termómetro de agua'],
        correctIndex: 1,
        explanation: 'El tacómetro mide las revoluciones del motor (RPM); vigilarlo es crucial para aplicar técnicas de conducción eficiente cambiando de marcha a las revoluciones correctas.',
    },
    {
        id: 300,
        question: '¿Cuál de los siguientes supuestos exime totalmente a un conductor de la acumulación de puntos tras cometer una infracción vial en Costa Rica?',
        options: [
            'Haber pagado la multa en las primeras 2 horas',
            'Que la infracción cometida pertenezca a las Categorías C, D o E (estas categorías no restan ni acumulan puntos en la licencia, solo conllevan multa económica)',
            'Tener más de 10 años de experiencia manejando',
            'Que el vehículo sea de un modelo antiguo'
        ],
        correctIndex: 1,
        explanation: 'En la Ley de Tránsito costarricense, la acumulación de puntos en la licencia se aplica únicamente a las faltas gravísimas de la Categoría A (6 puntos) y Categoría B (4 puntos). Las Categorías C, D y E son de sanción estrictamente económica.',
    }
];