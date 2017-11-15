module.exports = (app, models) => {
  app.post('/api/examStudent', (req, res) => {
    models.entity['ExamStudent'].create(req.body).then(() => {
      res.json({
        data: true,
        msg: 'Cadastrado com sucesso!'
      })
    }).catch(function(err) {
      res.json({
        data: false,
        msg: err
      })
    })
  })
}
