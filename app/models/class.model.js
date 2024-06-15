module.exports = (sequelize, Sequelize) => {
  const Class = sequelize.define("class", {
    title: {
      type: Sequelize.STRING
    },
    description: {
      type: Sequelize.STRING
    },
    date: {
      type: Sequelize.DATE
    },
    // TODO: Add in max capacity and booked capacity
  });
  return Class;
};
