const router = require('express').Router();
const ReactDOMServer = require('react-dom/server');
const React = require('react');
const Main = require('../views/Main');

/* GET home page. */
router.get('/', (req, res) => {
  const { user } = req.session;
  const main = React.createElement(Main, { title: 'Flashcards', user });
  const html = ReactDOMServer.renderToStaticMarkup(main);
  res.write('<!DOCTYPE html>');
  res.end(html);
});

module.exports = router;
