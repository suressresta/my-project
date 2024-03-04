import React from 'react';
import '../styles/calculator.css'
function Calculator(){
    let [firstNumber, setFirstNumber] = React.useState(0);
    let [secondNumber, setSecondNumber] = React.useState(0);
    let [answer, setAnswer] = React.useState(0);
    const handleKeyClick =()=>{
        
    }
    return(
        <div id="calculator">
        <div id="display">
           <div>{firstNumber}+{secondNumber}=</div>
           <div id="answer">{answer}</div>
        </div>
        <div className="keys">
<div>7</div>
<div>8</div>
<div>9</div>
<div>/</div>
</div>
</div>
    )
}

export default Calculator