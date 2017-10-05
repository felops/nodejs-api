const express = require('express')
const app = express()

const Sequelize = require('sequelize')
const sequelize = new Sequelize('ARANDU', 'root', '', {dialect: 'mysql'})

const Disciplina = sequelize.define('Disciplina', {
  Nome: {
    type: Sequelize.STRING
  }
})

app.listen(3000)

app.get('/', function (req, res) {
  res.json({ user: 'Felipe' })
})

app.get('/criar', function (req, res) {
  sequelize.sync()
    .then(() => Disciplina.create({
      Nome: 'Matemática'
    }))
    .then(jane => {
      res.json({ user: 'Felipe' })
    });
})
