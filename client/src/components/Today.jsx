import React from 'react';
import SideBar from './SideBar'
import { Typography, IconButton, Icon, Link } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import Checkbox from '@mui/material/Checkbox';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import '../styles/today.css'

function Today() {

    const handleItemClick = () =>{
        
    }

   return(
    <div className = "today" >
        <div className = "today-content">
            <Typography variant = "h3" >today</Typography>
            <div className = "today-items-list">
                <div className = "to-do-item">
                <Checkbox className = "todo-checkmark" icon={<RadioButtonUncheckedIcon />} checkedIcon={<CheckCircleIcon />} /> 
                <Typography className = "todo-text" onClick = {handleItemClick}
                    style={{
                        textDecoration: 'underline', // add underline
                        textDecorationColor: 'lightgrey', // set underline color
                        color: 'black', // set text color
                     }}> get coffee </Typography>
                </div>
            </div>
            <div className = "add-new-todo-button">
                <IconButton>
                    <AddIcon sx = {{color:'lightslategrey'}}/>
                </IconButton>
                <Typography className = "add-todo-button-text" variant = "body1">Add todo</Typography>
            </div>
        </div>
    </div>
   );
}

export default Today;