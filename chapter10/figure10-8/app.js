const express = require('express');
const app = express();
const path  = __dirname + '/views/';
const port = 3000;




app.get('/', (req, res) => {
    res.send("Hello World");
});

app.use(require('./controllers'));

app.listen(port,() => { 
 console.log(`Running on port: ${port}`);    
});