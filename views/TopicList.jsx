const React = require('react');
const TopicCard = require('./TopicCard');

function TopicList({ arrTopics }) {
  return (
    <ul className="topics-list">
      {arrTopics.map((topic) => <TopicCard id={topic.id} topic={topic.title} />)}
    </ul>
  );
}

module.exports = TopicList;
