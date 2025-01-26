import { useState } from 'react'
import confetti from "canvas-confetti"
import { Square } from './components/square'
import { TURNS } from './constants'
import { checkWinnerFrom, checkEndGame } from './logic/board'
import { WinnerModal } from './components/winnerModal'
import './App.css'



function App() {
  const [board, setBoard] = useState(
    Array(9).fill(null)
  )

  const [turn, setTurn] = useState(TURNS.X)
// si es null es que no hay ganador, si es false es empate
  
const [winner, setWinner] = useState(null)



const resetGame = () => {
  setBoard(Array(9).fill(null))
  setTurn(TURNS.X)
  setWinner(null)
}



const updateBoard = (index) => {

    // no actualizamos esta posición si ya tiene algo
    if(board[index] || winner) return

    // actualizar el tablero
    const newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard)
    // cambiar de turno 
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
    setTurn(newTurn)
    // revisar si hay ganador
    const newWinner = checkWinnerFrom(newBoard)
    if(newWinner) {
      confetti()
      setWinner(newWinner)
    } else if (checkEndGame(newBoard)) {
      setWinner(false) //Empate
    }
  }

  return (
    
    <main className='board'>
      <h1>Tic Tac Toe</h1>
      <button onClick={resetGame}>Empezar de Nuevo</button>

      <section className='game'>
        {
          board.map((square, index) => {
            return(
              <Square key={index} index={index} updateBoard={updateBoard}>
                {square}
              </Square>
            )
          })
        }
      </section>

      <section className='turn'>
        <Square isSelected={turn === TURNS.X }>{TURNS.X}</Square>
        <Square isSelected={turn === TURNS.O }>{TURNS.O}</Square>
      </section>
      <WinnerModal resetGame={resetGame} winner={winner}/>
    </main>
  )
}

export default App
/**
 - Hacer constante para los turnos 
 - Arreglo de 9 posiciones y con fill
 - Main con la clase board
 - Section con la clase game
 */