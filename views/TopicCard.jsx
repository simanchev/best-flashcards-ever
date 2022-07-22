const React = require('react');

function TopicCard({ id, topic, user }) {
  return (
    <li className="card" style={{ width: '18rem' }}>
      <img src="/src/demo-img.png" className="card-img-top" alt="..." />
      <div className="card-body">
        <p className="card-text">{topic}</p>
        <a href={`quest/${id}`} target="_self" id={id}><button type="button" className="btn btn-primary">Погнали</button></a>
        {/* <button type="button" className="btn btn-secondary">Тут уже были</button> */}
      </div>
    </li>
  );
}

module.exports = TopicCard;
