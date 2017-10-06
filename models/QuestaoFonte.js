module.exports = function(sequelize, DataTypes) {
  return sequelize.define('QuestaoFonte', {
    codigo: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    fonte: {
      type: DataTypes.STRING(128),
      allowNull: false
    }
  }, {
    tableName: 'QuestaoFonte'
  });
};
