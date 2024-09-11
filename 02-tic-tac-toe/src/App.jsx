import { useState } from "react"
import confetti from "canvas-confetti"
import { Square } from "./components/Square.jsx"
import { TURNS } from "./constants.js"
import { checkWinner, checkEndGame } from "./logic/board.js"
import { WinnerModal } from "./components/WinnerModal.jsx"





function App() {
  const [board, setBoard] = useState(() => {
    const boardFromStorage = window.localStorage.getItem("board")
    if (boardFromStorage) return JSON.parse(boardFromStorage)
    return Array(9).fill(null)})

  const [turn, setTurn] = useState(() => {
    const turnFromStorage = window.localStorage.getItem("turn")
    return turnFromStorage ?? TURNS.X})
  // null es que no hay ganador, false es que hay un empate
  const [winner, setWinner] = useState(null)

  

  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setTurn(TURNS.X)
    setWinner(null)

    window.localStorage.removeItem("board")
    window.localStorage.removeItem("turn")
  }



  const updateBoard = (index) => {
    // no actualizamos esta posicion si ya tiene algo
    if (board[index] || winner) return
    // actualiza el tablero
    const newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard)
    console.log(turn)
    console.log(index)
    // cambiar el turno
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
    setTurn(newTurn)
    // guardar partida
    window.localStorage.setItem('board', JSON.stringify(newBoard))
    window.localStorage.setItem('turn', newTurn)
    // revisar si hay ganador
   const newWinner = checkWinner(newBoard)
    if(newWinner){
      confetti()
      setWinner(newWinner)
    }  else if (checkEndGame(newBoard)){
      setWinner(false) // empate
    }
  }
  
  return(
    <main className="board">
      <button onClick={resetGame}>Reset</button>
      <h1>TIC TAC TOE</h1>
      <section className="game">
        {
          board.map((square, index) =>{
            return(
              <Square
              key={index}
              index={index}
              updateBoard={updateBoard}
              >
              {square}
             
              </Square>
            )
          })
        }
      </section>
      <section className="turn">
        <Square isSelected={turn === TURNS.X}>
          {TURNS.X}
        </Square>
        <Square isSelected={turn === TURNS.O}>
          {TURNS.O}
        </Square>
        <WinnerModal resetGame={resetGame} winner={winner}/>
    </section>       
  </main>) 
}

export default App
