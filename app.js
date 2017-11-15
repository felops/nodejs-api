const resources = require('./resources')
const models = require('./models')
const path = require("path")
const bodyParser = require('body-parser')
const mockData = require('./mock-data')
const login = require('./resources/login')

models.sequelize.sync().then(()  => {
  resources.app.listen(5000)
})
