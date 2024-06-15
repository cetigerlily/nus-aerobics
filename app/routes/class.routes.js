module.exports = app => {
  const classes = require("../controllers/class.controller");
  var router = require("express").Router();

  router.post("/", classes.create);

  router.get("/", classes.findAll);
  router.get("/:id", classes.findOne);

  app.use("/classes", router);
}
