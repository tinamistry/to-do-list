import React, { useState} from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import "../styles/todoForm.css"
import axios from 'axios';
axios.defaults.withCredentials = true;
const baseURL = 'http://localhost:8080/api/list';
const api = axios.create({
  baseURL: baseURL,
  withCredentials: true,
});

function NewTodoForm({open, handleClose, user}) {
    const [title, setTitle] = useState("")


    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 200,
        height: 400,
        bgcolor: 'background.paper',
        boxShadow: 24,
        pt: 2,
        px: 10,
        pb: 5,
      };

      const handleTitleChange = async(event) =>{
        setTitle(event.target.value)
        }

      const handleSubmit = async(event) =>{
        event.preventDefault()
        try{
            const response = await api.post('/addNewList', {
              userId: user._id, 
              listName: title,
            }, {
              headers: {
                'Content-Type': 'application/json',
              },
            })
            const data = response.data; 
            console.log(data)
            handleClose()
          } catch(error){
            console.log("error sending post request")
          }
        }


    return(
        <div>
        <Dialog
            open={open}
            onClose={handleClose}>
        <DialogTitle>Add a new List</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            required
            id="outlined-basic" 
            name="title"
            label="Title"
            variant="standard"
            fullwidth
            onChange = {handleTitleChange}
          />
    
        </DialogContent>
        <DialogActions >
          <Button onClick={handleClose} variant = "outlined">Cancel</Button>
          <Button type="submit" variant = "contained" onClick = {handleSubmit}>Add</Button>
        </DialogActions>
      </Dialog>
        </div>
    )
}
export default NewTodoForm;
