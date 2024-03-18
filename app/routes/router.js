//IMPORTING PACKAGE
const express = require('express');
//IMPORTING express Router
//This method is built into express and it allows us to chain directories the way we want.
// ex. https://localhost:4000/movies
//     https://localhost:4000/directors
const router = express.Router()


router.use('/movies', require('./api/movieroutes'))

router.use('/directors', require('./api/directorroutes'))


module.exports = router;