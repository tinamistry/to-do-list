import React from 'react';
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import { Typography, IconButton, Icon, Link } from '@mui/material';
import SideBar from './SideBar'
import NewTodoForm from './NewTodoForm';
import AddIcon from '@mui/icons-material/Add';
import Checkbox from '@mui/material/Checkbox';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import '../styles/today.css'
import axios from 'axios';
axios.defaults.withCredentials = true;
const baseURL = 'http://localhost:8080/api/list';
const api = axios.create({
  baseURL: baseURL,
  withCredentials: true,
});

function Today() {
    const navigate = useNavigate();
    const [cookies, removeCookie] = useCookies([])
    const [userData, setUserData] = useState(null);
    const[openNewTodoForm, setOpenNewTodoForm] = useState(false)
    const [selectedList, setSelectedList] = useState("today");
    const[listItems, setListItems] = useState(null)


     useEffect(() => {
        const verifyCookie = async () => {
          if (!cookies.token) {
            navigate('/');
          }
    
          if (cookies.token && localStorage.getItem('userData')) {
            const data = JSON.parse(localStorage.getItem('userData'));
            setUserData(data.user);
          } else {
            console.error('Token or User Data not found in cookies or local storage');
          }
        };
        verifyCookie();
      }, [cookies.token]); // Only re-run the effect if 'cookies.token' or 'navigate' changes
  

    const handleItemClick = () =>{
        
    }

    const handleListNameClick = (listName) => {
      setSelectedList(listName);
      getListItems(listName)
      console.log(selectedList)
    };

    const getListItems = async (listName) =>{
      console.log(listName);
      try {
        const response = await api.get(`/getListItems/${listName}`, {
          headers: {
            'Content-Type': 'application/json',
          },
        });
        const data = response.data;
        console.log(data.items)
        setListItems(data.items)
      } catch (error) {
        console.error("Error sending GET request:", error);
      }

    }

    const addNewItem = () =>{
      setOpenNewTodoForm(true)
        
    }

    const handleClose = () =>{
      setOpenNewTodoForm(false)
    }

   return(
    <div className = "today" >
        <SideBar user = {userData} onListItemClick={handleListNameClick}/>
        <div className = "today-content">
            <div className = "title">
                    <Typography variant = "h3" >{selectedList}</Typography>
            </div>
            <div className = "today-items-list">
                <div className = "to-do-item">
                <Checkbox className = "todo-checkmark" icon={<RadioButtonUncheckedIcon />} checkedIcon={<CheckCircleIcon />} /> 
                <Typography className = "todo-text" onClick = {handleItemClick}
                    style={{
                        textDecoration: 'underline', 
                        textDecorationColor: 'lightgrey', 
                        color: 'black', 
                     }}> get coffee </Typography>
                </div>
                <div className = "add-new-todo-button">
                <IconButton onClick = {addNewItem}>
                    <AddIcon sx = {{color:'lightslategrey'}}/>
                </IconButton>
                <Typography className = "add-todo-button-text" variant = "body1">Add to-do</Typography>
            </div>
            </div>
        </div>
        {openNewTodoForm && <NewTodoForm open = {openNewTodoForm} handleClose = {handleClose} user = {userData} listName = {selectedList}/>}
    </div>
   );
}

export default Today;