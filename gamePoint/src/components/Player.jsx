import { useRef, useState } from "react";

export default function Player() {
  const playerName = useRef()
  const [userName, setUserName]=useState(null)
  // const [Submit, setSubmit]=useState(false)
  // function handleChange(event){
  //   setSubmit(false)
  //   setUserName(event.target.value)
  // }
  function handleClick(){
    setUserName(playerName.current.value)
    playerName.current.value=""
  }
  return (
    <section id="player">
      {/* <h2>Welcome {Submit? userName:'unknown entity'}!</h2> */}
      <h2>Welcome {userName?userName:"unknown entity"}</h2> 
      {/* or {userName??"unknown entity"} */}
      <p>
        <input ref={playerName} type="text" />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
