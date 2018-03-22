'use strict';

const express = require('express');

const port = process.env.PORT || 3000;

var app = express();

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    res.send({
        name: 'Arnab',
        likes: ['Mountaineering', 'Cricket', 'Reading']
    });
});

app.get('/about', (req, res) => {
    res.send('About page');
});

app.get('/bad', (req, res) => {
    res.send({
        errorMessage: 'Unable to process request'
    })
});

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});