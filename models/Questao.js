module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Questao', {
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
    Ano: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    Fonte: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'QuestaoFonte',
        key: 'Codigo'
      }
    },
    Nivel: {
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
