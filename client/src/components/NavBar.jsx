import React from 'react';
import {  Toolbar, } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import logo from '../assets/Logo.png';

function NavBar() {
  return (
    <AppBar component="nav" sx={{ display: 'flex', justifyContent: 'flex-start' }}>
        <Toolbar disableGutters className = "navbar" >
             <img className="logo" src={logo} alt="Logo" />
        </Toolbar>
      </AppBar>

  );
}

export default NavBar;
