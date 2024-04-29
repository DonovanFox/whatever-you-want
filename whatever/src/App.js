import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      {/*<header className="App-header">
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
      </header>*/}
      <p className="App-header">
        UNLIMITED FREE WEBSITES (loaded html on a browser)
        <iframe width="784" height="441" src="https://www.youtube.com/embed/22W83FgIX54?si=UZAr_ejMxOKQ3SBq" title="YouTube video player" frameborder="10" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        <a
          className="Song-link"
          href="jetpack.flac"
          target="_blank"
          rel="noopener noreferrer"
        download>
        <p className="With-margins">MUSIC</p>
        </a>
        Undertale
        <iframe width="560" height="315" src="https://www.youtube.com/embed/videoseries?si=ubLatubBziyx3uJO&amp;list=PLpJl5XaLHtLX-pDk4kctGxtF4nq6BIyjg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      </p>
    </div>
  );
}

export default App;
