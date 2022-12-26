import React, { useEffect, useState } from 'react';

export const TicTacToe = () => {
  const [board, setBoard] = useState<string[]>(['','','','','','','','',''])
  const [turnIsX, setTurnIsX] = useState(true)
  const [gameDone, setGameDone] = useState(false)

  const changeState = (index:number) => {
    if(!gameDone){
      let newBoard = [...board]
      if(turnIsX){
        newBoard[index] = 'X'
        setTurnIsX(false)
      }  
      else{
        newBoard[index] = 'O'
        setTurnIsX(true)
      } 
      setBoard(newBoard)
    }
  }

  useEffect(() => {
    checkWinner()
  },[board])

  const checkWinner = () => {
    if(checkHorizontal()) setGameDone(true)
    if(checkVertical()) setGameDone(true)
    if(checkDiagonal()) setGameDone(true)
  }

  const checkHorizontal = () => {
    for(let i = 0;i<board.length;i+=3){
      if(board[i]===board[i+1] && board[i]!==''){
        if(board[i]===board[i+2]){
          return true
        }
      }
    }
    return false
  }

  const checkVertical = () => {
    for(let i = 0;i<3;i++){
      if(board[i]===board[i+3] && board[i]!==''){
        if(board[i]===board[i+6]){
          return true
        }
      }
    }
    return false
  }

  const checkDiagonal = () => {
    if(board[0]===board[4] && board[0]!==''){
      if(board[0]===board[8]){
        return true
      }
    }
    if(board[2]===board[4] && board[2]!==''){
      if(board[2]===board[6]){
        return true
      }
    }
    return false
  }

  return(
    <React.Fragment>
      <div>
        <div style={{display:"inline-grid",gridTemplateColumns:"auto auto auto"}}>
          {board.map((field,index) => (
            <div style={{borderWidth:"1px", borderStyle:"solid", borderColor:"black", width:"50px", height:"50px"}} onClick={() => changeState(index)}>{field}</div>
          ))}
        </div>
        {gameDone ? turnIsX ? <p>O WINS!</p> : <p>X WINS!</p> : <p></p>}
      </div>
      
    </React.Fragment>
  )
}