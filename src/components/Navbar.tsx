import React from 'react'

import {
    Routes,
    Route,
    NavLink
} from "react-router-dom";
// import styled from 'styled-components';

import Weather from "./Weather";
import Crypto from './Crypto';
import Movies from './Movies';
import Searchbar from './Searchbar';
import Home from './Home';

import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';
import AccountBalanceOutlinedIcon from '@mui/icons-material/AccountBalanceOutlined';
import MovieOutlinedIcon from '@mui/icons-material/MovieOutlined';

import './navbar.css';


function Navbar() {

    const styleLink = {
        display: 'flex',
        alignItems: 'center',
        textDecoration: 'none',
        color: 'inherit',
        marginBottom: '2rem',
        width: '8rem',
        height: '2rem',
        borderRadius: '1rem',
    }



    // const Wrapper = styled.div`
    // display: flex;
    // flex-direction: column;
    // margin-bottom: 4rem;
    // `;


    return (
        <div>
            <div className='links-container'>
                <NavLink to="/Home" style={{ ...styleLink, ...({ isActive }) => { return (isActive ? 'active' : '') } }}  >
                    <div className='button-container'><GridViewOutlinedIcon /><div className="text-button">Home</div></div>
                </NavLink>
                <NavLink to="/Weather" style={styleLink}>
                    <div className='button-container'><WbSunnyOutlinedIcon /><div className="text-button">Weather</div></div>
                </NavLink>
                <NavLink to="/Crypto" style={styleLink}>
                    <div className='button-container'><AccountBalanceOutlinedIcon /><div className="text-button">Market</div></div>
                </NavLink>
                <NavLink to="/Movies" style={styleLink}>
                    <div className='button-container'><MovieOutlinedIcon /><div className="text-button">Movies</div></div>
                </NavLink>
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