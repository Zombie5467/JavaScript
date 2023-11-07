import logo from './logo.svg';
import './App.css';
// import Ejemplo1 from './hooks/Ejemplo1';
import Ejemplo2 from './hooks/Ejemplo2';
// import Greeting from './components/pure/greeting.jsx';
// import GreetingFunction from './components/pure/greetingFunction';
// import TaskListComponent from './components/container/task_list';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        {/** Componente Greeting */}
        {/* <Greeting name="Zombie5467"></Greeting> */}
        {/* <GreetingFunction name="Zombie5467"></GreetingFunction> */}
        {/* <TaskListComponent></TaskListComponent> */}
        {/* <Ejemplo1></Ejemplo1> */}
        <Ejemplo2></Ejemplo2>
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
