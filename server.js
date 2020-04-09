const express = require('express')
const app = express()
var hbs = require('hbs');

require("./hbs/helpers");

const port = process.env.PORT || 3000;

hbs.registerPartials(__dirname + '/views/partials', function(err) {});
app.use(express.static(__dirname + '/public'));
app.set('view engine', 'hbs');

app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'erick marroquin'
    });
})

app.get('/about', (req, res) => {
    res.render('about', {
        nombre: 'erick marroquin'
    });
})


app.listen(port, () => {
    console.log(`Escuchando peticiones en el puerto ${port}`);
});