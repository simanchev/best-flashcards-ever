const router = require('express').Router();
const ReactDOMServer = require('react-dom/server');
const React = require('react');
const Quest = require('../views/Quest');
const { QuestionAnswer } = require('../db/models');

/* GET topic questions. */
router.get('/:id', async (req, res) => {
  const { id } = req.params;
  // console.log(id, 'yhis id');

  const quest1 = await QuestionAnswer.findOne({ raw: true });
  // console.log(quest1, 'yhis id');

  let questObj = {
    check: '',
    question: quest1.question,
    answer_1: quest1.answer_1,
    answer_2: quest1.answer_2,
    answer_correct: quest1.correct_answer,

  };
  let arrAnsw = [questObj.answer_1, questObj.answer_2, questObj.answer_correct];
  arrAnsw = arrAnsw.sort(() => Math.random() - 0.5);
  console.log(arrAnsw, '=====================');

  questObj = {
    check: '',
    question: questObj.question,
    answer_1: arrAnsw[0],
    answer_2: arrAnsw[1],
    answer_correct: arrAnsw[2],

  };

  // console.log(questObj);
  // const questObj = {
  //   check: '',
  //   question: 'blabla-question',
  //   answer_1: 'blabla-answer-1111',
  //   answer_2: 'blabla-answer-2222',
  //   answer_correct: 'blabla-answer-3',
  // };

  const quest = React.createElement(Quest, questObj);
  const html = ReactDOMServer.renderToStaticMarkup(quest);
  res.write('<!DOCTYPE html>');
  res.end(html);
});

router.post('/', async (req, res) => {
  console.log(req.body);
  let check1;
  const arrLast = [5, 10, 15, 20];
  const { answer, question } = req.body;
  const quest1 = await QuestionAnswer.findAll({ raw: true });

  const quest2 = quest1.find((el) => el.question === question);

  const currId = quest2.id;
  if (arrLast.includes(currId)) {
  // кидаем стату
    res.send('Статистика лехи');
  } else {
    const nextObj = quest1.find((el) => el.id === quest2.id + 1);

    const newObj = quest1.find((el) => el.correct_answer === answer && question === el.question);
    if (newObj) {
      check1 = 'ВЕРНО!';
      console.log(check1);
    } else {
      check1 = 'НЕВЕРНО!';
    }

    console.log(newObj);
    let questObj = {
      check: check1,
      question: nextObj.question,
      answer_1: nextObj.answer_1,
      answer_2: nextObj.answer_2,
      answer_correct: nextObj.correct_answer,

    };

    let arrAnsw = [nextObj.answer_1, nextObj.answer_2, nextObj.correct_answer];
    arrAnsw = arrAnsw.sort(() => Math.random() - 0.5);
    console.log(arrAnsw, '=====================');

    questObj = {
      check: check1,
      question: nextObj.question,
      answer_1: arrAnsw[0],
      answer_2: arrAnsw[1],
      answer_correct: arrAnsw[2],

    };

    const quest = React.createElement(Quest, questObj);
    const html = ReactDOMServer.renderToStaticMarkup(quest);
    res.write('<!DOCTYPE html>');
    res.end(html);
  }
});

module.exports = router;
