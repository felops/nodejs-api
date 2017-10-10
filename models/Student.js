module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Student', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING(128),
      allowNull: false
    },
    email: {
      type: DataTypes.STRING(128),
      allowNull: true
    },
    password: {
      type: "BINARY(64)",
      allowNull: true
    },
    class: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'Class',
        key: 'id'
      }
    }
  }, {
    tableName: 'Student'
  });
};
