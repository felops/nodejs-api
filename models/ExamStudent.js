module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ExamStudent', {
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
      allowNull: false,
      references: {
        model: 'QuestionOption',
        key: 'id'
      }
    }
  }, {
    tableName: 'ExamStudent'
  });
};
