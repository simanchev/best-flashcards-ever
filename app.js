require('@babel/register');
const express = require('express');
const path = require('path');
const mainRouter = require('./routes/main.route');
const questRouter = require('./routes/quest.router');

const app = express();

const PORT = process.env.PORT ?? 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/', mainRouter);
app.use('/quest', questRouter);
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
