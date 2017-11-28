module.exports = (app, models) => {
  app.get('/api/disciplineField', (req, res) => {
    models.entity['DisciplineField'].findAll({
      include: [
        { model: models.entity['Discipline'] }
      ]
    }).then((data) => {
      res.json(data)
    })
  })

  app.post('/api/disciplineField', (req, res) => {
    models.entity['DisciplineField'].create(req.body).then((data) => {
      res.json({
        data: data.dataValues,
        msg: 'Cadastrado com sucesso!'
      })
    })
  })

  app.put('/api/disciplineField/:id', (req, res) => {
    models.entity['DisciplineField'].update(req.body, {
      where: { id: req.params.id }
    }).then((data) => {
      res.json({
        data: true,
        msg: 'Alterado com sucesso!'
      })
    })
  })

  app.delete('/api/disciplineField/:id', (req, res) => {
    models.entity['DisciplineField'].destroy({
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
