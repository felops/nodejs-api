module.exports = (app, models) => {
  app.get('/api/question', (req, res) => {
    models.entity['Question'].findAll({
      include: [
        { model: models.entity['DisciplineField'] }
      ]
    }).then((data) => {
      res.json(data)
    })
  })

  app.post('/api/question/', (req, res) => {
    models.entity['Question'].create(req.body).then((data) => {
      res.json({
        data: data.dataValues,
        msg: 'Cadastrado com sucesso!'
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
