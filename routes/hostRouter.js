const path = require('path');

const express = require('express');
const hostRouter = express.Router();

const rootDir = require("../utils/pathUtil")

hostRouter.get('/add-home', (req, res, next) => {
  res.sendFile(path.join(rootDir, 'views', 'addHome.html'))
});

const registeredHomes = [];

hostRouter.post('/add-home', (req, res, next) => {
  console.log('Home Registration sucessful for:', req.body, req.body.houseName);
  registeredHomes.push({houseName: req.body.houseName});
  res.sendFile(path.join(rootDir, 'views', 'homeAdded.html'));
})

module.exports = hostRouter;
exports.registeredHomes = registeredHomes; 