import React, { useState } from 'react'
import "../Calci/calculator.css"
function Callci() {
    const [result, setResult]= useState("");
    const calculation =(e) =>
    {
        setResult(result.concat(e.target.name))
    }
    const clear= () =>
    {
        setResult("")
    }
    const backs= () =>
    {
        setResult(result.slice(0 ,result.length-1));
    }
    const equals= () =>
    {
       setResult(eval(result).toString());
    }
    return ( 
        <>
        <div id='display'>
            <form>
                <input type="text" value={result}></input>
            </form>
        <div className='buttons'>
            <button onClick={clear} id="clear">Clear</button>
            <button onClick={backs}>C</button>
            <button name='%'id='divide' onClick={calculation}>&divide;</button>
            <button name='7' id='seven' onClick={calculation}>7</button>
            <button name='8' id='eight' onClick={calculation}>8</button>
            <button name='9'id='nine' onClick={calculation}>9</button>
            <button name='*'id='multiply' onClick={calculation}>&times;</button>
            <button name='4'id='four' onClick={calculation}>4</button>
            <button name='5'id='five' onClick={calculation}>5</button>
            <button name='6'id='six' onClick={calculation}>6</button>
            <button name='-' id='subtract' onClick={calculation}>&ndash;</button>
            <button name='1'id='one' onClick={calculation}>1</button>
            <button name='2'id='two' onClick={calculation}>2</button>
            <button name='3' id='three' onClick={calculation}>3</button>
            <button name='+'id='add' onClick={calculation}>+</button>
            <button name='0'id='zero' onClick={calculation}>0</button>
            <button name='.'id='decimal' onClick={calculation}>.</button>
            <button onClick={equals} id="equals">=</button>
        </div>
        </div>
        </>
     );
}

export default Callci;