module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Exam', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    dateStart: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.literal('NOW()')
    },
    dateEnd: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.literal('NOW()')
    },
    class: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'Class',
        key: 'id'
      }
    },
    discipline: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'Discipline',
        key: 'id'
      }
    },
    title: {
      type: DataTypes.STRING(128),
      allowNull: false
    },
    professor: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'Professor',
        key: 'id'
      }
    }
  }, {
    tableName: 'Exam'
  })
}
