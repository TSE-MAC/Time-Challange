import Player from './components/Player.jsx';
import TimerChallenge from './components/TimerChallenge.jsx';

function App() {
  return (
    <>
      <Player />
      <div id="challenges">
      <TimerChallenge title="Timer Challenge" targetTime={1} />
      <TimerChallenge title="Timer Challenge" targetTime={5} />
      <TimerChallenge title="Timer Challenge" targetTime={10} />
      <TimerChallenge title="Timer Challenge" targetTime={15} />
    </div>
    </>
  );
}

export default App;
