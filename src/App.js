import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import Algorithms from './Componenets/Algorithms';
import { useState } from 'react';
import InputReader from './Componenets/InputReader';

function App() {
  let [array,setArray]=useState([])
  return (
    <div className="App">
      {/* <Algorithms props={array} /> */}
      <InputReader/>
    </div>
  );
}

export default App;
