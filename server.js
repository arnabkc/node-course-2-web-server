'use strict';

const express = require('express');

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

app.listen(3000, () => {
    console.log('Server started on port 3000');
});