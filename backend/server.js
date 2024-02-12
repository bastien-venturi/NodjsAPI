const express = require('express');
const connect = require('./config/db');
const dotenv = require('dotenv').config();
const port = 5000

//connect to dbd

connect();

const app = express();

//middleware qui permet de traiter les requetes en format json
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/post" , require('./routes/post.routes'));

/// lancer server
app.listen(port, () => console.log(`Server is running on port`+ port));
