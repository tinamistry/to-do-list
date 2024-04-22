import React, {useState, useEffect} from 'react';
import Drawer from '@mui/material/Drawer';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import NewListForm from './NewListForm'
import { Link } from 'react-router-dom';
import axios from 'axios';
axios.defaults.withCredentials = true;
const baseURL = 'http://localhost:8080/api/list';
const api = axios.create({
  baseURL: baseURL,
  withCredentials: true,
});

function SideBar({ user, onListItemClick  }) {
  const [openForm, setOpenForm] = useState(false)
  const[listNames, setListNames] = useState([])

  useEffect(() => {
    // Fetch list names only if user is available
    if (user && user._id) {
      getNames();

    }
  }, [user]); // Add user to the dependency array

  if (!user || !user.firstName) {
    return (
      <div className="sidebar">
        <Drawer
          variant="permanent"
          sx={{
            width: 240,
            flexShrink: 0,
            [`& .MuiDrawer-paper`]: { width: 240, boxSizing: 'border-box' },
          }}
        >
          <Typography sx={{ ml: '10px', mt: '10px' }}> Lists</Typography>
          <div>Loading...</div>
        </Drawer>
      </div>
    );
  }
  const getNames = async () => {
    try {
      const response = await api.get(`/getListNames/${user._id}`, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data = response.data;
      setListNames(data.names)
      console.log(listNames)
    } catch (error) {
      console.error("Error sending GET request:", error);
    }
  };
  

  const openListForm = () =>{setOpenForm(true) }
  const closeListForm = () => {setOpenForm(false)}
  
  const drawerWidth = 240;

  return (
    <div className="sidebar">
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
        }}
      >
        <Typography sx={{ ml: '10px', mt: '10px' }}> {user.firstName}'s Lists</Typography>

        <List sx={{mt: '10px'}}>
        <ListItem disablePadding sx = {{ml: '-25px'}}> 
                <ListItemButton to = "/today">
                  <ListItemIcon>
                  <WbSunnyIcon sx = {{color: '#fac905', mr: '4px'}}/>
                  </ListItemIcon>
                  <ListItemText primary={"today"} />
                </ListItemButton>
         </ListItem>
        {listNames.map((listName, index) => (
            <ListItem key={index} disablePadding  sx = {{ml: '10px'}}>
              <ListItemButton onClick={() => onListItemClick(listName)} > 
                <ListItemText primary={listName} />
              </ListItemButton>
            </ListItem>
          ))}
          </List>
        <List sx={{ ml: '-25px' }}>
          <ListItem disablePadding>
            <ListItemButton onClick = {openListForm}>
              <ListItemIcon >
                <AddIcon sx={{ color: '#919191', mr: '4px' }} />
              </ListItemIcon>
              <ListItemText primary={'new list'} />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <DeleteIcon sx={{ color: '#919191', mr: '4px' }} />
              </ListItemIcon>
              <ListItemText primary={'archive'} />
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>
      {openForm && <NewListForm open = {openForm} handleClose = {closeListForm} user = {user}/>}
    </div>
  );
}

export default SideBar;
