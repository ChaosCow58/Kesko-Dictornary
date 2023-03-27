const express = require('express');
const path = require('path');
const fs = require('fs');
const json = require('./public/databases/words.json');

const words = JSON.parse(JSON.stringify(json));

const app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.redirect('/rules');
});

app.get('/rules', (req, res) => {
    res.render('rules.ejs');
});

app.get('/dictionary', (req, res) => {
    
    res.redirect('/dictionary/A');
});

app.get('/dictionary/A', (req, res) => {
    console.log(words);
    res.render('AWords.ejs', {
        words
    });
});

app.get('/dictionary/B', (req, res) => {
    res.render('BWords.ejs', {root: __dirname});
});

app.get('/dictionary/C', (req, res) => {
    res.render('CWords.ejs', {root: __dirname});
});

app.get('/dictionary/D', (_req, res) => {
    res.render('DWords.ejs', {root: __dirname});
});

app.get('/dictionary/E', (_req, res) => {
    res.render('EWords.ejs', {root: __dirname});
});

app.get('/dictionary/F', (_req, res) => {
    res.render('FWords.ejs', {root: __dirname});
});

app.get('/dictionary/G', (_req, res) => {
    res.render('GWords.ejs', {root: __dirname});
});

app.get('/dictionary/H', (_req, res) => {
    res.render('HWords.ejs', {root: __dirname});
});

app.get('/dictionary/I', (_req, res) => {
    res.render('IWords.ejs', {root: __dirname});
});

app.get('/dictionary/J', (_req, res) => {
    res.render('JWords.ejs', {root: __dirname});
});

app.get('/dictionary/K', (_req, res) => {
    res.render('KWords.ejs', {root: __dirname});
});

app.get('/dictionary/L', (_req, res) => {
    res.render('LWords.ejs', {root: __dirname});
});

app.get('/dictionary/M', (_req, res) => {
    res.render('MWords.ejs', {root: __dirname});
});

app.get('/dictionary/N', (_req, res) => {
    res.render('NWords.ejs', {root: __dirname});
});

app.get('/dictionary/O', (_req, res) => {
    res.render('OWords.ejs', {root: __dirname});
});

app.get('/dictionary/P', (_req, res) => {
    res.render('PWords.ejs', {root: __dirname});
});

app.get('/dictionary/Q', (_req, res) => {
    res.render('QWords.ejs', {root: __dirname});
});

app.get('/dictionary/R', (_req, res) => {
    res.render('RWords.ejs', {root: __dirname});
});

app.get('/dictionary/S', (_req, res) => {
    res.render('SWords.ejs', {root: __dirname});
});

app.get('/dictionary/T', (_req, res) => {
    res.render('TWords.ejs', {root: __dirname});
});

app.get('/dictionary/U', (_req, res) => {
    res.render('UWords.ejs', {root: __dirname});
});

app.get('/dictionary/V', (_req, res) => {
    res.render('VWords.ejs', {root: __dirname});
});

app.get('/dictionary/W', (_req, res) => {
    res.render('WWords.ejs', {root: __dirname});
});

app.get('/dictionary/X', (_req, res) => {
    res.render('XWords.ejs', {root: __dirname});
});

app.get('/dictionary/Y', (_req, res) => {
    res.render('ZWords.ejs', {root: __dirname});
});

app.get('/dictionary/Z', (_req, res) => {
    res.render('ZWords.ejs', {root: __dirname});
});


app.get('/dictionary/verbs', (_req, res) => {
    res.render('verbs.ejs', {root: __dirname});
});

app.listen(5000, () => {
    console.log('Server started!');
});
