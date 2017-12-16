const fs        = require("fs")
const path      = require("path")
const Sequelize = require("sequelize")
const sequelize = new Sequelize('ARANDU', 'root', '', {dialect: 'mysql'})

let db = {
  entity: {},
  sequelize: sequelize,
  Sequelize: Sequelize
}

fs
  .readdirSync(__dirname)
  .filter(function(file) {
    return (file.indexOf(".") !== 0) && (file !== "index.js")
  })
  .forEach(function(file) {
    let model = sequelize.import(path.join(__dirname, file))
    db.entity[model.name] = model
  })

Object.keys(db).forEach(function(modelName) {
  if ("associate" in db[modelName]) {
    db.entity[modelName].associate(db)
  }
})

db.entity['ExamQuestion'].belongsTo(db.entity['Question'], {foreignKey: 'question'})
db.entity['Question'].hasMany(db.entity['QuestionOption'], {foreignKey: 'question'})
db.entity['Exam'].hasMany(db.entity['ExamQuestion'], {foreignKey: 'exam'})

db.entity['Exam'].belongsTo(db.entity['Discipline'], {foreignKey: 'discipline'})
db.entity['Discipline'].hasMany(db.entity['Exam'], {foreignKey: 'discipline'})

db.entity['Exam'].belongsTo(db.entity['Class'], {foreignKey: 'class'})
db.entity['Class'].hasMany(db.entity['Exam'], {foreignKey: 'class'})

db.entity['Exam'].belongsTo(db.entity['Professor'], {foreignKey: 'professor'})
db.entity['Professor'].hasMany(db.entity['Exam'], {foreignKey: 'professor'})

db.entity['DisciplineField'].belongsTo(db.entity['Discipline'], {foreignKey: 'discipline'})
db.entity['Discipline'].hasMany(db.entity['DisciplineField'], {foreignKey: 'discipline'})

db.entity['Question'].belongsTo(db.entity['DisciplineField'], {foreignKey: 'disciplineField'})
db.entity['DisciplineField'].hasMany(db.entity['Question'], {foreignKey: 'disciplineField'})

db.entity['ExamQuestion'].hasMany(db.entity['StudentAnswer'], {foreignKey: 'examQuestion'})

db.entity['Question'].hasOne(db.entity['QuestionAnswer'], {foreignKey: 'question'})

module.exports = db
