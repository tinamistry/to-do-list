import React from 'react';
import '../styles/landing.css';
import NavBar from './NavBar'
import picture from '../assets/landing.png'
import { Typography, Link, InputLabel, } from '@mui/material';
import { TextField } from '@mui/material';
import Card from '@mui/material/Card';
import AppBar from '@mui/material/AppBar';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';

function Landing() {
  return (
    <div className="landing">
      <NavBar/>

      <div className="login-card">
        <Card sx = {{height: '100%', width: '100%', ml: '50px'}}> 
          <CardContent>
            <div className="welcome">
              <Typography sx = {{fontSize: '30px', mr: '100px'}}>   Welcome to Lists!</Typography>
            </div>
            <Typography sx = {{color: 'lightslategrey'}} >Dont have an account yet?  <Link href="/register" >Sign Up</Link>
            </Typography>
            <div className="login-input">
                    <InputLabel htmlFor="username" sx={{ ml: '0px'}}>Username</InputLabel>
                    <TextField  id="username" fullWidth color="secondary" variant="outlined" sx = {{mb: '10px'}} />
                    <Link sx={{mr: '-300px', mb: '-15px' }}>Forgot Password?</Link>
                    <InputLabel htmlFor="password" sx = {{ ml: '0px' }}>Password</InputLabel>
                    <TextField fullWidth  id="password" color="secondary" variant="outlined" type="password" />
      
            </div>
            <Button variant="contained" sx = {{mt: '10px'}}>Login</Button>
          </CardContent>
        </Card>
      </div>
      <div className="right-side-landing">
        <img className = "landing-woman" src = {picture} alt = "Woman Studying"></img>
      </div>
    </div>
  );
}

export default Landing;
