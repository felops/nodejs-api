module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Classe', {
    Codigo: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    Nome: {
      type: DataTypes.STRING(128),
      allowNull: false
    }
  }, {
    tableName: 'Classe'
  });
};
