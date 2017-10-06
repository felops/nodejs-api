module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Questao', {
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
    ano: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    fonte: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'QuestaoFonte',
        key: 'Codigo'
      }
    },
    nivel: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'QuestaoNivel',
        key: 'Codigo'
      }
    }
  }, {
    tableName: 'Questao'
  });
};
