module.exports = (sequelize, Sequelize) => {
  const Transaction = sequelize.define("transaction", {
    description: {
      type: Sequelize.STRING
    },
    amount: {
      type: Sequelize.NUMBER
    },
    date: {
      type: Sequelize.DATE
    }
  });
  return Transaction; 
  // TODO: Add in relationship between user PK to transaction
};
