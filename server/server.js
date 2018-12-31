require('./config/config');
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT;


// Cargando routes
app.use(require('./routes/usuario'));

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());



mongoose.connect('mongodb://localhost:27017/cafe', (err, res) => {

    if (err) throw err;

    console.log('Conexion a la base de datos exitosamente');
});

app.listen(port, () => {
    console.log(`Servidor funcionando en http://localhost:${ port }`);
});