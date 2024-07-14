import logo from './logo.svg';
import './App.css';
import { Restaraunt } from './components/Restaraunt';

function App() {
  return (
    <>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            WildJaw Video
          </p>

        </header>
      </div>
      <Restaraunt />
    </>
  );
}


export default App;
