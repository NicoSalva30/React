import { WINNER_COMBOS } from "../constants"

export const checkWinner = (boardToCheck) => {
    // revisamos todas las combinaciones ganadoras 
  for (const combo of WINNER_COMBOS){
      const [a,b,c] = combo
      if(
        boardToCheck[a] && // 0 x u o
        boardToCheck[a] === boardToCheck[b] &&
        boardToCheck[a] === boardToCheck[c]
      ){
        return boardToCheck[a]
      }
    }
    //si no hay ganador
    return null
  }

  export const checkEndGame = (newBoard) => {
    return newBoard.every((square) => square !== null)
  }