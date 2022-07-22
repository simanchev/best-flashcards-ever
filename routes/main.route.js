const router = require('express').Router();
const ReactDOMServer = require('react-dom/server');
const React = require('react');
const Main = require('../views/Main');
const { Topic } = require('../db/models');

/* GET home page. */
router.get('/', async (req, res) => {
<<<<<<< HEAD
  const { user } = req.session;
  // const arrTopics = await Topic.findAll({ raw: true });
  const arrTopics = [
    { id: 1, title: 'topic-1' },
    { id: 2, title: 'topic-2' },
    { id: 3, title: 'topic-3' },
    { id: 4, title: 'topic-4' }];
  const main = React.createElement(Main, { arrTopics, user });
=======
  const arrTopics = await Topic.findAll({ raw: true });

  const main = React.createElement(Main, { arrTopics });
>>>>>>> a03338a9695d50487cbe462b2158131ce568f54b
  const html = ReactDOMServer.renderToStaticMarkup(main);
  res.write('<!DOCTYPE html>');
  res.end(html);
});

module.exports = router;

// console.log(arrTopics);
// const arrTopics = [
//   { id: 1, title: 'topic-1' },
//   { id: 2, title: 'topic-2' },
//   { id: 3, title: 'topic-3' },
//   { id: 4, title: 'topic-4' }];
