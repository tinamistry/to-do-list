import React , { useState }from 'react';
import { useNavigate } from "react-router-dom";
import '../styles/landing.css';
import axios from 'axios';
import NavBar from './NavBar'
import picture from '../assets/landing.png'
import { Typography, Link, InputLabel, } from '@mui/material';
import { TextField } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
axios.defaults.withCredentials = true;
const baseURL = 'http://localhost:8080/api/auth';
const api = axios.create({
  baseURL: baseURL,
  withCredentials: true,
});

function Landing() {
  const navigate  = useNavigate();
  const [email, setEmail] = useState('')
  const[password, setPassword] = useState('')
  const[error, setError] = useState('')

  const handleUsernameChange = (event) =>{
    setEmail(event.target.value)
  }

  const handlePasswordChange = (event) =>{
    setPassword(event.target.value)
  }

  const handleLogin = async(event) =>{
    event.preventDefault()
    try {
      const response = await api.post('/login', {
          email,
          password,
        }, {
          headers: {
            'Content-Type': 'application/json',
          },
        });
      const data = response.data; 
      console.log(data)
      localStorage.setItem('token', data.token); //we have the token saved with the user id 
      navigate('/today')
      console.log('Response from server:', data);
    } catch (error) {
      setError('Invalid username or password')
      console.error('Error sending POST request:', error);
    }

  }

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
                    <InputLabel htmlFor="email" sx={{ ml: '0px'}}>Email</InputLabel>
                    <TextField  
                      id="email" 
                      fullWidth 
                      color="secondary" 
                      variant="outlined" 
                      sx = {{mb: '10px'}} 
                      onChange = {handleUsernameChange}/>
                    <Link sx={{mr: '-300px', mb: '-15px' }}>Forgot Password?</Link>
                    <InputLabel htmlFor="password" sx = {{ ml: '0px' }}>Password</InputLabel>
                    <TextField fullWidth  
                        id="password" 
                        color="secondary" 
                        variant="outlined" 
                        type="password" 
                        onChange = {handlePasswordChange}
                        error = {error}/>
      
            </div>
            <Button variant="contained" sx = {{mt: '10px'}} onClick = {handleLogin}>Login</Button>
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
