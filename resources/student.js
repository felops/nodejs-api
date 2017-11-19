module.exports = (app, models) => {
  app.post('/api/student/:student/exam/:exam/question/:question', (req, res) => {
    if(req.params.question != req.body.nextQuestion) {
      models.entity['QuestionStudent'].create({
        student: req.params.student,
        examQuestion: req.body.nextQuestion
      })
    }

    if(req.params.question) {
      models.entity['QuestionStudent'].update({
        dateEnd: models.sequelize.literal('NOW()'),
        questionOption: req.body.questionOption
      }, {
        where: {
          examQuestion: req.params.question,
          student: req.params.student
        }
      }).then(() => {
        res.json({
          data: true,
          msg: 'Cadastrado com sucesso!'
        })
      })
    }
  })
}
