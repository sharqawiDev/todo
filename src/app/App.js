import './App.scss';
import logo from "./assets/devchallenges.png"
function App() {
  return (
    <div className="App">
      <header>
        <h2>#todo</h2>
        <a href='https://devchallenges.io/' target={'_blank'} rel={'noreferrer'}>
          <img src={logo} alt={'DevChallenges Logo'} />
        </a>
      </header>

    </div>
  );
}

export default App;
