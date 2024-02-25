//import modules
const express = require('express');
const mongoose = require('mongoose');
const session = require('express-session');
const morgan = require('morgan')
const cors = require('cors')
const bodyParser = require('body-parser');
require("dotenv").config();
const secretkey = process.env.secretkey


//app
const app = express();


//db


mongoose.connect(process.env.MONGO_URI, {
  })
  .then(() => console.log("DB CONNECTED"))
  .catch(err => console.log("ERROR " + err));

//middleware
app.use(session({
  secret: secretkey,
  resave: false,
  saveUninitialized: true,
}));

app.use(morgan("dev"));
const corsOptions = {
    origin: 'http://localhost:3000', // Replace with the actual origin of your frontend
    credentials: true,
  };
  
app.use(cors(corsOptions));

app.use(bodyParser.json());


app.use(bodyParser.urlencoded({ extended: true }));
//routes
const router = require('./routes/api-router')
app.use('/api',router )

//port
const port = 8080;

//listener 
const server = app.listen(port, () =>console.log("Server is running on port 8080"))