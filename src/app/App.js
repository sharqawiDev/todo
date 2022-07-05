import './App.scss';
import logo from "./assets/devchallenges.png"
import TabsBar from './components/TabsBar/TabsBar';
function App() {
  return (
    <div className="App">
      <header>
        <h2>#todo</h2>
        <a href='https://devchallenges.io/' target={'_blank'} rel={'noreferrer'}>
          <img src={logo} alt={'DevChallenges Logo'} />
        </a>
      </header>
      <TabsBar />
    </div>
  );
}

export default App;
