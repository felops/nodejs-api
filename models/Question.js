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
    year: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    source: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'QuestaoFonte',
        key: 'Codigo'
      }
    },
    level: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'QuestionLevel',
        key: 'Codigo'
      }
    }
  }, {
    tableName: 'Question'
  });
};
