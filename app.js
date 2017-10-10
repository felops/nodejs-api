const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const models = require('./models')

const Sequelize = require('sequelize')
const sequelize = new Sequelize('ARANDU', 'root', '', {dialect: 'mysql'})

app.use(express.json());
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

models.sequelize.sync().then(()  => {
  //create routes
  for(let model in models.entity) {
    let route = '/api/' +
                model.substr(0,1).toLowerCase() +
                model.substr(1,model.length);

    app.get(route, (req, res) => {
      models.entity[model].all().then((data) => {
        res.json(data)
      })
    })

    app.post(route, (req, res) => {
      models.entity[model].create(req.body)
        .then((data) => {
          res.json({
            data: data,
            msg: 'Cadastrado com sucesso!'
          })
        }).catch(function (err) {
          res.json({
            data: false,
            msg: err
          })
        });
    })
  }

  app.listen(3000);

  // add fake data for testing
  models.entity['Professor'].create({
    name: 'Fernando',
    email: 'fernando@gmail.com',
    password: 'senha123'
  })

  models.entity['Discipline'].create({name:'Matemática'})
  models.entity['Discipline'].create({name:'Português'})
  models.entity['Discipline'].create({name:'História'})

  models.entity['Class'].create({name:'1A'})
  models.entity['Class'].create({name:'1B'})
  models.entity['Class'].create({name:'2A'})
  models.entity['Class'].create({name:'2B'})

  models.entity['QuestionSource'].create({source:'ENEM'})
  models.entity['QuestionSource'].create({source:'FUVEST'})

  models.entity['QuestionLevel'].create({name:'A'})
  models.entity['QuestionLevel'].create({name:'B'})
  models.entity['QuestionLevel'].create({name:'C'})

  models.entity['Question'].create({
    id: 1,
    question: 'Responda:',
    year: 2016,
    level: 2,
    source: 1
  });

  models.entity['QuestionOption'].create({
    option: 'Resposta 1',
    question: 1
  });

  models.entity['QuestionOption'].create({
    option: 'Resposta 2',
    question: 1
  });

  models.entity['QuestionOption'].create({
    option: 'Resposta 3',
    question: 1
  });

  models.entity['QuestionOption'].create({
    option: 'Resposta 4',
    question: 1
  });

  models.entity['Exam'].create({
    class: 1,
    discipline: 1,
    professor: 1
  });

  models.entity['ExamQuestion'].create({
    exam: 1,
    question: 1
  });
});
