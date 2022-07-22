const { User } = require('../db/models');

module.exports = async function getUser(req, res, next) {
  const userId = req.session.user;
  const user = userId && await User.findByPk(userId.id);
  res.locals.user = user;
  next();
};
