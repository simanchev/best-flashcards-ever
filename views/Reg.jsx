const React = require('react');
const Layout = require('./Layout');
const Nav = require('./Nav');

module.exports = function Reg() {
  // const { user } = React.useContext(Context);
  return (
    <Layout>
      <Nav />
      <html lang="en">
        <head>
          <meta charSet="UTF-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossOrigin="anonymous" />
          <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossOrigin="anonymous" />
          <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossOrigin="anonymous" />
          <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossOrigin="anonymous" />
          <link href="/css/stylesheets.css" rel="stylesheet" />
        </head>
        <div className="form_edit-info form-welcome">
          <p className="admin-title admin-title-welcome">Добро пожаловать!</p>
          <form method="POST" action="/auth/reg" className="bord bord_login">

            <label htmlFor="log" className="">Имя:</label>
            <input type="text" id="log" className="" aria-describedby="loginHelp" name="name" placeholder="example" />

            <label htmlFor="mail" className="">Email:</label>
            <input type="email" id="mail" className="" aria-describedby="mailHelp" name="email" placeholder="example@example.com" />

            <label htmlFor="password" className="">Пароль:</label>
            <input type="password" id="password" className="" name="password" />

            <label htmlFor="password" className="">Повторите пароль:</label>
            <input type="password" id="password" className="" name="passwordrepeat" />
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        </div>
      </html>
    </Layout>
  );
};
