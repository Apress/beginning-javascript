const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send("Hello World");
});

app.get('/states', (req, res) => {
    res.send("This is the States Page");
});

app.post('/states', (req, res) => {
    res.send("This is the States Page POST Request");
});

app.put('/states', (req, res) => {
    res.send("This is the States Page PUT Request");
});

app.delete('/states', (req, res) => {
    res.send("This is the States Page DELETE Request");
});

app.listen(port,() => { 
 console.log(`Running on port: ${port}`);    
});