module.exports = function(sequelize, DataTypes) {
  return sequelize.define('StudentAnswer', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    student: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'Student',
        key: 'id'
      }
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
    tableName: 'StudentAnswer'
  })
}
