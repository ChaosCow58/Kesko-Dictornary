const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');

app.get('/', (_req, res) => {
    res.render('index.ejs');
});

app.get('/dictionary', (_req, res) => {
    res.render('dictionary.ejs', {root: __dirname});
});

app.listen(5000, () => {
    console.log('Server started!');
});
