import logo from './logo.svg';
import './App.css';
// import Greeting from './components/pure/greeting.jsx';

import GreetingFunction from './components/pure/greetingFunction';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        {/** Componente Greeting */}
        {/* <Greeting name="Zombie5467"></Greeting> */}
        <GreetingFunction name="Zombie5467"></GreetingFunction>

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
