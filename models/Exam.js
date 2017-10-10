module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Exam', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.literal('NOW()')
    },
    discipline: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'Discipline',
        key: 'id'
      }
    },
    professor: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'Professor',
        key: 'id'
      }
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
    tableName: 'Exam'
  });
};
