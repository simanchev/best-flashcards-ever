require('@babel/register');
const express = require('express');
const mainRouter = require('./routes/main.route');

const app = express();

const PORT = process.env.PORT ?? 3000;

app.use('/', mainRouter);

app.listen(PORT, async () => {
  try {
    console.log(`Server started at ${PORT} port`);
    //   await sequelize.authenticate();
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
});

// app.listen(PORT, () => console.log(`Server work at ${PORT} port`))
