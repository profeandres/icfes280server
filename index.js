const express = require('express');
const morgan = require('morgan');
const mongoose =require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(cors());

mongoose.connect('mongodb+srv://andres086:andresZero86@cluster0.rk43i.mongodb.net/myFirstDatabase?retryWrites=true&w=majority').then(() => { console.log("Base de datos conectada")});

const port = 5000 || process.env.PORT 

app.listen(port, () =>{
    console.log(`Server running on port ${port}`)
});





