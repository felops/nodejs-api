module.exports = function(sequelize, DataTypes) {
  return sequelize.define('QuestionOption', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    option: {
      type: DataTypes.STRING(1024),
      allowNull: false
    },
    question: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'Question',
        key: 'id'
      }
    }
  }, {
    tableName: 'QuestionOption'
  })
}
