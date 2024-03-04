import logo from './logo.svg';
import './App.css';
import Navbar from './component/navbar';
import React, { useState } from "react";
import Calculator from './component/calculator';
function App() {
  let[count, setCount]=useState(0)
  return (
    <div className="App">
   {/* top navbar*/}
   <Navbar/>
   
   <div styles={{fontSize: '40px', color:'red'}}>
{count}
   </div>
   <button onClick={()=>{
    setCount(
    (prevState)=>prevState +1
    )
   }
  }>Increment</button>
  
  <button onClick={()=>{
    setCount(
    (prevState)=>prevState -1
    )
   }
  }>Decrement</button>
  <Calculator/>
    </div>
    
  );
}

export default App;
