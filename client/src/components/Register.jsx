import React, { useState }  from 'react';
import { useNavigate } from "react-router-dom";
import '../styles/register.css'
import NavBar from './NavBar'
import logo from '../assets/Logo.png'
import { Typography, Box, Grid, TextField, Button, Divider } from '@mui/material';



const RegisterForm = () => {
    const navigate  = useNavigate();
    const[firstName, setFirstName] = useState(" ")
    const[lastName, setLastName] = useState(" ")
    const[email, setEmail] = useState(" ")
    const[password, setPassword] = useState(" ")
    const[verifyPassword, setVerifyPassword] = useState(" ")

    const handleLoginButtonClick = () =>{
       navigate('/')
    }

    const handleFirstNameChange = (event) => {
        setFirstName(event.target.value);
    };

    const handleLastNameChange = (event) =>{
        setLastName(event.target.value)
    }
    
    const handleEmailChange = (event) =>{
        setEmail(event.target.value)
    }

    const handlePasswordChange = (event) =>{
        setPassword(event.target.value)
    }

    const handlePasswordVerificationChange = (event) =>{
        setVerifyPassword(event.target.value)
    }

    const verifyUserInput = () =>{

    }
 
  return (
    <div className="register">
       <div className = "header">
           <NavBar/>
       </div>
       <div className = "register-form">
            <div className = "form-heading">
                <Typography variant = "h3">  <img src = {logo}  alt = "logo" style = {{width: '50px', height: '50px', marginBottom: '-7px'}}></img> Register</Typography>
            </div>
            <div className = 'form-inputs'>
                <Box sx={{ flexGrow: 1,  display:'flex', marginTop: '0px', marginLeft: '150px'}}>
                    <Grid container spacing={2}>
                        <Grid item xs={4}>
                            <TextField 
                            id="standard-basic" 
                            label="First Name" 
                            variant="standard"
                            value={firstName} 
                            onChange={handleFirstNameChange}  />
                        </Grid>
                        <Grid item xs={4}>
                        <TextField 
                            id="standard-basic" 
                            label="Last Name" 
                            variant="standard"
                            value={lastName} 
                            onChange={handleLastNameChange}  />
                        </Grid>
                        <Grid item xs={8}>
                        <TextField 
                            fullWidth
                            id="standard-basic" 
                            label="Email" 
                            variant="standard"
                            value={email} 
                            onChange={handleEmailChange}  />   
                        </Grid>
                        <Grid item xs={8}>
                         <TextField 
                            fullWidth
                            id="standard-basic" 
                            label="Password" 
                            type = "password"
                            variant="standard"
                            value={password} 
                            onChange={handlePasswordChange} />  
                        </Grid>
                        <Grid item xs={8}>
                         <TextField 
                            fullWidth
                            id="standard-basic" 
                            label="Confirm Password" 
                            type = "password"
                            variant="standard"
                            value={verifyPassword} 
                            onChange={handlePasswordVerificationChange} />  
                        </Grid>
                        <Grid item xs={8}>
                            <Button fullWidth variant="contained" onClick = {verifyUserInput}>Register</Button>
                        </Grid>
                        <Grid item xs={8}>
                          <Divider>OR</Divider>
                        </Grid>
                        <Grid item xs={8}>
                            <Button onClick = {handleLoginButtonClick} fullWidth variant="contained">Login</Button>
                        </Grid>
                    </Grid>

            </Box>
          </div>
   

                
       </div>

        
    </div>
  );
};

export default RegisterForm;
