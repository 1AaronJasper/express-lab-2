const express = require('express');
const app = express();
const PORT = 2000;


app.get('/', (req, res) => {
    res.send('99 Bottles of virgin beer on the wall! '+' <h3> <a href="beer/98"> take one virgin down, pass it around </a> </h3>')
});

app.get('/beer/:number_of_bottles', (req, res)=>{
   
    if (req.params.number_of_bottles==0){
        res.send('No more bottles of virgin beer on the wall!'+`<h3> <a href="/"> Start Over? </a> </h3>`)
    } else {
      
       res.send(`${req.params.number_of_bottles} bottles of virgin beer on the wall`+`<h3> <a href="./${req.params.number_of_bottles-1}"> take one down, pass it around </a> </h3>`)
        
    } 
});


app.listen(PORT, () => console.log("Get Back Mode:", PORT));