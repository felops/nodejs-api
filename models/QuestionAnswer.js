module.exports = function(sequelize, DataTypes) {
  return sequelize.define('QuestionAnswer', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    question: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'Question',
        key: 'id'
      }
    },
    option: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'QuestionOption',
        key: 'id'
      }
    }
  }, {
    tableName: 'QuestionAnswer'
  })
}
