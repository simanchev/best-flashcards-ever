const React = require('react');
const ReactDOMServer = require('react-dom/server');

function renderComponent(reactComponent, props, options = { doctype: true }) {
  const element = React.createElement(reactComponent, props);
  const html = ReactDOMServer.renderToStaticMarkup(element);
  if (options.doctype) this.write('<!DOCTYPE html>');
  this.end(html);
}
function reactSsr(req, res, next) {
  res.renderComponent = renderComponent;
  next();
}

module.exports = reactSsr;
