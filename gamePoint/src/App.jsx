
import Player from "./components/Player.jsx";
// import LiveChat from 'react-livechat'
import TimeChallenge from "./components/TimeChallenge.jsx";

function App() {
  return (
    <>
      <Player />
      <div id="challenges">
        <TimeChallenge title="Easy" timeCount={1} />
        <TimeChallenge title="Normal" timeCount={5} />
        <TimeChallenge title="Medium" timeCount={10} />
        <TimeChallenge title="Hard" timeCount={15} />
      </div>
      {/* <LiveChat/> */}
    </>
  );
}

export default App;
