import logo from './logo.svg';
import './App.css';
import Axios from 'axios';
import {useState} from 'react';

function App() {
  const [newExcuse, setNewExcuse] = useState('');

  
  const fetchExcuse = (excuse) => {
      Axios.get(`https://excuser-three.vercel.app/v1/excuse/${excuse}/`).then((res) => {
      setNewExcuse(res.data[0].excuse)
    });  
  };
  

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2> Generate an Excuse </h2>
        <button onClick={() => fetchExcuse('party')}> Party </button>
        <button onClick={() => fetchExcuse('family')}> Family </button>
        <button onClick={() => fetchExcuse('office')}> Office </button>
        <p>{newExcuse}</p>
      </header>
    </div>
  );
}

export default App;
