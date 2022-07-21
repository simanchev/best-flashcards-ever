const React = require('react');
const Layout = require('./Layout');

function Main({ title }) {
  return (
    <Layout title={title}>
      <nav className="navbar bg-light">
        <div className="container-fluid">
          <h1>Flashcards</h1>
          <ul className="nav justify-content-end">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">register</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">login</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">home</a>
            </li>
          </ul>
        </div>
      </nav>
      <div className="container-fluid">
        <h3>Темы вопросов</h3>
      </div>
      <div className="container-fluid">
        <div className="card" style={{ width: '18rem' }}>
          <img src="..." className="card-img-top" alt="..." />
          <div className="card-body">
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="card" style={{ width: '18rem' }}>
          <img src="..." className="card-img-top" alt="..." />
          <div className="card-body">
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="card" style={{ width: '18rem' }}>
          <img src="..." className="card-img-top" alt="..." />
          <div className="card-body">
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
        </div>
      </div>
    </Layout>
  );
}

module.exports = Main;
