module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Aluno', {
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
      allowNull: true
    },
    Senha: {
      type: "BINARY(64)",
      allowNull: true
    },
    Classe: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'Classe',
        key: 'Codigo'
      }
    }
  }, {
    tableName: 'Aluno'
  });
};
