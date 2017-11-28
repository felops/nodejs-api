module.exports = (app, models) => {
  app.get('/api/question', (req, res) => {
    models.entity['Question'].findAll({
      include: [
        { model: models.entity['DisciplineField'],
          include: [{ model: models.entity['Discipline'] }]
        }
      ]
    }).then((data) => {
      res.json(data)
    })
  })

  app.post('/api/question/', (req, res) => {
    models.entity['Question'].create(req.body).then((data) => {
      let question = data.dataValues.id
      models.entity['QuestionOption'].bulkCreate([
        { option: req.body.option1, question: question },
        { option: req.body.option2, question: question },
        { option: req.body.option3, question: question },
        { option: req.body.option4, question: question }
      ]).then((data) => {
        models.entity['QuestionAnswer'].create({
          question: question,
          option: data[req.body.rightOption - 1].dataValues.id
        }).then((data) => {
          res.json({
            data: data,
            msg: 'Cadastrado com sucesso!'
          })
        })
      })
    })
  })

  app.put('/api/question/:id', (req, res) => {
    models.entity['Question'].update(req.body, {
      where: { id: req.params.id }
    }).then((data) => {
      res.json({
        data: true,
        msg: 'Alterado com sucesso!'
      })
    })
  })

  app.delete('/api/question/:id', (req, res) => {
    models.entity['Question'].destroy({
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
