module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Disciplina', {
    codigo: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    nome: {
      type: DataTypes.STRING(128),
      allowNull: false
    }
  }, {
    tableName: 'Disciplina'
  });
};
