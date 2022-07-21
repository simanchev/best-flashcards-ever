const router = require('express').Router();
const ReactDOMServer = require('react-dom/server');
const React = require('react');
const Quest = require('../views/Quest');

/* GET topic questions. */
router.get('/:id', (req, res) => {
  const { id } = req.params;

  const questObj = {
    question: 'blabla-question',
    answer_1: 'blabla-answer-1',
    answer_2: 'blabla-answer-2',
    answer_correct: 'blabla-answer-3',
  };

  const quest = React.createElement(Quest, questObj);
  const html = ReactDOMServer.renderToStaticMarkup(quest);
  res.write('<!DOCTYPE html>');
  res.end(html);
});

module.exports = router;
