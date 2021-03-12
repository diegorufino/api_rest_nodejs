const mysql = require('mysql2');

var pool = mysql.createPool({
    "user": "root", //process.env.MYSL_USER
    "password": "", //process.env.MYSL_PASSWORD
    "database": "ecommerce", //process.env.MYSL_DATABASE
    "host": "locahost", //process.env.MYSL_HOST
    "port": 3306 //process.env.MYSL_PORT
});

exports.pool = pool;