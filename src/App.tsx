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
    <div className="App" >
      <h1>Dashboard</h1>

      <Link style={{ marginRight: "5px" }} to="/">Home</Link>

      {buttonsList.map((btn: buttonListType) => <Link style={{ margin: "5px" }} key={btn.name} to={`/${btn.name}`}>{btn.logo}</Link>)}


      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/weather" element={<Weather />} />
        <Route path="/crypto" element={<Crypto />} />
      </Routes>


    </div>
  );
}

export default App;
