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

app.get("/tip/:total/:tipPercentage", (req, res) => {
    const total = parseFloat(req.params.total);
    const tipPercentage = parseFloat(req.params.tipPercentage);
    if (isNaN(total) || isNaN(tipPercentage)) {
      res.status(400).send("Invalid parameters");
      return;
    }
    const tipAmount = (total * tipPercentage) / 100;
    res.send(tipAmount.toString());
  });
  