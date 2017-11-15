module.exports = function(sequelize, DataTypes) {
  return sequelize.define('DisciplineField', {
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
    discipline: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'Discipline',
        key: 'id'
      }
    }
  }, {
    tableName: 'DisciplineField'
  })
}
