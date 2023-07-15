const express = require('express');
const app = express();

// const greeting = ("Good Afternoon")

app.get('/greeting', (req, res) => {
    res.send('Good Afternoon, stranger');
});

app.get('/greeting/:name', (req, res) => {
    const name = req.params.name;
    res.send (`How goes it? ${name}!`)
});

app.listen(3000, () => {
    console.log('listening');
});