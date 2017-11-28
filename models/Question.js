module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Question', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    question: {
      type: DataTypes.STRING(1024),
      allowNull: false
    },
    disciplineField: {
      type: DataTypes.INTEGER(11),
      references: {
        model: 'DisciplineField',
        key: 'id'
      }
    },
    year: {
      type: DataTypes.INTEGER(11)
    },
    level: {
      type: DataTypes.INTEGER(11)
    },
    source: {
      type: DataTypes.STRING(256)
    }
  }, {
    tableName: 'Question'
  })
}
