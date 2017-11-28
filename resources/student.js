module.exports = (app, models) => {
  app.get('/api/student/:student/exam/:exam/resultados', (req, res) => {
    models.entity['Exam'].findAll({
      include: [{
        model: models.entity['ExamQuestion'],
        include: [
          {
            model: models.entity['StudentAnswer'],
            where: {
              student: req.params.student
            }
          },
          {
            model: models.entity['Question'],
            include: [{
              model: models.entity['QuestionAnswer']
            }]
          }
        ]
      }],
      where: {
        id: req.params.exam
      }
    }).then((data) => {
      res.json(data)
    })
  })

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
