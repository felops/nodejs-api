module.exports = (app, models) => {
  app.get('/api/discipline', (req, res) => {
    models.entity['Discipline'].findAll().then((data) => {
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
}
