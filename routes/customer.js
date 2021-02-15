/**
 * Customers Routing
 */

const router = require("express").Router();
let Customer = require("../models/customer.model");

router.route("/").get((req, res) => {
  Customer.find()
    .then((et_entityset) => res.json(et_entityset))
    .catch((err) => res.status(400).json(`Error: ${err}`));
});

router.route("/add").post((req, res) => {
  const usnam = req.body.usnam,
    name = req.body.name.toUpperCase(),
    lastName = req.body.lastName.toUpperCase();

  const customer = new Customer({ usnam, name, lastName });

  customer
    .save()
    .then((es_entity) => res.status(201).json(es_entity))
    .catch((err) => res.status(400).json(`Error: ${err}`));
});

module.exports = router;
