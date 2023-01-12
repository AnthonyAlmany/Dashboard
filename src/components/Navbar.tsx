import React from 'react'

import {
    Routes,
    Route,
    Link
} from "react-router-dom";
// import styled from 'styled-components';

import Weather from "../components/Weather";
import Home from "../components/Home";
import Crypto from '../components/Crypto';
import Movies from '../components/Movies';
import Searchbar from './Searchbar';

import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';
import AccountBalanceOutlinedIcon from '@mui/icons-material/AccountBalanceOutlined';
import MovieOutlinedIcon from '@mui/icons-material/MovieOutlined';

import './navbar.css';


function Navbar() {

    const styleLink = { textDecoration: 'none', color: 'inherit', marginBottom: '2rem' }

    // const Wrapper = styled.div`
    // display: flex;
    // flex-direction: column;
    // margin-bottom: 4rem;
    // `;


    return (
        <div>
            <div className='links-container'>
                <Link to="/" style={styleLink}>
                    <div className='button-container'><GridViewOutlinedIcon /><div className="text-button">Dashboard</div></div>
                </Link>
                <Link to="/Weather" style={styleLink}>
                    <div className='button-container'><WbSunnyOutlinedIcon /><div className="text-button">Weather</div></div>
                </Link>
                <Link to="/Crypto" style={styleLink}>
                    <div className='button-container'><AccountBalanceOutlinedIcon /><div className="text-button">Market</div></div>
                </Link>
                <Link to="/Movies" style={styleLink}>
                    <div className='button-container'><MovieOutlinedIcon /><div className="text-button">Movies</div></div>
                </Link>
            </div>

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/weather" element={<Weather />} />
                <Route path="/crypto" element={<Crypto />} />
                <Route path="/movies" element={<Movies />} />
            </Routes>

            <Searchbar />
        </div>
    )
}

export default Navbar