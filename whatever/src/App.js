import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <p>
        UNLIMITED FREE WEBSITES (loaded html on a browser)
      </p>
      <a
          className="Song-link"
          href="jetpack.flac"
          target="_blank"
          rel="noopener noreferrer"
        download>
          MUSIC
        </a>
    </div>
  );
}

export default App;
