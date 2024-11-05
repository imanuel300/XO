import React from 'react';
import { Board } from './components/Board/Board';
import { GameStatus } from './components/GameStatus/GameStatus';
import { useGame } from './hooks/useGame';
import './styles/global.css';

const App = () => {
  const { board, currentPlayer, status, makeMove, resetGame } = useGame();

  return (
    <div className="app">
      <h1>משחק איקס עיגול</h1>
      <GameStatus 
        currentPlayer={currentPlayer}
        status={status}
        onReset={resetGame}
      />
      <Board 
        board={board}
        onCellClick={makeMove}
      />
    </div>
  );
};

export default App; 






