import React from 'react';
import '../styles/landing.css';
import logo from '../assets/Logo.png';
import picture from '../assets/landing.png'
import { Typography, Link, InputLabel, Toolbar, } from '@mui/material';
import { TextField } from '@mui/material';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import AppBar from '@mui/material/AppBar';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';

function Landing() {
  return (
    <div className="landing">
      <AppBar component="nav">
        <Toolbar sx = {{color: 'black'}}>
             <img className="logo" src={logo} alt="Logo" />
    
        </Toolbar>
      </AppBar>




      <div className="login-card">
        <Card sx = {{height: '100%', width: '100%', ml: '50px'}}> 
          <CardContent>
            <div className="welcome">
              <Typography sx = {{fontSize: '30px', mr: '100px'}}>    <img className="logo" src={logo} alt="Logo" /> Welcome to Lists!</Typography>
            </div>
            <Typography sx = {{color: 'lightslategrey'}} >Dont have an account yet?  <Link sx = {{color: 'purple', textDecorationColor: 'purple'}}  >Sign Up</Link>
            </Typography>
            <div className="login-input">
                    <InputLabel htmlFor="username" sx={{ ml: '0px'}}>Username</InputLabel>
                    <TextField id="username" fullWidth color="secondary" variant="outlined" sx = {{mb: '10px'}} />
                    <Link sx={{ color: 'purple', textDecorationColor: 'purple', mr: '-300px', mb: '-15px' }}>Forgot Password?</Link>
                    <InputLabel htmlFor="password" sx = {{ ml: '0px' }}>Password</InputLabel>
                    <TextField fullWidth id="password" color="secondary" variant="outlined" type="password" />
      
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
