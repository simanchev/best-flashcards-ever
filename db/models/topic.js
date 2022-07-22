const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Topic extends Model {
    static associate({ UserTopic, QuestionAnswer, User }) {
      Topic.hasMany(QuestionAnswer, { foreignKey: 'id_topic', as: 'topic' });

      Topic.belongsToMany(User, { through: UserTopic, foreignKey: 'id_topic', otherKey: 'id_user' });
    }
  }
  Topic.init({
    title: DataTypes.TEXT,
  }, {
    sequelize,
    modelName: 'Topic',
  });
  return Topic;
};
