import './Box.css';
import circle from './Assets/tictactoe_o.png';
import cross from './Assets/tictactoe_x.png';

function Box({value, onClick}) {
    if (value === "x") {
        return (
            <div className='boxes' onClick={onClick}> 
                <img src={cross}/>
            </div>
          );
    } 
    
    if (value === "o") {
        return (
            <div className='boxes' onClick={onClick}> 
                <img src={circle}/>
            </div>
        );
    }
    
    return (
        <div className='boxes' onClick={onClick}> </div>
    );
}


export default Box;
