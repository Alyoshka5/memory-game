import { useState } from 'react';
import './App.css';
import CardTable from './components/CardTable';
import ScoreBoard from './components/ScoreBoard';

function App() {
  const [currentScore, setCurrentScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  return (
    <div className="App">
      <ScoreBoard 
        currentScore={currentScore}  
        highScore={highScore} 
      />
      <CardTable 
        currentScore={currentScore} setCurrentScore={setCurrentScore}
        highScore={highScore} setHighScore={setHighScore}
      />
    </div>
  );
}

export default App;
