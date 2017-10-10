module.exports = function(sequelize, DataTypes) {
  return sequelize.define('QuestionSource', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    source: {
      type: DataTypes.STRING(128),
      allowNull: false
    }
  }, {
    tableName: 'QuestionSource'
  });
};
