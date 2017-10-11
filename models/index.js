const fs        = require("fs");
const path      = require("path");
const Sequelize = require("sequelize");
const sequelize = new Sequelize('ARANDU', 'root', '', {dialect: 'mysql'})

let db = {
  entity: {},
  sequelize: sequelize,
  Sequelize: Sequelize
};

fs
  .readdirSync(__dirname)
  .filter(function(file) {
    return (file.indexOf(".") !== 0) && (file !== "index.js");
  })
  .forEach(function(file) {
    let model = sequelize.import(path.join(__dirname, file));
    db.entity[model.name] = model;
  });

Object.keys(db).forEach(function(modelName) {
  if ("associate" in db[modelName]) {
    db.entity[modelName].associate(db);
  }
});

db.entity['ExamQuestion'].belongsTo(db.entity['Question'], {foreignKey: 'question'});
db.entity['Question'].hasMany(db.entity['QuestionOption'], {foreignKey : 'question'});
module.exports = db;
