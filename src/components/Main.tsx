import React from 'react'
import {
    Routes,
    Route,
} from "react-router-dom";
import Weather from "../components/Weather";
import Home from "../components/Home";
import Crypto from '../components/Crypto';
import Movies from '../components/Movies';

function Main() {



    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/weather" element={<Weather />} />
                <Route path="/crypto" element={<Crypto />} />
                <Route path="/movies" element={<Movies />} />
            </Routes>
        </div>

    )
}

export default Main