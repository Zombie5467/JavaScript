import { WINNER_COMBOS } from "../constants"

export const checkWinnerFrom = (boardToCheck) => {
    //revisamos todas las combinaciones ganadoras
    for (const combo of WINNER_COMBOS) {
      const [a,b,c] = combo
      if(
        boardToCheck[a] &&
        boardToCheck[a] === boardToCheck[b] &&
        boardToCheck[a] === boardToCheck[c]
      ) {
        return boardToCheck[a]
      }
    }
    //si no hay ganadores
    return null
  }

  export const checkEndGame = (newBoard) => {
    // Revisamos que no hay empate
    // ni espacios vacíos en el tablero
    return newBoard.every((square) => square !== null)
  }