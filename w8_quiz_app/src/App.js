import logo from './logo.svg';
import './App.css';
import Questions from './components/question';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Week 8: Quiz App</h1>
        <Questions />
      </header>
    </div>
  );
}

export default App;
