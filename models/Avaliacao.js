module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Avaliacao', {
    Codigo: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    Data: {
      type: DataTypes.DATE,
      allowNull: false
    },
    Professor: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'Professor',
        key: 'Codigo'
      }
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
    tableName: 'Avaliacao'
  });
};
