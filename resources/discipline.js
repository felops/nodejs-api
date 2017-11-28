module.exports = (app, models) => {
  app.get('/api/discipline', (req, res) => {
    models.entity['Discipline'].findAll().then((data) => {
      res.json(data)
    })
  })

  app.get('/api/discipline/:id/field', (req, res) => {
    models.entity['DisciplineField'].findAll({
      where: {
        discipline: req.params.id
      }
    }).then((data) => {
      res.json(data)
    })
  })

  app.post('/api/discipline', (req, res) => {
    models.entity['Discipline'].create(req.body).then((data) => {
      res.json({
        data: data.dataValues,
        msg: 'Cadastrado com sucesso!'
      })
    })
  })

  app.put('/api/discipline/:id', (req, res) => {
    models.entity['Discipline'].update(req.body, {
      where: { id: req.params.id }
    }).then((data) => {
      res.json({
        data: true,
        msg: 'Alterado com sucesso!'
      })
    })
  })

  app.delete('/api/discipline/:id', (req, res) => {
    models.entity['Discipline'].destroy({
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
