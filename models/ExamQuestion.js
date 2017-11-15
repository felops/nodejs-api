module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ExamQuestion', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    exam: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'Exam',
        key: 'id'
      }
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
    tableName: 'ExamQuestion'
  })
}
