module.exports = (app, models) => {
  app.get('/api/disciplineField', (req, res) => {
    models.entity['DisciplineField'].findAll().then((data) => {
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
}
