import './TicTacToe.css';
import circle from './Assets/tictactoe_o.png';
import cross from './Assets/tictactoe_x.png';
import { useEffect, useState, useRef } from 'react';

let data = ["", "", "", "", "", "", "", "", ""];

function TicTacToe() {
    const [count, setCount] = useState(0); 
    const [gameOver, setGameOver] = useState(false); 
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

    const toggle = (e, num) => {
        if (gameOver) {
            return 0; 
        }

        if (count % 2 === 0) {
            e.target.innerHTML = `<img src='${cross}'>`;
            data[num] = "x"; 
            setCount(count + 1); 
            titleRef.current.innerHTML = "it's O's turn now";
        } else {
            e.target.innerHTML = `<img src='${circle}'>`;
            data[num] = "o"; 
            setCount(count + 1); 
            titleRef.current.innerHTML = "it's X's turn now";
        }

        checkWin(); 
    }

    const checkWin = () => {
        if (data[0] != "" && data[0] == data[1] && data[1] == data[2]) {
            won(0, 1, 2); 
        } else if (data[3] !== "" && data[3] === data[4] && data[4] === data[5]) {
            won(3, 4, 5); 
        } else if (data[6] !== "" && data[6] === data[7] && data[7] === data[8]) {
            won(6, 7, 8);
        } else if (data[0] !== "" && data[0] === data[3] && data[3] === data[6]) {
            won(0, 3, 6); 
        } else if (data[1] !== "" && data[1] === data[4] && data[4] === data[7]) {
            won(1, 4, 7); 
        } else if (data[2] !== "" && data[2] === data[5] && data[5] === data[8]) {
            won(2, 5, 8); 
        } else if (data[0] !== "" && data[0] === data[4] && data[4] === data[8]) {
            won(0, 4, 8); 
        } else if (data[2] !== "" && data[2] === data[4] && data[4] === data[6]) {
            won(2, 4, 6); 
        } 
    }

    const won = (a, b, c) => {
        setGameOver(true); 

        if (data[a] === 'x') {
            titleRef.current.innerHTML = "Congrats X won this round!";
        } else {
            titleRef.current.innerHTML = "Congrats O won this round!";
        }
    }

    
    const resetBoard = () => {
        setGameOver(false); 
        data = ["", "", "", "", "", "", "", "", ""];
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
                <div className="boxes" ref={box1} onClick={(e) => {toggle(e, 0)}}>  </div>
                <div className="boxes" ref={box2} onClick={(e) => {toggle(e, 1)}}>  </div>
                <div className="boxes" ref={box3} onClick={(e) => {toggle(e, 2)}}>  </div>
            </div>
            <div className="row2">
                <div className="boxes" ref={box4} onClick={(e) => {toggle(e, 3)}}>  </div>
                <div className="boxes" ref={box5} onClick={(e) => {toggle(e, 4)}}>  </div>
                <div className="boxes" ref={box6} onClick={(e) => {toggle(e, 5)}}>  </div>
            </div>
            <div className="row3">
                <div className="boxes" ref={box7} onClick={(e) => {toggle(e, 6)}}>  </div>
                <div className="boxes" ref={box8} onClick={(e) => {toggle(e, 7)}}>  </div>
                <div className="boxes" ref={box9} onClick={(e) => {toggle(e, 8)}}>  </div>
            </div>
        </div>
        <button className="reset-btn" onClick={resetBoard}> Reset </button>
    </div>
  );
}

export default TicTacToe;
