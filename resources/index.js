const express = require('express')
const app = express()
const models = require('../models')
const bodyParser = require('body-parser')
const fs = require("fs")
const path = require("path")

let server = {
  app: app,
  express: express,
  models: models
}

server.app.use(server.express.json())
server.app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
  res.header('Cache-Control', 'private, no-cache, no-store, must-revalidate')
  res.header('Expires', '-1')
  res.header('Pragma', 'no-cache')
  next()
})

fs
  .readdirSync(__dirname)
  .filter(function(file) {
    return (file.indexOf(".") !== 0) && (file !== "index.js")
  })
  .forEach(function(file) {
    require('./' + file)(server.app, server.models)
  })

module.exports = server
