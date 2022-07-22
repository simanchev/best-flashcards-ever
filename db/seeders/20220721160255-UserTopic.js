module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('UserTopics', [
      {
        id_user: 1,
        id_topic: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('UserTopics', null, {});
  },
};
