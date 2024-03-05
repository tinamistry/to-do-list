import React from 'react';
import Drawer from '@mui/material/Drawer';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Typography } from '@mui/material';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';

function SideBar({ user }) {
  // Check if user data is available
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
        <List sx={{ ml: '-30px', mt: '50px' }}>
          <ListItem disablePadding>
            <ListItemButton to="/">
              <ListItemIcon>
                <WbSunnyIcon sx={{ color: '#fac905', mr: '4px' }} />
              </ListItemIcon>
              <ListItemText primary={'today'} />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton to="/future">
              <ListItemIcon>
                <CalendarTodayIcon sx={{ color: '#919191', mr: '4px' }} />
              </ListItemIcon>
              <ListItemText primary={'future'} />
            </ListItemButton>
          </ListItem>
        </List>

        <List sx={{ ml: '-30px', mt: '50px' }}>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
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
    </div>
  );
}

export default SideBar;
