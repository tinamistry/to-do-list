import React, { useState} from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { FormControl, InputLabel, Input, FormHelperText } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import "../styles/todoForm.css"
import axios from 'axios';
axios.defaults.withCredentials = true;
const baseURL = 'http://localhost:8080/api/todo';
const api = axios.create({
  baseURL: baseURL,
  withCredentials: true,
});

function NewTodoForm({open, handleClose, user}) {
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 200,
        height: 500,
        bgcolor: 'background.paper',
        boxShadow: 24,
        pt: 2,
        px: 25,
        pb: 3,
      };

      const handleTitleChange = (event) =>{
        setTitle(event.target.value)
      }

      const handleDescriptionChange = (event) =>{
        setDescription(event.target.value)
      }

      const handleSubmit = async(event) =>{
        event.preventDefault()
        console.log(title)
        console.log(description)
        try{
          const response = await api.post('/addToDo', {
            userId: user._id, 
            listName: 'Today',
            title: title, 
            description: description
          }, {
            headers: {
              'Content-Type': 'application/json',
            },
          })
          const data = response.data; 
          console.log(data)
        } catch(error){
          console.log("error sending post request")
        }
      }

            

    return(
        <div>
        <Dialog
            open={open}
            onClose={handleClose}>
        <DialogTitle>Add a new to-do</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            required
             id="outlined-basic" 
            name="title"
            label="Title"
            fullWidth
            variant="standard"
            onChange = {handleTitleChange}
          />
           <TextField
            autoFocus
            required
            margin="dense"
            id="name"
            name="description"
            label="Description"
            fullWidth
            multiline
            rows = {5}
            variant="standard"
            onChange = {handleDescriptionChange}
          />
        </DialogContent>
        <DialogActions sx = {{marginLeft: '200px'}}>
          <Button onClick={handleClose} variant = "outlined">Cancel</Button>
          <Button type="submit" variant = "contained" onClick = {handleSubmit}>Add</Button>
        </DialogActions>
      </Dialog>
        </div>
    )
}
export default NewTodoForm;
