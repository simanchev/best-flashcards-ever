module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('QuestionAnswers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      id_topic: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Topics',
          key: 'id',
        },
      },
      question: {
        type: Sequelize.TEXT,
      },
      answer_1: {
        type: Sequelize.TEXT,
      },
      answer_2: {
        type: Sequelize.TEXT,
      },
      correct_answer: {
        type: Sequelize.TEXT,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('QuestionAnswers');
  },
};
