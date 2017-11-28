module.exports = (app, models) => {
  app.get('/api/class', (req, res) => {
    models.entity['Class'].findAll().then((data) => {
      res.json(data)
    })
  })

  app.get('/api/class/:id/exam', (req, res) => {
    models.entity['Exam'].findAll({
      where: {
        class: req.params.id,
      },
      order: [
        ['dateStart', 'DESC']
      ]
    }).then((data) => {
      res.json(data)
    })
  })

  app.get('/api/class/:id/exam/available', (req, res) => {
    let now = models.sequelize.literal('NOW()')

    models.entity['Exam'].findAll({
      where: {
        class: req.params.id,
        dateStart: {
           [models.Sequelize.Op.lt]: now
        },
        dateEnd: {
          [models.Sequelize.Op.gt]: now
        },
      }
    }).then((data) => {
      res.json(data)
    })
  })

  app.post('/api/class', (req, res) => {
    models.entity['Class'].create(req.body).then((data) => {
      res.json({
        data: data.dataValues,
        msg: 'Cadastrado com sucesso!'
      })
    })
  })

  app.put('/api/class/:id', (req, res) => {
    models.entity['Class'].update(req.body, {
      where: { id: req.params.id }
    }).then((data) => {
      res.json({
        data: true,
        msg: 'Alterado com sucesso!'
      })
    })
  })

  app.delete('/api/class/:id', (req, res) => {
    models.entity['Class'].destroy({
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
