const express = require('express');
const app = express();
const path  = __dirname + '/views/';
const port = 3000;



app.get('/states', (req, res) => {  
    res.sendFile(path + 'states/states.html');
});


app.listen(port,() => { 
 console.log(`Running on port: ${port}`);    
});