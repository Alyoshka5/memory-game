interface CardProps {
    cardObject: cardObject
}

interface cardObject {
    title: string,
    imgUrl: string
}

interface CardTableProps {
    setCurrentScore(currentScore: number): void,
    setHighScore(highScore: number): void
}

interface ScoreBoardProps {
    currentScore: number,
    highScore: number,
}

export type { CardProps, ScoreBoardProps, CardTableProps }