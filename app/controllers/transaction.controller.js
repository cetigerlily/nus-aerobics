const db = require("../models");
const Transaction = db.transactions;

exports.create = (req, res) => {
  const { description, amount, date } = req.body;

  Transaction.create({
    description: description,
    amount: amount,
    date: date,    
  })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Error occurred while creating transaction."
      });
    });
};
