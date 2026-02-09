import { useState } from 'react'
import './App.css'
function App() {
  const [board, setBoard] = useState(Array(9).fill(null));

  const [isXNext, setIsXNext] = useState(true);

  const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],

    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],

    [0, 4, 8],
    [2, 4, 6],
  ];

  function getWinner(square) {
    for (let combination of winningCombinations) {
      const [a, b, c] = combination;
      if (square[a] &&
        square[a] === square[b] &&
        square[a] === square[c]
      ) {
        return square[a];
      }
    }
    return null;
  }

  function handleSquareClick(index) {
    if (board[index] || getWinner(board)) {
      return;
    }

    const newBoard = board.slice();
    newBoard[index] = isXNext ? 'X' : 'O';
    setBoard(newBoard);
    setIsXNext(!isXNext);
  }

  function getGameStatus() {
    const winner = getWinner(board);
    if (winner) {
      return `Winner: ${winner}`;
    } else if (board.every(square => square !== null)) {
      return "It's a Draw!";
    } else {
      return `Next player: ${isXNext ? 'X' : 'O'}`;
    }
  }

  function resetGame() {
    setBoard(Array(9).fill(null));
    setIsXNext(true);
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center p-4">
      <div className="w-full max-w-sm">
        <h1 className="text-4xl font-bold text-white mb-4 text-center drop-shadow-lg">
          Tic Tac Toe
        </h1>
        
        <div className={`text-center mb-4 py-2 rounded-lg transition-all duration-300 ${
          getWinner(board) 
            ? "text-xl font-bold text-green-400 bg-green-400/10" 
            : "text-base text-gray-300"
        }`}>
          {getGameStatus()}
        </div>

        <div className="grid grid-cols-3 gap-2 mb-4 p-3 bg-slate-800/50 rounded-xl backdrop-blur">
          {board.map((square, index) => (
            <button
              key={index}
              onClick={() => handleSquareClick(index)}
              className={`aspect-square w-full bg-slate-700/80 rounded-lg text-5xl font-bold
                border-2 border-slate-600 transition-all duration-150
                hover:bg-slate-600 hover:border-slate-500 hover:scale-105
                active:scale-95
                ${square === 'X' ? 'text-cyan-400' : 
                  square === 'O' ? 'text-rose-400' : 
                  'text-transparent'}`}
            >
              {square}
            </button>
          ))}
        </div>

        <button
          onClick={resetGame}
          className="w-full py-3 text-base font-semibold text-white 
          bg-gradient-to-r from-blue-600 to-purple-600
          rounded-lg hover:from-blue-700 hover:to-purple-700
          transition-all duration-150
          hover:scale-[1.02] active:scale-[0.98]"
        >
          NEW GAME
        </button>
      </div>
    </div >
  )
}

export default App
