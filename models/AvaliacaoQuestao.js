module.exports = function(sequelize, DataTypes) {
  return sequelize.define('AvaliacaoQuestao', {
    Codigo: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    Avaliacao: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'Avaliacao',
        key: 'Codigo'
      }
    },
    Questao: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'Questao',
        key: 'Codigo'
      }
    },
    AlternativaCerta: {
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
