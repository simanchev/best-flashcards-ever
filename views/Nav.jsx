const React = require('react');

function Nav({ user }) {
  console.log('TYT CONSOLE NAV----- ', user);
  return (
    <nav className="navbar bg-light">
      <div className="container-fluid">
        <div>
        <a href="/"><h2>Flashcards</h2></a>
          <p className="title-desc">extra super duper trooper ultra maxi hyper mega game ever</p>
        </div>
        <ul className="nav justify-content-end">

          {user ? (
            <>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/auth/logout">logout</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">home</a>
              </li>
            </>
          )
            : (
              <>
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="auth/reg">register</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/auth/login">login</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/">home</a>
                </li>
              </>
            )}
        </ul>
      </div>
    </nav>
  );
}

module.exports = Nav;
