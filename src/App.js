// import logo from './img/logo.svg';
import { useState } from 'react';
import './App.css';
import './style.css'



function App(props) {
  const [display, setDisplay] = useState('')
  const [answer, setAnswer] = useState('')
  const displayNumbers = (e)=>{
    const number = e.target.innerText


    if(display === '0') {
      setDisplay(number)

    } else if (display === ' ') {
      setDisplay(number)
    } else if (number === 'C') {
      setDisplay(display.slice(0,-1))
      setAnswer("")
    } else {
      setDisplay(display + number)
    }
    
  }
  const displayOperator = (e)=> {
    let operator = e.target.innerText
    operator === 'x' ? operator = '*' : operator = e.target.innerText
    setDisplay(display + ' ' + operator + ' ')
  }

  const decimal = ()=> {
    const array = display.split(" ")
    const lastValue = array[array.length - 1]

    if (lastValue.includes(".")) {
      setDisplay(display)
    } else {
      setDisplay(display + '.')
    }
  }

  const clear = ()=> {
    setDisplay("")
    setAnswer("")
  }

  const getAnswer = ()=> {
    setAnswer( eval(display))
  }


  return (
    <div className="App">
      <div className='calculator'>
        <div className='row one'>
          <div>{answer}</div>
          <div>{display}</div>
        </div>
        {/* <div className='row 2'></div> */}
        <div className='row 7'>
            <div  className='item' onClick={clear}></div>
            <div  className='item' onClick={displayNumbers}>(</div>
            <div  className='item' onClick={displayNumbers}>)</div>
            <div  className='item' onClick={displayOperator}>{'\u00F7'}</div>
        </div>
        <div className='row 3'>
          <div  className='item' onClick={displayNumbers}>7</div>
          <div  className='item' onClick={displayNumbers}>8</div>
          <div  className='item' onClick={displayNumbers}>9</div>
          <div  className='item' onClick={displayOperator}>x</div>
        </div>
        <div className='row 4'>
          <div  className='item' onClick={displayNumbers}>4</div>
          <div  className='item' onClick={displayNumbers}>5</div>
          <div  className='item' onClick={displayNumbers}>6</div>
          <div  className='item' onClick={displayOperator}>-</div>
        </div>
        <div className='row 5'>
          <div  className='item' onClick={displayNumbers}>1</div>
          <div  className='item' onClick={displayNumbers}>2</div>
          <div  className='item' onClick={displayNumbers}>3</div>
          <div  className='item' onClick={displayOperator}>+</div>
        </div>
        <div className='row 6'>
            <div  className='item' onClick={displayNumbers}>C</div>
            <div  className='item' onClick={displayNumbers}>0</div>
            <div  className='item' onClick={decimal}>.</div>
            <div  className='item'id='equalSign' onClick={getAnswer}>=</div>
        </div>
      </div>
    </div>
  );
}


export default App;
