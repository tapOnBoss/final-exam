const mysql = require ('mysql');

const connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'0000',
    database:'mydatabase'
});

connection.connect((err) => {
    if (err) {
        console.error('Error connecting to MariaDB database:', err);
    } else{
        console.log('Connected to MariaDB database success!')
    }
});

module.exports = connection;