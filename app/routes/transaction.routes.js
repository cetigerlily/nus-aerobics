module.exports = app => {
  const transactions = require("../controllers/transaction.controller");
  var router = require("express").Router();

  router.post("/", transactions.create);

  app.use("/transactions", router);
}
