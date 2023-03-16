const express = require('express');
const path = require('path');

const sqlite3 = require('sqlite3').verbose();
let table = 'CREATE TABLE WORDS (ID NUMBER)'

const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (_req, res) => {
    res.sendFile('index.html');
});

app.get('/dictionary', (_req, res) => {
    res.sendFile('public/dictionary.html', {root: __dirname});
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

// db.serialize(() => {
//     db.each(`SELECT WordId as id, 
//         Word as word
//     FROM words`, (err, row) => {
//         if (err) {
//             console.error(err.message);
//         }

//         console.log(row.id + "\t" + row.name);
//     });
// });

db.close((err) => {
    if (err) {
        return console.error(err.message);
    }

    console.log('Close the database connection.');
});
