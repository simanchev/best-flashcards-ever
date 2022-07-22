const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class QuestionAnswer extends Model {
    static associate({ Topic }) {
      QuestionAnswer.belongsTo(Topic, { foreignKey: 'id_topic' });
    }
  }
  QuestionAnswer.init({
    id_topic: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Topics',
        key: 'id',
      },
    },
    question: DataTypes.TEXT,
    answer_1: DataTypes.TEXT,
    answer_2: DataTypes.TEXT,
    correct_answer: DataTypes.TEXT,
  }, {
    sequelize,
    modelName: 'QuestionAnswer',
  });
  return QuestionAnswer;
};
