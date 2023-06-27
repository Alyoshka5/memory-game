import React from 'react';
import './App.css';
import CardTable from './components/CardTable';
import ScoreBoard from './components/ScoreBoard';

function App() {
  return (
    <div className="App">
      <ScoreBoard />
      <CardTable />
    </div>
  );
}

export default App;
