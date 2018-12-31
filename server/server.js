require('./config/config');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = process.env.PORT;

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/usuario', (req, res) => {
    res.status(200).send({
        mensaje: 'get usuario'
    });
});

app.post('/usuario', (req, res) => {

    const body = req.body;

    if (body.nombre === undefined) {
        res.status(400).send({
            ok: false,
            mensaje: 'El nombre es necesario'
        });
    } else {
        res.status(200).send({
            usuario: body
        });
    }


});

app.put('/usuario/:id', (req, res) => {

    let id = req.params.id;

    res.status(200).send({
        id
    });
});

app.delete('/usuario/:id', (req, res) => {
    res.status(200).send({
        mensaje: 'delete usuario'
    });
});

app.listen(port, () => {
    console.log(`Servidor funcionando en http://localhost:${ port }`);
});