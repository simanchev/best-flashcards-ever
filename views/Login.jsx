const React = require('react');
const Layout = require('./Layout');
const Nav = require('./Nav');

module.exports = function Login({ user }) {
  console.log('console in Login ----', user);
  return (
    <Layout user={user}>
      <Nav user={user} />
      <html lang="en">

        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Войти</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossOrigin="anonymous" />
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossOrigin="anonymous" />
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossOrigin="anonymous" />
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossOrigin="anonymous" />
        <link href="/css/stylesheets.css" rel="stylesheet" />

        <div className="form_edit-info form-welcome">
          <p className="admin-title admin-title-welcome">Добро пожаловать!</p>
          <form method="post" action="/auth/login" className="bord bord_login">
            <label htmlFor="log" className="">Имя:</label>
            <input type="text" id="log" className="" aria-describedby="loginHelp" name="name" placeholder="example" />
            <label htmlFor="password" className="">Пароль:</label>
            <input type="password" id="password" className="" name="password" />
            <button type="submit" className="edit_form-button">Войти</button>
          </form>
        </div>
      </html>
    </Layout>
  );
};
