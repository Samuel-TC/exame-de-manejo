export interface ExamConfig {
    timePerQuestion: 10 | 20 | null
    showFeedback: boolean
    questionCount: 5 | 10
}

export const defaultConfig: ExamConfig = {
    timePerQuestion: null,
    showFeedback: true,
    questionCount: 10,
}
