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
  const usnam = req.body.usnam;

  const customer = new Customer({ usnam });

  customer
    .save()
    .then(() => res.json(`Add user ${customer}`))
    .catch((err) => res.status(400).json(`Error: ${err}`));
});

module.exports = router;
