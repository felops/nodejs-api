module.exports = (app, models) => {
  app.get('/api/professor/:id/exam/', (req, res) => {
    models.entity['Exam'].findAll({
      include: [
        { model: models.entity['Class'] },
        { model: models.entity['Discipline'] }
      ],
      where: {
        professor: req.params.id,
      },
      order: [
        ['dateStart', 'DESC']
      ]
    }).then((data) => {
      res.json(data)
    })
  })

  app.get('/api/professor/:professor/exam/:exam', (req, res) => {
    models.entity['Exam'].findAll({
      where: {
        id: req.params.exam,
        professor: req.params.professor,
      },
      order: [
        ['dateStart', 'DESC']
      ]
    }).then((data) => {
      res.json(data)
    })
  })
}
