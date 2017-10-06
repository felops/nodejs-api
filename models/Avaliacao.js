module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Avaliacao', {
    codigo: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    data: {
      type: DataTypes.DATE,
      allowNull: false
    },
    professor: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'Professor',
        key: 'Codigo'
      }
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
    tableName: 'Avaliacao'
  });
};
