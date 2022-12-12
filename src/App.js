import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import Algorithms from './Componenets/Algorithms';
import { useState } from 'react';

function App() {
  let [array,setArray]=useState([])
  return (
    <div className="App">
      <Algorithms props={array} />
    </div>
  );
}

export default App;
