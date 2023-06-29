import { ScoreBoardProps } from '../types';
import '../styles/ScoreBoard.css';

export default function ScoreBoard({ currentScore, highScore}: ScoreBoardProps) {

    return (
        <div className="score-board">
            <div>Current Score: {currentScore}</div>
            <div>High Score: {highScore}</div>
        </div>
    );
}