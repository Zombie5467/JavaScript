import Card, {CardBody} from './components/Card'
import List from './components/List'
import './App.css'

function App() {
  
  const list = ['Challenger', 'Ford', 'Charger', 'Viper']
  return (
    <>
      {/* Componente card */}
      <Card>
        < CardBody title={"World hold on"} text={"Instead of messing with our future, open up inside"} />
        <List data={list}/>
      </Card>
    </>
  )
}

export default App;
