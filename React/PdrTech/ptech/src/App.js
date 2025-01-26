import logo from './logo.svg';
import './App.css';
import Job from './exercises/job';
import Planets from './exercises/list';
import { planets } from './exercises/list';
import Age from './exercises/useStage';

function App() {

  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        <Job salary={8000} position = {'Junior'} company = {'Netflix'}/>
       
        {planets.map((planet, key) =>{
          return <Planets name={planet.isGasPlanet && planet.name} key = {key}/>
        })}

        <Age />
      </header>
    </div>
  );
}


export default App;
