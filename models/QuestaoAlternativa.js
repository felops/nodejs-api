module.exports = function(sequelize, DataTypes) {
  return sequelize.define('QuestaoAlternativa', {
    codigo: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    descricao: {
      type: DataTypes.STRING(1024),
      allowNull: false
    },
    questao: {
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
