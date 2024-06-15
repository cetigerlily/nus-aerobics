const db = require("../models");
const Class = db.classes;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
  const title = req.body.title;
  const description = req.body.description;

  Class.create({ title: title, description: description })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({ message: err.message || "Error occurred while creating class." });
    });
};

exports.findAll = (req, res) => {
  Class.findAll()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({ message: err.message || "Error occurred while retrieving all classes." });
    })
};

exports.findOne = (req, res) => {
  const id = req.query.id;

  Class.findOne({ where: {
    id: id,
  }})
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({ message: err.message || `Error occurred while retrieving class with ID: ${id}.`})
    })
};

