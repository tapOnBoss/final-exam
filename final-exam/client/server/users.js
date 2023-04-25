const express = require('express');
const router = express.Router();
const mysql = require('mysql');

// create a MySQL connection
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '0000',
    database: 'mydb',
});

// test the connection
connection.connect((err) => {
    if (err) {
        console.log('Error connecting to the database');
    throw err;
}
console.log('Connected to MySQL database');
});

// get all users
router.get('/users', (req, res) => {
    const sql = 'SELECT * FROM users';
    connection.query(sql, (err, result) => {
    
    if (err) {
        console.log('Error retrieving users');
        throw err;
    }
    res.send(result);
    });
});

// get a user by id
router.get('/users/:id', (req, res) => {
    const id = req.params.id;
    const sql = `SELECT * FROM users WHERE id = ${id}`;
    connection.query(sql, (err, result) => {
        if (err) {
            console.log(`Error retrieving user with id ${id}`);
            throw err;
        }
        res.send(result);
    });
});

// create a new user
router.post('/users', (req, res) => {
    const { name, email, password } = req.body;
    const sql = `INSERT INTO users (name, email, password) VALUES ('${name}', '${email}', '${password}')`;
    connection.query(sql, (err, result) => {
        if (err) {
            console.log('Error creating user');
            throw err;
        }
        res.send('User created successfully');
    });
});

// update a user
router.put('/users/:id', (req, res) => {
    const id = req.params.id;
    const { name, email, password } = req.body;
    const sql = `UPDATE users SET name = '${name}', email = '${email}', password = '${password}' WHERE id = ${id}`;
    connection.query(sql, (err, result) => {
        if (err) {
            console.log(`Error updating user with id ${id}`);
            throw err;
        }
        res.send('User updated successfully');
    });
});

// delete a user
router.delete('/users/:id', (req, res) => {
    const id = req.params.id;
    const sql = `DELETE FROM users WHERE id = ${id}`;
    connection.query(sql, (err, result) => {
        if (err) {
            console.log(`Error deleting user with id ${id}`);
            throw err;
        }
        res.send('User deleted successfully');
    });
});

module.exports = router;
