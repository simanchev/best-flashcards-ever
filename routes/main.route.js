const router = require('express').Router();
const ReactDOMServer = require('react-dom/server');
const React = require('react');
const Main = require('../views/Main');
const { Topic } = require('../db/models');

/* GET home page. */
router.get('/', async (req, res) => {
  const arrTopics = await Topic.findAll({ raw: true });
  const main = React.createElement(Main, { title: 'title', arrTopics });
  const html = ReactDOMServer.renderToStaticMarkup(main);
  console.log(arrTopics);
  res.write('<!DOCTYPE html>');
  res.end(html);
});

module.exports = router;
