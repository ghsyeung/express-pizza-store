const cors = require('cors');
const express = require('express');

function setupCORS(app) {
  app.use(cors());
  app.options('*', cors());
  app.use(express.json());
  app.use(function (err, req, res, next) {
    console.error(err.stack)
    res.status(500).json(err);
  })
}

module.exports = setupCORS;
