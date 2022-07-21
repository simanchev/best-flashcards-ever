const React = require('react');

function Nav() {
  return (
    <nav className="navbar bg-light">
      <div className="container-fluid">
        <div>
        <a href="/"><h2>Flashcards</h2></a>
          <p className="title-desc">extra super duper trooper ultra maxi hyper mega game ever</p>
        </div>
        <ul className="nav justify-content-end">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">вход</a>
          </li>
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">регистрация</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

module.exports = Nav;
