import React, { useEffect } from 'react'
import { useState } from 'react';
import './counter.css'

export default function Counter() {
const[counter,setCounter]=useState(0);
const incrementCounter=function(){
  // console.log("increment called");
  setCounter(counter+1);// increment by 1
}
const DecrementCounter=function(){
  // console.log("decrement called");
  setCounter(counter-1);
}
const ResetCounter =function(){
// console.log("reset");
setCounter(0);
}
// code for stop watch
const [hour,setHour]=useState(0);
const [min,setMin]=useState(0);
const [sec,setSec]=useState(0);
const [mS,setMs]=useState(0);
const[stops,setStops]=useState(true);
const onStart=function(){
setStops(false);
//setMs(mS +1);
}
const onStop=function(){
    setStops(true);   
}
const onReset=function(){
    setHour(0);
    setMin(0);
    setSec(0);
    setMs(0);
}
useEffect(()=>{
   let interval=null;
   if(!stops)
   {
    interval=setInterval(()=>{
      if(min >59)
      {
        setHour(hour+1);
        setMin(0);
        clearInterval(interval);
      }
      if(sec >59)
      {
        setMin(min+1);
        setSec(0);
        clearInterval(interval);
      }
      if(mS >59)
      {
        setSec(sec+1);
        setMs(0);
        clearInterval(interval);
      }
      if(mS<=59)
      {
        setMs(mS+1);

      }
    },10)
   } 
   else{
    clearInterval(interval);
   }
   return ()=>{
    clearInterval(interval);
   }
})

  return (
<>
<div className="timer-box">
  
<div className="box-container">
      <p className="zero">{counter}</p>
      <button onClick={DecrementCounter} >Decrement</button>
      
      <button onClick={incrementCounter}>increment</button>
     
      <button onClick={ResetCounter}>Reset</button>
    
      </div>
      <div className="watch-box">
        
        <h1>{hour}:{min}:{sec}:{mS}</h1>
        <button onClick={onStart}>start</button>
        <button onClick={onStop}>stop</button>
        <button onClick={onReset}>Reset</button>

      </div>
      <footer class="footer">
    <p class="text">Created with <i class="fa fa-heart"></i> by Anjali </p>
    <p>
        <a href="https://www.linkedin.com/in/anjali-raj-5796a71a7" target="_blank" class="link"> 
            <i class="fa fa-linkedin-square fa-2x" aria-hidden="true"></i>
     
        </a>
        <a href="https://github.com/AnjaliRaj05" target="_blank" class="link">
            <i class="fa fa-github fa-2x" aria-hidden="true"></i>
        </a>
    </p>
</footer>  
      </div>
      
  </>  
  )
}
