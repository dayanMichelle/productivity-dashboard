import CardUser from "./components/CardUser";
import './App.css'
import ListItems from "./components/ListItems";
import { useState } from "react";

const TIMES = ['daily','weekly','monthly']

function App() {
  const [timeSelected, setTimeSelected] = useState('daily')
  const handleTimeSelected = (time) => {
    setTimeSelected(time)
  }
  return (
    <div className='container'>
      <CardUser handleTimeSelected={handleTimeSelected} timeSelected={timeSelected}  times={TIMES} />
      <ListItems timeSelected={timeSelected} />
    </div>
  );
}

export default App;
