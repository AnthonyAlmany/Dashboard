import React from 'react';
import {
  Routes,
  Route,
  Link
} from "react-router-dom";
import Weather from "./components/Weather"
import Home from "./components/pages/Home/Home"
import Crypto from './components/Crypto';
import buttonsList from "./datas/buttonsList"

function App() {




  type buttonListType = {
    name: string;
    logo: string;
  }

  return (
    <Routes>
      <Route path='/' element={<Home />} />
    </Routes>
  );
}


export default App;
