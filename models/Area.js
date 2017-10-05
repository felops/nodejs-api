module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Area', {
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
    Disciplina: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'Disciplina',
        key: 'Codigo'
      }
    }
  }, {
    tableName: 'Area'
  });
};
