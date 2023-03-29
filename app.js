const express = require('express');
const path = require('path');
const fs = require('fs');
const bodyparser = require('body-parser');

const wordJSON = require('./public/databases/words.json');
const verbJSON = require('./public/databases/verbs.json');
const { name } = require('ejs');

const words = JSON.parse(JSON.stringify(wordJSON));
const verbs = JSON.parse(JSON.stringify(verbJSON));

const app = express();

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: true}));

app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'views'));
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

app.get('/create', (req, res) => {
    res.render('createWord.ejs');
});

app.post('/add', (req, res) => {
    // data = req.body;
    // console.log(data);
    for (const word in words) {
        if (words[name] === "group" + req.body.group) {
            console.log("Yes");
        }
        console.log(words);
    }
    // fs.writeFile('./public/databases/words.json', 'words', (err, data) => {
    //     if (err) throw err;
      
        
    
    // });
    res.redirect('/create')
});

app.get('/dictionary/A', (req, res) => {
    console.log(words);
    res.render('AWords.ejs', {
        words
    });
});

app.get('/dictionary/B', (req, res) => {
    res.render('BWords.ejs', {
        words
    });
});

app.get('/dictionary/D', (_req, res) => {
    res.render('DWords.ejs', {
        words
    });
});

app.get('/dictionary/E', (_req, res) => {
    res.render('EWords.ejs', {
        words
    });
});

app.get('/dictionary/F', (_req, res) => {
    res.render('FWords.ejs', {
        words
    });
});

app.get('/dictionary/G', (_req, res) => {
    res.render('GWords.ejs', {
        words
    });
});

app.get('/dictionary/H', (_req, res) => {
    res.render('HWords.ejs', {
        words
    });
});

app.get('/dictionary/I', (_req, res) => {
    res.render('IWords.ejs', {
        words
    });
});

app.get('/dictionary/J', (_req, res) => {
    res.render('JWords.ejs', {
        words
    });
});

app.get('/dictionary/K', (_req, res) => {
    res.render('KWords.ejs', {
        words
    });
});

app.get('/dictionary/L', (_req, res) => {
    res.render('LWords.ejs', {
        words
    });
});

app.get('/dictionary/M', (_req, res) => {
    res.render('MWords.ejs', {
        words
    });
});

app.get('/dictionary/N', (_req, res) => {
    res.render('NWords.ejs', {
        words
    });
});

app.get('/dictionary/O', (_req, res) => {
    res.render('OWords.ejs', {
        words
    });
});

app.get('/dictionary/P', (_req, res) => {
    res.render('PWords.ejs', {
        words
    });
});

app.get('/dictionary/Q', (_req, res) => {
    res.render('QWords.ejs', {
        words
    });
});

app.get('/dictionary/R', (_req, res) => {
    res.render('RWords.ejs', {
        words
    });
});

app.get('/dictionary/S', (_req, res) => {
    res.render('SWords.ejs', {
        words
    });
});

app.get('/dictionary/T', (_req, res) => {
    res.render('TWords.ejs', {
        words
    });
});

app.get('/dictionary/U', (_req, res) => {
    res.render('UWords.ejs', {
        words
    });
});

app.get('/dictionary/V', (_req, res) => {
    res.render('VWords.ejs', {
        words
    });
});

app.get('/dictionary/W', (_req, res) => {
    res.render('WWords.ejs', {
        words
    });
});

app.get('/dictionary/X', (_req, res) => {
    res.render('XWords.ejs', {
        words
    });
});

app.get('/dictionary/Y', (_req, res) => {
    res.render('ZWords.ejs', {
        words
    });
});

app.get('/dictionary/Z', (_req, res) => {
    res.render('ZWords.ejs', {
        words
    });
});


app.get('/dictionary/verbs', (_req, res) => {
    res.render('verbs.ejs', {
        verbs
    });
});

app.listen(5000, () => {
    console.log('Server started!');
});
