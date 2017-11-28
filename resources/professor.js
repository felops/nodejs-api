module.exports = (app, models) => {
  app.get('/api/professor', (req, res) => {
    models.entity['Professor'].findAll().then((data) => {
      res.json(data)
    })
  })

  app.get('/api/professor/:id/exam/', (req, res) => {
    models.entity['Exam'].findAll({
      include: [
        { model: models.entity['Class'] },
        { model: models.entity['Discipline'] }
      ],
      where: {
        professor: req.params.id,
      },
      order: [
        ['dateStart', 'DESC']
      ]
    }).then((data) => {
      res.json(data)
    })
  })

  app.get('/api/professor/:professor/exam/:exam', (req, res) => {
    models.entity['Exam'].findAll({
      where: {
        id: req.params.exam,
        professor: req.params.professor,
      },
      order: [
        ['dateStart', 'DESC']
      ]
    }).then((data) => {
      res.json(data)
    })
  })

  app.get('/api/professor/:professor/exam/:exam/resultados', (req, res) => {
    models.entity['Exam'].findAll({
      include: [{
        model: models.entity['ExamQuestion'],
        include: [
          { model: models.entity['StudentAnswer'] },
          {
            model: models.entity['Question'],
            include: [{
              model: models.entity['QuestionAnswer']
            }]
          }
        ]
      }],
      where: {
        id: req.params.exam,
        professor: req.params.professor
      }
    }).then((data) => {
      res.json(data)
    })
  })

  app.get('/api/professor/:professor/exam/:exam/question/:question', (req, res) => {
    models.entity['Exam'].findAll({
      include: [{
        model: models.entity['ExamQuestion'],
        where: {
          id: req.params.question,
        },
        include: [
          { model: models.entity['StudentAnswer'], required: false },
          {
            model: models.entity['Question'],
            include: [{
              model: models.entity['QuestionAnswer']
            }]
          }
        ]
      }],
      where: {
        id: req.params.exam,
        professor: req.params.professor
      }
    }).then((data) => {
      res.json(data)
    })
  })

  app.post('/api/professor', (req, res) => {
    models.entity['Professor'].create(req.body).then((data) => {
      res.json({
        data: data.dataValues,
        msg: 'Cadastrado com sucesso!'
      })
    })
  })

  app.put('/api/professor/:id', (req, res) => {
    models.entity['Professor'].update(req.body, {
      where: { id: req.params.id }
    }).then((data) => {
      res.json({
        data: true,
        msg: 'Alterado com sucesso!'
      })
    })
  })

  app.delete('/api/professor/:id', (req, res) => {
    models.entity['Professor'].destroy({
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
