const express = require('express');
const fs = require('fs');
const xml2js = require('xml2js');
const app = express();
const path = require('path');


app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs');
const parser = new xml2js.Parser();

app.get('/', (req, res) => {
    fs.readFile('./data.xml', (err, data) => {
        parser.parseStringPromise(data).then(result => {
            res.render('index', { datalist: result.Data.Kisi });
        })
    })
})


app.listen(8000, () => {
    console.log('Server Çalısıyor...')
})