module.exports = (app, models) => {
  app.get('/api/exam', (req, res) => {
    models.entity['Exam'].all({
      order: [
        ['createdAt', 'DESC']
      ]
    }).then((data) => {
      res.json(data)
    })
  })

  app.get('/api/exam/:id', (req, res) => {
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
      res.json(data)
    })
  })

  app.get('/api/exam/available', (req, res) => {
    let now = models.sequelize.literal('NOW()')

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
          let questions = []

          for(let i=0; i<req.body.questions; i++) {
            questions.push({
              exam: exam.id,
              question: data[i].id
            })
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
        })
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
    })
  })

  app.post('/api/exam/:id/question/:id', (req, res) => {
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
  })
}
