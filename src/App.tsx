import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";

function App() {
   return (
      <div className="App">
         <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="/weather" element={<Weather />} />
                <Route path="/crypto" element={<Crypto />} />
                <Route path="/movies" element={<Movies />} /> */}
         </Routes>
      </div>
   );
}

export default App;
