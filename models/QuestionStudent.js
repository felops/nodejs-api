module.exports = function(sequelize, DataTypes) {
  return sequelize.define('QuestionStudent', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    student: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    examQuestion: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'ExamQuestion',
        key: 'id'
      }
    },
    questionOption: {
      type: DataTypes.BIGINT,
      references: {
        model: 'QuestionOption',
        key: 'id'
      }
    },
    dateStart: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.literal('NOW()')
    },
    dateEnd: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.literal('NOW()')
    }
  }, {
    tableName: 'QuestionStudent'
  })
}
