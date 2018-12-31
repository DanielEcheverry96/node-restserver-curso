const express = require('express');
const Usuario = require('../models/usuario');
const bcrypt = require('bcryptjs');
const app = express();


app.get('/usuario', (req, res) => {
    res.status(200).send({
        mensaje: 'get usuario LOCAL'
    });
});

app.post('/usuario', (req, res) => {

    let body = req.body;

    let usuario = new Usuario({
        nombre: body.nombre,
        email: body.email,
        password: bcrypt.hashSync(body.password, 10),
        role: body.role
    });

    usuario.save((err, usuarioDB) => {

        if (err) {
            return res.status(400).send({
                ok: false,
                err
            });
        }

        // usuarioDB.password = null;

        res.status(200).send({
            ok: true,
            usuario: usuarioDB
        });
    });

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

module.exports = app;