require('@babel/register');
const express = require('express');
<<<<<<< HEAD
const session = require('express-session');
const FileStore = require('session-file-store')(session);
const reactSsrMiddleware = require('./middlewares/ssr');
const authRouter = require('./routes/auth_router');

const app = express();

const sessionConfig = {
  store: new FileStore(), // сессии будут храниться в файлах
  name: 'user_sid', // имя куки для хранения айди сессии
  secret: process.env.SESSION_SECRET ?? '15^^%&^*3', // секретный шифр для шифровки
  resafe: false, // пересохранение куки при каждом запросе
  seveUninitialized: false, // создание сессии без инициализации ключей в req.session
  cookie: {
    maxAge: 1000 * 60 * 60 * 12, // Срок истечения годности куки в миллисекундах
    httpOnly: true, // Серверная установка и удаление куки, по умолчанию true
  },
};

// позволяет запрашивать статичский контент (/public)
app.use(express.static(`${__dirname}/../public`));
// при отправке формы методом POST данные из формы приходят
// не сервер в зашифрованном виде
// эта миддлварка расшифровывает их и кладёт в req.body
app.use(express.urlencoded({ extended: true }));

// расшифровывает json, который отправляется в запросах от клиента
app.use(express.json());

// расшифровывает куки в запросах от клиента
// app.use(cookieParser());

// миддлварка для работы с сессиями
app.use(session(sessionConfig));

// наша миддлварка для более компактного кода рендеринга
app.use(reactSsrMiddleware);

app.use(getUser);

app.use('/auth', authRouter);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Сервачок шуршит, а вода бежит, солнце делает все больше оборотов , мне тут уж больше  ${PORT} лет`);
});
=======
const path = require('path');
const mainRouter = require('./routes/main.route');

const app = express();

const PORT = process.env.PORT ?? 3000;

app.use('/', mainRouter);
app.use(express.static(path.join(__dirname, 'public')));

app.listen(PORT, async () => {
  try {
    console.log(`Server started at ${PORT} port`);
    //   await sequelize.authenticate();
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
});

// app.listen(PORT, () => console.log(`Server work at ${PORT} port`))
>>>>>>> 0912c4a8c02ed3aaa0dc3abc6521a0a8c12e437c
