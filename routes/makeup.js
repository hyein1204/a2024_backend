const express = require('express');
const router = express.Router();

const makeup = require('../model/'); 
app.get('/', (req, res) => { 
    res.send('makeup')
});
 

module.exports = router