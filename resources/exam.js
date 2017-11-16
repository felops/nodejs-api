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
    models.entity['Exam'].findAll({
      include: [{
        model: models.entity['ExamQuestion'],
        include: [{
          model: models.entity['Question'],
          include: [{
            model: models.entity['QuestionOption']
          }]
        }]
      }],
      where: {
        id: req.params.id,
      }
    }).then((data) => {
      res.json(data)
    })
  })

  app.post('/api/exam', (req, res) => {
    models.entity['Exam'].create(req.body).then((data) => {
      res.json({
        data: data.dataValues,
        msg: 'Cadastrado com sucesso!'
      })
    }).catch(function(err) {
      res.json({
        data: false,
        msg: err
      })
    })
  })

  function getFilters(params, list) {
    let obj = {}

    for(param in params) {
      if(list.indexOf(param) > -1 && params[param] && params[param] != 0) {
        obj[param] = params[param]
      }
    }
    return obj
  }

  app.post('/api/exam/:id/question', (req, res) => {
    let where = getFilters(req.body, ['year', 'level', 'source', 'disciplineField'])

    models.entity['Question'].findAll({
      where: where,
      order: [
        models.Sequelize.fn('RAND'),
      ]
    }).then((data) => {
      if(data.length >= req.body.questions) {
        let questions = []

        for(let i=0; i<req.body.questions; i++) {
          questions.push({
            exam: req.params.id,
            question: data[i].dataValues.id
          })
        }

        models.entity['ExamQuestion'].bulkCreate(questions).then((data) => {
          res.json({
            data: data,
            msg: 'Cadastrado com sucesso!'
          })
        }).catch(function(err) {
          res.json({
            data: false,
            msg: 'Erro ao cadastrar questões. Por favor, tente novamente.'
          })
        })
      } else {
        res.json({
          data: false,
          msg: 'Número de questões insuficiente. Existem ' + data.length + ' questões cadastradas com os parâmetros selecionados.'
        })
      }
    }).catch(function(err) {
      res.json({
        data: false,
        msg: 'Erro ao cadastrar questões. Por favor, tente novamente.'
      })
    })
  })
}
