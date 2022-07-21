const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class UserTopic extends Model {
    static associate({ User, Topic }) {
      UserTopic.belongsTo(User, { foreignKey: 'id_user' });
      UserTopic.belongsTo(Topic, { foreignKey: 'id_topic' });
    }
  }
  UserTopic.init({
    id_user: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Users',
        key: 'id',
      },
    },
    id_topic: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Topics',
        key: 'id',
      },
    },
    score: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'UserTopic',
  });
  return UserTopic;
};
