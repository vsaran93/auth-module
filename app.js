const express = require('express');
const port = 3007;


const dbConnect = require('./db/connection');

const app = express();

try {
    dbConnect.authenticate();
    console.log('db connection established successfully !');
}
catch(err) {
    console.log('connection error', err);
}

app.listen(port, () => {
    console.log('Application is currently running on Port', port);
})