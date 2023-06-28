import { ScoreBoardProps } from '../types';

export default function ScoreBoard({ currentScore, highScore}: ScoreBoardProps) {

    return (
        <div className="score-board">
            <div>Current Score: {currentScore}</div>
            <div>High Score: {highScore}</div>
        </div>
    );
}