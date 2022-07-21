const React = require('react');
const Layout = require('./Layout');
const TopicList = require('./TopicList');
const Nav = require('./Nav');


function Main({ title, arrTopics=[ {id: 1, title: 'topic 1' }, { id: 2, title: 'topic 2' }, { id: 3, title: 'topic 3' } ] }) {
  return (
    <Layout title={title}>
      <Nav />
      <div className="container-fluid">
        <h3 style={{ textAlign: 'center' }}>Тему выбирай</h3>
      </div>
      <div className="container-fluid">
        <TopicList arrTopics={arrTopics} />
      </div>
    </Layout>
  );
}

module.exports = Main;
