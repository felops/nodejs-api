module.exports = (app, models) => {
  app.post('/api/question', (req, res) => {
    models.entity['Question'].create(req.body).then((data) => {
      res.json({
        data: data.dataValues,
        msg: 'Cadastrado com sucesso!'
      })
    })
  })
}
