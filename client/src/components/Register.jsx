import React from 'react';
import NavBar from './NavBar'
import { Typography } from '@mui/material';
import logo from '../assets/Logo.png';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import { Link } from 'react-router-dom';
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box'

function Register() {
  return (
    <div className="register">
        <NavBar/>
        <Typography variant = "h3">Register</Typography>
        <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '0.5rem',
          marginTop: '5rem'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <img src={logo} alt="Logo" width="50" height="50" />
          <h1>Register</h1>
        </div>
        <Box component="form" noValidate>
          <Grid container spacing={1}>
            <Grid item xs={12} sm={6}>
              <TextField
                size="small"
                autoComplete="fname"
                name="firstName"
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                size="small"
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                size="small"
                fullWidth
                id="userName"
                label="User Name"
                name="userName"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                size="small"
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                size="small"
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                size="small"
                fullWidth
                name="passwordVerify"
                label="Password Verify"
                type="password"
                id="passwordVerify"
              />
            </Grid>
          </Grid>
          <Button    fullWidth variant="contained" id="loginButton"  sx={{ mt: 3, mb: 2 }}>
            Register
          </Button>
          <Grid container justifyContent="flex-end"></Grid>
        </Box>
        <Divider className="divider"> OR </Divider>
        <Link className="link" to={'/login'}>
          <Button  variant="contained" id="loginButton">
            Login
          </Button>
        </Link>
      </Box>
    </Container>
      
    </div>
  );
}

export default Register;
