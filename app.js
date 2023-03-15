const express = require('express');
const path = require('path');

const sqlite3 = require('sqlite3').verbose();

const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (_req, res) => {
    res.sendFile('index.html');
});

app.listen(5000, () => {
    console.log('Server started!');
    
});

let db = new sqlite3.Database('public/words.db', (err) => {
    if (err) {
        return console.error(err.message);
    }

    console.log('Contected to the SQlite database.')
});

db.close((err) => {
    if (err) {
        return console.error(err.message);
    }

    console.log('Close the database connection.');
});
