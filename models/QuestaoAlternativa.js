module.exports = function(sequelize, DataTypes) {
  return sequelize.define('QuestaoAlternativa', {
    Codigo: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    Descricao: {
      type: DataTypes.STRING(1024),
      allowNull: false
    },
    Questao: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'Questao',
        key: 'Codigo'
      }
    }
  }, {
    tableName: 'QuestaoAlternativa'
  });
};
