import { useImperativeHandle, useRef,forwardRef  } from "react";
import {createPortal} from "react-dom"

const ResultModal= forwardRef(function ResultModal({ timeCount, remainingTime, onReset}, ref) { 
  const dialog = useRef()
  const userLost = remainingTime<=0
  const formattedTime = (remainingTime/1000).toFixed(2)
  const score = Math.round((1-remainingTime/(timeCount*1000))*100)
  useImperativeHandle(ref, ()=>{
  return{
    open(){
      dialog.current.showModal()
    }
  }
})
  return  createPortal(
    <dialog  ref={dialog} className="result-modal" >
      {userLost &&<h2>You lost</h2>}
      {!userLost && <h2>Your score is {score}</h2>}
      <p>
        The target time was <strong>{timeCount} seconds</strong>
      </p>
      <p>
        You stopped the timer in <strong> {formattedTime} seconds left</strong>
      </p>
      <form action="dialog" onSubmit={onReset}>
        <button>Close</button>
      </form>
    </dialog>,
    document.getElementById('modal')
  );
})
export default  ResultModal