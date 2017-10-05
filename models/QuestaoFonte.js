module.exports = function(sequelize, DataTypes) {
  return sequelize.define('QuestaoFonte', {
    Codigo: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    Fonte: {
      type: DataTypes.STRING(128),
      allowNull: false
    }
  }, {
    tableName: 'QuestaoFonte'
  });
};
