//IMPORTING mysql connection from dbconfig.js
const pool = require('../config/dbconfig')


//CONSTRUCTOR
class MovieDao {

    constructor() {
        this.pool = pool;
    }


    findAll(req, res) {
    
    
        pool.query('SELECT * FROM movieinfo', (err, rows, fields) => {
                console.log(rows)
    
            let merged = rows.map((movie, idx) => {
                return movie
            })
    
        
            res.send(merged)
            });
            //console.log(movies)
    
            // let moviesObject = {
            //     movieinfo: {movies}
            // }
    
        
    
    }


}

module.exports = MovieDao;