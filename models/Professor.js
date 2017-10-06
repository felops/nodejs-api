module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Professor', {
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
    email: {
      type: DataTypes.STRING(128),
      allowNull: false
    },
    senha: {
      type: "BINARY(64)",
      allowNull: false
    }
  }, {
    tableName: 'Professor'
  });
};
