module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Aluno', {
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
      allowNull: true
    },
    senha: {
      type: "BINARY(64)",
      allowNull: true
    },
    classe: {
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
