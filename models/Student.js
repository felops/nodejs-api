module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Student', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(128),
      allowNull: false
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
  })
}
