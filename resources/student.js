module.exports = (app, models) => {
  app.post('/api/student/:student/exam/:exam/question/:question', (req, res) => {
    models.entity['StudentAnswer'].create({
      student: req.params.student,
      examQuestion: req.params.question,
      questionOption: req.body.questionOption,
      dateStart: req.body.dateStart
    }).then(() => {
      res.json({
        data: true,
        msg: 'Cadastrado com sucesso!'
      })
    })
  })
}
