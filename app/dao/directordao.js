const pool = require('../../app/config/dbconfig');


class DirectorDao {

    constructor() {
        this.pool = pool;
    }

    findAll(req, res) {

        pool.query('SELECT * FROM directors', (err, rows) => {
            console.log(rows)

            res.send(rows)
        })
    }

}

module.exports = DirectorDao;