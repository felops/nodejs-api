const express = require('express')
const app = express()
const models = require('./models');

const Sequelize = require('sequelize')
const sequelize = new Sequelize('ARANDU', 'root', '', {dialect: 'mysql'})

models.sequelize.sync().then(()  => {
   for(let model in models.entity) {
      let route = '/' +
                  model.substr(0,1).toLowerCase() +
                  model.substr(1,model.length);

      app.get(route, (req, res) => {
        models.entity[model].all().then((data) => {
          res.json(data)
        })
      })

      app.post(route, (req, res) => {
        models.entity[model].create({
          ...req.data
        })
        .then(() => {
          res.json({ msg: 'Cadastrado com sucesso!' })
        });
      })
   }

  app.listen(3000);
});
