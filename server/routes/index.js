const express = require('express');
const route = express.Router();
const {getExpress} = require('../controller');

route.get('/', getExpress);

module.exports = route;
