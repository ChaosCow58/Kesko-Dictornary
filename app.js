const express = require('express');
const path = require('path');
const fs = require('fs');
const bodyparser = require('body-parser');

const wordJSON = require('./public/databases/words.json');
const verbJSON = require('./public/databases/verbs.json');

const words = JSON.parse(JSON.stringify(wordJSON));
const verbs = JSON.parse(JSON.stringify(verbJSON));

let isWord = false;
let isVerb = false;

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
    for (const word in words) {
        if (word === "group" + req.body.group && req.body.group !== "Verb" && req.body.type !== "Verb") {
            let newKey = {
                word: req.body.word,
                type: req.body.type,
                pronounce: req.body.pronounce,
                definition: req.body.definition
            };
            words[word].key.push(newKey);
            isWord = true;
        }
    }
    for (const verb in verbs) {
        if ("group" + req.body.group === "groupVerb") {
            let newVerb = {
                verb: req.body.word,
                pronounce: req.body.pronounce,
                definition: req.body.definition
            };
            verbs[verb].key.push(newVerb);
            isVerb = true;
        }
    }   
    if (isWord) {
        fs.writeFile('./public/databases/words.json', JSON.stringify(words), (err) => {
            if (err) {
                console.log(err);
                return;
            }
            console.log("File has been written successfully.");
            res.redirect('/create');
            isWord = false;
        });
    } else if (isVerb) {
        fs.writeFile('./public/databases/verbs.json', JSON.stringify(verbs), (err) => {
            if (err) {
                console.log(err);
                return;
            }
            console.log("File has been written successfully.");
            res.redirect('/create');
            isVerb = false;
        });
    }
   
});

app.get('/dictionary/A', (req, res) => {
    let group = words.groupA.key;
    res.render('words.ejs', {
        group
    });
});

app.get('/dictionary/B', (req, res) => {
    let group = words.groupB.key;
    res.render('words.ejs', {
        group
    });
});

app.get('/dictionary/D', (_req, res) => {
    let group = words.groupD.key;
    res.render('words.ejs', {
        group
    });
});

app.get('/dictionary/E', (_req, res) => {
    let group = words.groupE.key;
    res.render('words.ejs', {
        group
    });
});

app.get('/dictionary/F', (_req, res) => {
    let group = words.groupF.key;
    res.render('words.ejs', {
        group
    });
});

app.get('/dictionary/G', (_req, res) => {
    let group = words.groupG.key;
    res.render('words.ejs', {
        group
    });
});

app.get('/dictionary/H', (_req, res) => {
    let group = words.groupH.key;
    res.render('words.ejs', {
        group
    });
});

app.get('/dictionary/I', (_req, res) => {
    let group = words.groupI.key;
    res.render('words.ejs', {
        group
    });
});

app.get('/dictionary/J', (_req, res) => {
    let group = words.groupJ.key;
    res.render('words.ejs', {
        group
    });
});

app.get('/dictionary/K', (_req, res) => {
    let group = words.groupK.key;
    res.render('words.ejs', {
        group
    });
});

app.get('/dictionary/L', (_req, res) => {
    let group = words.groupL.key;
    res.render('words.ejs', {
        group
    });
});

app.get('/dictionary/M', (_req, res) => {
    let group = words.groupM.key;
    res.render('words.ejs', {
        group
    });
});

app.get('/dictionary/N', (_req, res) => {
    let group = words.groupN.key;
    res.render('words.ejs', {
        group
    });
});

app.get('/dictionary/O', (_req, res) => {
    let group = words.groupO.key;
    res.render('words.ejs', {
        group
    });
});

app.get('/dictionary/P', (_req, res) => {
    let group = words.groupP.key;
    res.render('words.ejs', {
        group
    });
});

app.get('/dictionary/Q', (_req, res) => {
    let group = words.groupQ.key;
    res.render('words.ejs', {
        group
    });
});

app.get('/dictionary/R', (_req, res) => {
    let group = words.groupR.key;
    res.render('words.ejs', {
        group
    });
});

app.get('/dictionary/S', (_req, res) => {
    let group = words.groupS.key;
    res.render('words.ejs', {
        group
    });
});

app.get('/dictionary/T', (_req, res) => {
    let group = words.groupT.key;
    res.render('words.ejs', {
        group
    });
});

app.get('/dictionary/U', (_req, res) => {
    let group = words.groupU.key;
    res.render('words.ejs', {
        group
    });
});

app.get('/dictionary/V', (_req, res) => {
    let group = words.groupV.key;
    res.render('words.ejs', {
        group
    });
});

app.get('/dictionary/W', (_req, res) => {
    let group = words.groupW.key;
    res.render('words.ejs', {
        group
    });
});

app.get('/dictionary/X', (_req, res) => {
    let group = words.groupX.key;
    res.render('words.ejs', {
        group
    });
});

app.get('/dictionary/Y', (_req, res) => {
    let group = words.groupY.key;
    res.render('words.ejs', {
        group
    });
});

app.get('/dictionary/Z', (_req, res) => {
    let group = words.groupZ.key;
    res.render('words.ejs', {
        group
    });
});


app.get('/dictionary/verbs', (_req, res) => {
    let group = verbs.groupVerbs.key
    res.render('words.ejs', {
        group
    });
});

app.listen(5000, () => {
    console.log('Server started!');
});
