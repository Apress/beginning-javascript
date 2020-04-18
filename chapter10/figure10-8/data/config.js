const mysql = require('mysql');
const config = {
    host:'localhost',
    user:'root',
    password:'root',
    database:'api',
    port:'8889'
}

const pool = mysql.createPool(config);
module.exports = pool;