import './TicTacToe.css';
import { useState, useRef } from 'react';
import Box from './Box'

const WIN_CONDITIONS = [
    [0, 1, 2], 
    [3, 4, 5], 
    [6, 7, 8],
    [0, 3, 6], 
    [1, 4, 7],
    [2, 5, 8], 
    [0, 4, 8],
    [2, 4, 6]
]

const emptyBoard = Array(9).fill(""); 

function TicTacToe() {
    const [count, setCount] = useState(0); 
    const [gameOver, setGameOver] = useState(false); 
    const [board, setBoard] = useState(emptyBoard); 
    const titleRef = useRef(null); 

    const handleBoxClick = (index) => {
        if (gameOver) {
            return 0; 
        }

        //update board
        const updatedBoard = board.map((value, i) => {
            if (i === index) {
                return count % 2 == 0 ? "x" : "o"; 
            } else {
                return value; 
            }
        })

        setBoard(updatedBoard);

        //update active player
        setCount(count + 1); 

        //update active player message and game board UI
        if (count % 2 == 0) {
            titleRef.current.innerHTML = "it's O's turn now";
        } else {
            titleRef.current.innerHTML = "it's X's turn now";
        }

        //check for win or stalemate
        if (!checkWin(updatedBoard) && count === 8) {
            titleRef.current.innerHTML = "Oops it's a draw...try again!";
                setGameOver(true); 
        }
        
    }

    //checks if there is a win and writes congrats message if a win is found
    const checkWin = (board) => {
        WIN_CONDITIONS.forEach((triplet) => {
            const [x, y, z] = triplet; 
            if (board[x] && board[x] === board[y] && board[y] === board[z]) {
                setGameOver(true); 

                if (board[x] === 'x') {
                    titleRef.current.innerHTML = "Congrats X won this round!";
                } else {
                    titleRef.current.innerHTML = "Congrats O won this round!";
                }

                return true; 
            }
        })

        return false; 
    }

    const resetBoard = () => {
        setGameOver(false); 
        setCount(0); 
        setBoard(emptyBoard);
        titleRef.current.innerHTML = "make your move!";
    }

  return (
    <div className='container'>
        <h1 className='title'> Tic Tac Toe </h1>
        <p className='msg' ref={titleRef}> make your move! </p>
        <div className="board">
            {board.map((value, index) => {
                return <Box value={value} onClick = {() => value === "" && handleBoxClick(index)} />;
            }) 
            }
        </div>
        <button className="reset-btn" onClick={resetBoard}> Reset </button>
    </div>
  );
}

export default TicTacToe;
