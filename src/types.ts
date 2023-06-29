interface CardProps {
    cardObject: cardObject
}

interface cardObject {
    title: string,
    imgUrl: string
}

interface CardTableProps {
    currentScore: number,
    setCurrentScore(currentScore: (prevScore: number) => number): void,
    highScore: number,
    setHighScore(highScore: number): void
}

interface ScoreBoardProps {
    currentScore: number,
    highScore: number,
}

export type { CardProps, ScoreBoardProps, CardTableProps }