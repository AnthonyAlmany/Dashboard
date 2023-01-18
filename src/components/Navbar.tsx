import React from 'react'

import { NavLink } from "react-router-dom";
// import styled from 'styled-components';


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
                <NavLink to="/" style={styleLink}>
                    <div className='button-container'><GridViewOutlinedIcon /><div className="text-button">Dashboard</div></div>
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



            <Searchbar />
        </div>
    )
}

export default Navbar