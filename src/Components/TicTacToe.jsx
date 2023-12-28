import './TicTacToe.css';
import circle from './Assets/tictactoe_o.png';
import cross from './Assets/tictactoe_x.png';
import { useEffect, useState, useRef } from 'react';

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
    const box1 = useRef(null); 
    const box2 = useRef(null); 
    const box3 = useRef(null); 
    const box4 = useRef(null); 
    const box5 = useRef(null); 
    const box6 = useRef(null); 
    const box7 = useRef(null); 
    const box8 = useRef(null); 
    const box9 = useRef(null); 
    const box_array = [box1, box2, box3, box4, box5, box6, box7, box8, box9]; 

    const handleBoxClick = (e, index) => {
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
            e.target.innerHTML = `<img src='${cross}'>`;
        } else {
            titleRef.current.innerHTML = "it's X's turn now";
            e.target.innerHTML = `<img src='${circle}'>`;
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
        box_array.map((box) => {
            box.current.innerHTML = ""; 
        })
    }

  return (
    <div className='container'>
        <h1 className='title'> Tic Tac Toe </h1>
        <p className='congrats-msg' ref={titleRef}> make your move! </p>
        <div className="board">
            <div className="row1">
                <div className="boxes" ref={box1} onClick={(e) => {handleBoxClick(e, 0)}}>  </div>
                <div className="boxes" ref={box2} onClick={(e) => {handleBoxClick(e, 1)}}>  </div>
                <div className="boxes" ref={box3} onClick={(e) => {handleBoxClick(e, 2)}}>  </div>
            </div>
            <div className="row2">
                <div className="boxes" ref={box4} onClick={(e) => {handleBoxClick(e, 3)}}>  </div>
                <div className="boxes" ref={box5} onClick={(e) => {handleBoxClick(e, 4)}}>  </div>
                <div className="boxes" ref={box6} onClick={(e) => {handleBoxClick(e, 5)}}>  </div>
            </div>
            <div className="row3">
                <div className="boxes" ref={box7} onClick={(e) => {handleBoxClick(e, 6)}}>  </div>
                <div className="boxes" ref={box8} onClick={(e) => {handleBoxClick(e, 7)}}>  </div>
                <div className="boxes" ref={box9} onClick={(e) => {handleBoxClick(e, 8)}}>  </div>
            </div>
        </div>
        <button className="reset-btn" onClick={resetBoard}> Reset </button>
    </div>
  );
}

export default TicTacToe;
