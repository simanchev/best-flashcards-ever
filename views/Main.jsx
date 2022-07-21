const React = require('react');
const Layout = require('./Layout');
const TopicList = require('./TopicList');
const Nav = require('./Nav');


function Main({ arrTopics }) {
  return (
    <Layout>
      <Nav />
      <div className="container-fluid">
        <h4 style={{ textAlign: 'center' }}>Тему давай выбирай, ну</h4>
      </div>
      <div className="container-fluid">
        <TopicList arrTopics={arrTopics} />
      </div>
    </Layout>
  );
}

module.exports = Main;
