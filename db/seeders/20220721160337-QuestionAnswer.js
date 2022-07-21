module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('QuestionAnswers', [
      {
        id_topic: 1,
        question: 'Как называется устаревшая штучка для объявления чего-либо?',
        answer_1: 'mar',
        answer_2: 'kar',
        correct_answer: 'var',
        createdAt: new Date(),
        updatedAt: new Date(),
      }, {
        id_topic: 1,
        question: 'Что за волшебная функция вызывает сама себя?',
        answer_1: 'пупрсия',
        answer_2: 'шмулюрсия',
        correct_answer: 'рекурсия',
        createdAt: new Date(),
        updatedAt: new Date(),
      }, {
        id_topic: 1,
        question: 'В какой день анонсировали жабу скрипт?',
        answer_1: '32 февраля',
        answer_2: '31 августа',
        correct_answer: '18 июля',
        createdAt: new Date(),
        updatedAt: new Date(),
      }, {
        id_topic: 1,
        question: 'Кто душит змею в программировании?',
        answer_1: 'фронтендун',
        answer_2: 'си шарпун',
        correct_answer: 'питонист',
        createdAt: new Date(),
        updatedAt: new Date(),
      }, {
        id_topic: 1,
        question: 'Что самое вкусное в жаба скрипте?',
        answer_1: 'выпилить базу;',
        answer_2: 'жаба',
        correct_answer: 'пройтись forEchом по строке',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('QuestionAnswers', null, {});
  },
};
