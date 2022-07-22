const authRouter = require('express').Router();
const bcrypt = require('bcrypt');
const { User } = require('../db/models');
const Reg = require('../views/Reg');
const Login = require('../views/Login');

authRouter.get('/reg', async (req, res) => {
  try {
    res.renderComponent(Reg, {});
  } catch {
    console.log('Не удалось Зарегистрироваться');
  }
});

authRouter.post('/reg', async (req, res) => {
  try {
    const {
      email, password, name, passwordrepeat,
    } = req.body;
    const user = await User.findOne({
      where:
        { email },
    });
    if (password !== passwordrepeat) {
      res.json('Пароли не совпадают, пожалуйста попробуйте снова!');
    }
    if (user) {
      res.json('Йоу бро, такие лица уже есть на нашем районе, так повтори же кто ты? ( такой пользователь уже есть в системе)');
    }
    const hash = await bcrypt.hash(password, 10);
    await User.create({
      name,
      email,
      password: hash,

    });
    res.redirect('/');
  } catch {
    console.log('Что-то случилось, ошибка, попробуйте еще раз');
  }
});
authRouter.get('/login', async (req, res) => {
  try {
    const { user } = req.session;
    console.log('routerconsole ---- ', user);

    res.renderComponent(Login, { user });
  } catch {
    console.log('Не удалось Войти');
  }
});
authRouter.post('/login', async (req, res) => {
  try {
    const { name, password } = req.body;
    const user = await User.findOne({
      where: { name },
    });
    if (!user) {
      res.json({ status: false, errorMessage: 'Такого пользователя нет!' });
      return;
    }
    const authOk = await bcrypt.compare(password, user.password);
    if (!authOk) {
      res.json({ status: false, errerMessage: 'пароль неверен!' });
      return;
    }
    req.session.user = user;
    res.redirect('/');
  } catch (error) {
    // console.log(req.body.email);
    // console.log(error.message);
    res.status(500).json({ errorMessage: error.message });
  }
})
  .get('/logout', async (req, res) => {
    req.session.destroy();
    res.clearCookie('user_sid');
    res.redirect('/');
  });
module.exports = authRouter;
