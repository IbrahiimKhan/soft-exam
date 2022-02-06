const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser')
const expressValidator = require("express-validator")
const cors = require('cors')
require ('dotenv').config();

//importing routes 
const questionRoutes = require('./routes/question')
const authRoutes = require("./routes/auth")
const userRoutes = require("./routes/user")
// our app
const app = express();

// db
mongoose.connect(process.env.DATABASE,{

}).then(()=>{
    console.log('db connected');
})
// morgan middlewares
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(expressValidator());
app.use(cors());


app.use('/api',authRoutes)
app.use('/api',userRoutes)
app.use('/api',questionRoutes)

port = process.env.PORT || 8000

app.listen(port,()=>{
    console.log(`listening to the port ${port}`);
})

