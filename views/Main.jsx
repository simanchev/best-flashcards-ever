const React = require('react');
const Layout = require('./Layout');
const TopicCard = require('./TopicCard');
const Nav = require('./Nav');

function Main({ title, user }) {
  return (
    <Layout title={title}>
      <Nav user={user}/>
      <div className="container-fluid">
        <h3 style={{ textAlign: 'center' }}>Тему выбирай</h3>
      </div>
      <div className="container-fluid">
        <ul className="topics-list">
          <TopicCard />
          <TopicCard />
          <TopicCard />
          <TopicCard />
        </ul>
      </div>
    </Layout>
  );
}

module.exports = Main;
