// import logo from './logo.svg';
import './App.css';
import grace from './grace.jpeg';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={grace} className="grace" alt="logo" />
        <p>
          Yo Grace aventura
        </p>
        {/* <img src={grace} className="App-logo" alt="logo" height={20} /> */}
        {/* <a
          className="App-link"
          href="./grace.jpeg"
          target="_blank"
          rel="noopener noreferrer"
        >
          Yo zoba, landa lien oyo
        </a> */}
      </header>
    </div>
  );
}

export default App;
