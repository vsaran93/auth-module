const express = require('express');
const bodyParser = require('body-parser');

const port = 3007;


const dbConnect = require('./db/connection');

const app = express();


//controllers 
const userEndpoint = require('./controller/user/userController');


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())


try {
    dbConnect.authenticate();
    console.log('db connection established successfully !');
}
catch(err) {
    console.log('connection error', err);
}


app.post('/api/user/register', userEndpoint.register)
app.listen(port, () => {
    console.log('Application is currently running on Port', port);
})