
import React from 'react';
import './App.css';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SideBar from './components/SideBar'
import Today from './components/Today'
import Future from './components/Future'
import Landing from './components/Landing'



const theme = createTheme({
    palette: {
      primary: {
        main: '#50038C '
      },
    },

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
        <BrowserRouter>
          <Routes>
            <Route path = "/" element = {<Landing/>}/>
            <Route path="/today" element={<Today />} />
            <Route path="/future" element={<Future />} />
          </Routes>
        </BrowserRouter>
    </div>
  </ThemeProvider>
  );
}

export default App;
