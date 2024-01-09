
import React from 'react';
import './App.css';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SideBar from './components/SideBar'
import Today from './components/Today'



const theme = createTheme({
  components:{
    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundColor: '#efeff0', 
          border: "none"
        },
      },
    },
  
}});

function App() {
  return (
    <ThemeProvider theme={theme}>

    <div style={{ display: 'flex' }}>
        <SideBar />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Today />} />
          </Routes>
        </BrowserRouter>
      </div>
  </ThemeProvider>
  );
}

export default App;
