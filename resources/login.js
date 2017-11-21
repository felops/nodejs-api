module.exports = (app, models) => {
  app.post('/api/login/student', (req, res) => {
    let post = req.body

    models.entity['Student'].findAll({
      where: {
        id: post.id
      }
    }).then((data) => {
      if(data.length == 1) {
        models.entity['Student'].update({
          name: post.name,
          class: post.class
        }, {
          where: {
            id: post.id
          }
        }).then(() => {
          res.json({
            data: data,
            msg: ''
          })
        })
      } else {
        models.entity['Student'].create({
          id: post.id,
          name: post.name,
          class: post.class
        }).then(student => {
          res.json({
            data: student,
            msg: ''
          })
        })
      }
    })
  })

  app.post('/api/login/professor', (req, res) => {
    let post = req.body

    models.entity['Professor'].findAll({
      where: {
        email: post.email,
        password: post.password
      }
    }).then((data) => {
      if(data.length == 1) {
        res.json({
          data: data,
          msg: ''
        })
      } else {
        res.json({
          data: false,
          msg: 'Senha e/ou usuário inválidos.'
        })
      }
    })
  })
}
