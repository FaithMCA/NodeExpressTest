//This is essentially our way to IMPORT in javascript.
const express = require('express');
//app is getting set equal to our EXPRESS METHOD TO RUN OUR SERVER
const app = express();
//This is our localhost port, we will use
const port = 4000;
const router = require('./app/routes/router')
app.use(express.json());
app.use(express.urlencoded({ extended: true,}));
// //our "app" variable is asking for a get request.
// //get request = Give me information from server.
// app.get('/shoe', (req, res) => {
//     res.send("Hello World");
// })
 
 
// app.get('/directors', (req,res) => {
   
//     pool.query('SELECT * FROM directors', (err, rows, fields) => {
//         console.log(rows)
       
//         // let merged = rows.map((directors, idx) => {
//         //     return directors
//         // })
 
//         res.send(rows)
//     })
// })
 
app.listen(port, () => {
    console.log(`App is listening on port ${port}`);
})


app.use('/api', router)