import React, { useState }  from 'react';
import { useNavigate } from "react-router-dom";
import '../styles/register.css'
import NavBar from './NavBar'
import logo from '../assets/Logo.png'
import { Typography, Box, Grid, TextField, Button, Divider } from '@mui/material';
import {register} from '../request-api/auth-request-api'

const RegisterForm = () => {

    const navigate  = useNavigate();
    const[firstName, setFirstName] = useState("")
    const[lastName, setLastName] = useState("")
    const[email, setEmail] = useState("")
    const[password, setPassword] = useState("")
    const[verifyPassword, setVerifyPassword] = useState("")
    const[errors, setErrors] = useState({})

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

    const validateForm = () =>{
        let errors = {}
        if(!firstName) errors.firstName = "First name is required"
        if(!lastName) errors.lastName = "Last name is required"
        if(!email) errors.email = "Email is required"
        if(!password) errors.password = "Password is required"
        if(password.length < 8 ) errors.password = "Password must be at least 8 characters"
        if(password !== verifyPassword) errors.verifyPass = "Passwords do not match"
        return errors;

    }

    const handleSubmit = async (event) =>{
        event.preventDefault();
        const errors = validateForm();
        if (Object.keys(errors).length === 0) {
            try {
                const response = await register(firstName, lastName, email, password);
                console.log('Registration successful:', response.data);
              } catch (error) {
                console.error('Registration error:', error);
              }
            }
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
                            onChange={handleFirstNameChange}
                            error = {!!errors.firstName}
                            helperText = {errors.firstName} />
                        </Grid>
                        <Grid item xs={4}>
                        <TextField 
                            id="standard-basic" 
                            label="Last Name" 
                            variant="standard"
                            value={lastName} 
                            onChange={handleLastNameChange}
                            error = {!!errors.lastName}
                            helperText = {errors.lastName}  />
                        </Grid>
                        <Grid item xs={8}>
                        <TextField 
                            fullWidth
                            id="standard-basic" 
                            label="Email" 
                            variant="standard"
                            value={email} 
                            onChange={handleEmailChange}
                            error = {!!errors.email}
                            helperText = {errors.email}  />   
                        </Grid>
                        <Grid item xs={8}>
                         <TextField 
                            fullWidth
                            id="standard-basic" 
                            label="Password" 
                            type = "password"
                            variant="standard"
                            value={password} 
                            onChange={handlePasswordChange}
                            error = {!!errors.password}
                            helperText = {errors.password} />  
                        </Grid>
                        <Grid item xs={8}>
                         <TextField 
                            fullWidth
                            id="standard-basic" 
                            label="Confirm Password" 
                            type = "password"
                            variant="standard"
                            value={verifyPassword} 
                            onChange={handlePasswordVerificationChange}
                            error = {!!errors.verifyPass}
                            helperText = {errors.verifyPass} />  
                        </Grid>
                        <Grid item xs={8}>
                            <Button fullWidth variant="contained" onClick = {handleSubmit}>Register</Button>
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
