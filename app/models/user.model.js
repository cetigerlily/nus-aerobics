module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define("class", {
    username: {
      type: Sequelize.STRING
    },
    password: {
      type: Sequelize.STRING
    },
    email: {
      type: Sequelize.STRING
    },
    balance: {
      type: Sequelize.INTEGER
    },
  });
  return User;
};
