//import modules
const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan')
const cors = require('cors')
require("dotenv").config();


//app
const app = express();


//db
mongoose.connect(process.env.MONGO_URI, {}).then(() => console.log("DB CONNECTED"))
    .catch(err => console.log("ERROR " + err));



//middleware
app.use(morgan("dev"));
app.use(cors({origin: true, credentials:true}));

//routes
const routes = require('./routes/test')
app.use("/", tes)


//port
const port = 8080;

//listener 
const server = app.listen(port, () =>console.log("Server is running on port 8080"))