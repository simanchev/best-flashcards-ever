const router = require('express').Router();
const ReactDOMServer = require('react-dom/server');
const React = require('react');
const Quest = require('../views/Quest');

/* GET topic questions. */
router.get('/quest', async (req, res) => {
  const questArr = [
    
  ]
  const main = React.createElement(Quest, { arrTopics });
  const html = ReactDOMServer.renderToStaticMarkup(main);
  res.write('<!DOCTYPE html>');
  res.end(html);
});

module.exports = router;