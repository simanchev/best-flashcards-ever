const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate({ UserTopic, Topic }) {
      User.belongsToMany(Topic, { through: UserTopic, foreignKey: 'id_user', otherKey: 'id_topic' });
    }
  }
  User.init({
    name: {
      allowNull: false,
      unique: true,
      type: DataTypes.TEXT,
    },
    email: {
      allowNull: false,
      unique: true,
      type: DataTypes.TEXT,
    },
    password: {
      allowNull: false,
      type: DataTypes.TEXT,

    },
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};
