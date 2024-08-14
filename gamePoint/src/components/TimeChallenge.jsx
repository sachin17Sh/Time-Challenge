import React, { useRef, useState } from "react";

import ResultModal from "./ResultModal";

export default function TimeChallenge({ title, timeCount }) {
  const timer = useRef()
  const dialog = useRef()
  const[timeRemaining , setTimeRemaining]=useState(timeCount*1000)
  const timeIsActive =  timeRemaining>0 && timeRemaining< timeCount*1000
  if(timeRemaining<=0){
    clearInterval(timer.current)
    dialog.current.open()
  }
  function handleReset(){
    setTimeRemaining(timeCount*1000)
  }
  function handleStart(){
    timer.current= setInterval(() => {
     setTimeRemaining(prevTimeRemaining=>prevTimeRemaining-10)
    }, 10);
  } 
  function handleStop(){
    dialog.current.open()
    clearInterval(timer.current)
  }
  return (
  <>
   <ResultModal ref={dialog} timeCount={timeCount}  remainingTime={timeRemaining} onReset = {handleReset}/>
    <section className="challenge">
      <h2>{title}</h2>
  
      <p className="challenge-time">
        {timeCount} second {timeCount > 1 ? "s" : ""}
      </p>
      <button onClick={timeIsActive? handleStop: handleStart}>{timeIsActive?"Stop":"Start"}</button>
      <p className={timeIsActive?"active":undefined}> {timeIsActive?"Time is Running.......":"Time Inactive"}</p>
    </section>
    </>
  );
}
