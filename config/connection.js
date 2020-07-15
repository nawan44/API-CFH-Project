const Pool = require('pg').Pool;

const pool = new Pool ({
    host : 'localhost',
    port : 5432,
    user : 'postgres',
    database : 'db_CFH',
    password : 'rahmat123',

})

module.exports ={
    pool
}