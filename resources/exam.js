module.exports = (app, models) => {
  app.get('/api/exam', (req, res) => {
    models.entity['Exam'].findAll({
      include: [
        { model: models.entity['Class'] },
        { model: models.entity['Discipline'] },
        { model: models.entity['Professor'] }
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

  app.get('/api/exam/:exam/student/:student', (req, res) => {
    models.entity['Exam'].findAll({
      include: [{
        model: models.entity['ExamQuestion'],
        include: [
          {
            model: models.entity['StudentAnswer'],
            where: {
              student: req.params.student,
            },
            required: false
          },
          {
            model: models.entity['Question'],
            include: [{
              model: models.entity['QuestionOption']
            }]
          }
        ]
      }],
      where: {
        id: req.params.exam,
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

  function getWhereConditions(params, list) {
    let obj = {}

    for(param in params) {
      if(list.indexOf(param) > -1 && params[param] && params[param] != 0) {
        obj[param] = params[param]
      }
    }
    return obj
  }

  app.post('/api/exam/:id/question', (req, res) => {
    let where = getWhereConditions(req.body, ['year', 'level', 'source', 'disciplineField'])

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

  app.put('/api/exam/:id', (req, res) => {
    models.entity['Exam'].update(req.body, {
      where: { id: req.params.id }
    }).then((data) => {
      res.json({
        data: true,
        msg: 'Alterado com sucesso!'
      })
    })
  })

  app.delete('/api/exam/:id', (req, res) => {
    models.entity['Exam'].destroy({
      where: { id: req.params.id }
    }).then((data) => {
      res.json({
        data: data,
        msg: 'Excluído com sucesso!'
      })
    }).catch((err) => {
      res.json({
        data: false,
        msg: err
      })
    })
  })
}
