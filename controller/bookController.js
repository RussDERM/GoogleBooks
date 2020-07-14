const db = require("../models");

//methods for controller

module.exports = {
  //? find
  findAll: function(req, res) {
    console.log('FINDALL PRESENT AND ACCOUNTED FOR')
    db.Book
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(error => res.status(422).json(error));
  },
  findById: function(req, res) {
    db.Book
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(error => res.status(422).json(error));
  },
  //? create
  create: function(req, res) {
    console.log(req.body)
    db.Book
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(error => res.status(422).json(error));
  },
  //? update
  update: function(req, res) {
    db.Book
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(error => res.status(422).json(error));
  },
  //delete
  remove: function(req, res) {
    db.Book
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(error => res.status(422).json(error));
  }
};
