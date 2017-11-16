module.exports = (app, models) => {
  app.get('/api/class/:id/exam', (req, res) => {
    models.entity['Exam'].findAll({
      where: {
        class: req.params.id,
      },
      order: [
        ['dateStart', 'DESC']
      ]
    }).then((data) => {
      res.json(data)
    })
  })

  app.get('/api/class/:id/exam/available', (req, res) => {
    let now = models.sequelize.literal('NOW()')

    models.entity['Exam'].findAll({
      where: {
        class: req.params.id,
        dateStart: {
           [models.Sequelize.Op.lt]: now
        },
        dateEnd: {
          [models.Sequelize.Op.lt]: now
        },
      }
    }).then((data) => {
      res.json(data)
    })
  })
}
