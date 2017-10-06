module.exports = function(sequelize, DataTypes) {
  return sequelize.define('AvaliacaoQuestao', {
    codigo: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    avaliacao: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'Avaliacao',
        key: 'Codigo'
      }
    },
    questao: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'Questao',
        key: 'Codigo'
      }
    },
    alternativaCerta: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'QuestaoAlternativa',
        key: 'Codigo'
      }
    }
  }, {
    tableName: 'AvaliacaoQuestao'
  });
};
