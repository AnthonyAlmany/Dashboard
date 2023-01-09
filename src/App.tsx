import React from 'react';
import {
  Routes,
  Route,
  Link
} from "react-router-dom";
import Weather from "./components/Weather"
import Home from "./components/Home"
import Crypto from './components/Crypto';
import buttonsList from "./datas/buttonsList"

function App() {

  type buttonListType = {
    name: string;
    logo: string;
  }

  return (
    <div className="App">
      <h1>Hello</h1>
    </div>
  );
}

export default App;
