const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const models = require('./models')
const mockData = require('./mock-data')

app.use(express.json())
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
  res.header('Cache-Control', 'private, no-cache, no-store, must-revalidate');
  res.header('Expires', '-1');
  res.header('Pragma', 'no-cache');
  next()
})

models.sequelize.sync().then(()  => {
  // mock data for testing
  // mockData(models)

  // GETs
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

  app.get('/api/onGoingExams', (req, res) => {
    let now = models.sequelize.literal('NOW()');

    models.entity['Exam'].findAll({
      include: [{
        model: models.entity['ExamQuestion'],
        include: [{
          model: models.entity['ExamStudent'],
          where: {
            student: 1
          }
        }]
      }],
      where: {
        'dateStart': {
           [models.Sequelize.Op.lt]: now
        },
        'dateEnd': {
          [models.Sequelize.Op.gt]: now
        },
      }
    }).then((data) => {
      if(data[0].ExamQuestions[0].ExamStudents.length > 0)
        res.json({exam: false})
      else {
        res.json({exam: data[0].ExamQuestions[0].exam})
      }
    })
  })


  // POSTs
  app.post('/api/student/login', (req, res) => {
    let post = req.body

    models.entity['Student'].findAll({
      where: {
        id: post.id
      }
    }).then((data) => {
      if(data.length == 1) {
        res.json({
          data: true,
          msg: ''
        });
      } else {
        models.entity['Student'].create({ id: post.id, name: post.name, class: post.class }).then(task => {
          res.json({
            data: true,
            msg: ''
          });
        }).catch(function(err) {
          res.json({
            data: false,
            msg: err
          })
        })
      }
    }).catch(function(err) {
      res.json({
        data: false,
        msg: err
      })
    })
  })

  app.post('/api/professor/login', (req, res) => {
    let post = req.body

    models.entity['Professor'].findAll({
      where: {
        email: post.email,
        password: post.password
      }
    }).then((data) => {
      if(data.length == 1) {
        res.json({
          data: true,
          msg: ''
        });
      } else {
        res.json({
          data: false,
          msg: 'Senha e/ou usuário inválidos.'
        });
      }
    }).catch(function(err) {
      res.json({
        data: false,
        msg: err
      })
    })
  });

  app.post('/api/examStudent', (req, res) => {
    models.entity['ExamStudent'].create(req.body).then(() => {
      res.json({
        data: true,
        msg: 'Cadastrado com sucesso!'
      })
    }).catch(function(err) {
      res.json({
        data: false,
        msg: err
      })
    })
  });

  app.post('/api/exam', (req, res) => {
    models.entity['Question'].findAll({
      where: {
        year: req.body.year,
        level: req.body.level,
        source: req.body.source
      },
      order: [
        models.Sequelize.fn('RAND'),
      ]
    }).then((data) => {
      if(data.length >= req.body.questions) {
        models.entity['Exam'].create({
          class: req.body.class,
          discipline: req.body.discipline,
          title: req.body.title,
          professor: req.body.professor
        }).then((exam) => {
          let questions = [];

          for(let i=0; i<req.body.questions; i++) {
            questions.push({
              exam: exam.id,
              question: data[i].id
            });
          }

          models.entity['ExamQuestion'].bulkCreate(questions).then(() => {
            res.json({
              data: data,
              msg: 'Cadastrado com sucesso!'
            })
          }).catch(function(err) {
            res.json({
              data: false,
              msg: 'Erro ao cadastrar avaliação.'
            })
          })
        });
      } else {
        res.json({
          data: false,
          msg: 'Número de questões insuficiente para os parâmetros selecionados.'
        })
      }
    }).catch(function(err) {
      res.json({
        data: false,
        msg: 'Erro ao cadastrar avaliação.'
      })
    });
  });
/*
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
        }).catch(function(err) {
          res.json({
            data: false,
            msg: err
          })
        });
    })
  }
*/
  app.listen(3000);
});
