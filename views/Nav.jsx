const React = require('react');

function Nav() {
  return (
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
  );
}

module.exports = Nav;
