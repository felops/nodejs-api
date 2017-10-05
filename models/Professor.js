module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Professor', {
    Codigo: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    Nome: {
      type: DataTypes.STRING(128),
      allowNull: false
    },
    Email: {
      type: DataTypes.STRING(128),
      allowNull: false
    },
    Senha: {
      type: "BINARY(64)",
      allowNull: false
    }
  }, {
    tableName: 'Professor'
  });
};
