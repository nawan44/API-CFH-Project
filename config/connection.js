const Pool = require('pg').Pool;

const pool = new Pool({
    host: 'localhost',
    port: 5432,
    user: 'postgres',
    database: 'dbCFH1',
    password: 'rahmat123'
})

module.exports = {
    pool
}