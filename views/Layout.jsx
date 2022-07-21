const React = require('react');

function Layout({ title, children }) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="/stylesheets/style.css" />
        <script defer src="/js/script.js" />
        <title>{title}</title>
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}

module.exports = Layout;
