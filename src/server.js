const express = require('express'); // required express
const hbs = require('hbs'); // required hbs
const bodyParser = require('body-parser'); // required body-parser

const request = require('request'); // required request


const app = express(); // declare myApp

const port = 9999 || process.env.PORT //declare myPort

const path = require('path'); // required path

// myApp dirPath
const publicDirectory = path.join(__dirname, '../public')

app.use(express.static(publicDirectory))

app.set('view engine', 'hbs');

const viewPath = path.join(__dirname, '../templates/views')
app.set('views', viewPath)

const partialPath = path.join(__dirname, '../templates/partials')
hbs.registerPartials(partialPath)


const newscodeUrl = 'https://newsapi.org/v2/everything?q=eg&from=2021-07-08&sortBy=popularity&apiKey=191bc095692946488fa4fd5a353c61d6'

app.get('/', (req, res) => {
    console.log('Msgg')
    request({ url: newscodeUrl, json: true }, (error, data) => {
        res.render('news', {
            news: data.body.articles
        })
    });
});

app.get("*", (req, res) => {
    res.send("404 not found");
});

app.listen(port, () => { console.log('Listening on port >>> 9999 .. server is up') })