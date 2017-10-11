const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const models = require('./models')
const mockData = require('./mock-data')

app.use(express.json());
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

models.sequelize.sync().then(()  => {
  // mock data for testing
  // mockData(models)

  // custom routes
  app.get('/api/exams', (req, res) => {
    models.entity['Exam'].all({
      order: [
        ['createdAt', 'DESC']
      ]
    }).then((data) => {
      res.json(data);
    })
  })

  app.get('/api/loadExam/:id', (req, res) => {
    models.entity['ExamQuestion'].findAll({
      include: [{
        model: models.entity['Question'],
        include: [{
          model: models.entity['QuestionOption']
        }]
      }],
      where: {
        exam: req.params.id,
      }
    }).then((data) => {
      res.json(data);
    })
  })

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
});
