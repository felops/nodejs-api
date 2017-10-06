module.exports = function(sequelize, DataTypes) {
  return sequelize.define('DisciplinaArea', {
    codigo: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    nome: {
      type: DataTypes.STRING(128),
      allowNull: false
    },
    disciplina: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'Disciplina',
        key: 'Codigo'
      }
    }
  }, {
    tableName: 'DisciplinaArea'
  });
};
