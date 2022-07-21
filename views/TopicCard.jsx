const React = require('react');

function TopicCard({ id, title }) {
  return (
    <li className="card" id={id} style={{ width: '18rem' }}>
      <img src="/src/demo-img.png" className="card-img-top" alt="..." />
      <div className="card-body">
        <p className="card-text">{title}</p>
      </div>
      <button type="button" className="btn btn-primary">Погнали</button>
    </li>
  );
}

module.exports = TopicCard;
