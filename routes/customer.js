/**
 * Customers Routing.
 *
 * HTTP Request handling for Customers.
 *
 * @file customer.js
 * @author Tomás A. Sánchez
 * @since 02.22.2021
 */

const router = require("express").Router();
let Customer = require("../models/customer.model");

/**
 * Get entity-set.
 *
 * Retrieves all customers.
 *
 */
router.route("/").get((req, res) => {
  Customer.find()
    .then((et_entityset) => res.json(et_entityset))
    .catch((err) => res.status(400).json(err));
});

/**
 * Get entity.
 *
 * Retrieves an entity by mongoose id.
 */
router.route("/:id").get((req, res) => {
  Customer.findById(req.body.id)
    .exec()
    .then((er_entity) => res.json(er_entity))
    .catch((err) => res.status(404).json(err));
});

/**
 * Get entity.
 *
 * Retrieves a customer by user-name
 */
router.route("/user/:id").get((req, res) => {
  Customer.findOne({ usnam: req.body.id.toUpperCase() })
    .exec()
    .then((er_entity) => res.json(er_entity))
    .catch((err) => res.status(404).json(err));
});

/**
 * Create Entity.
 *
 * Creates a new customer.
 */
router.route("/").post((req, res) => {
  const {
    usnam,
    id,
    name,
    lastName,
    address,
    phone,
    tel,
    birthday,
    mail,
    subscriptions = [],
    payments = [],
  } = req.body;

  const newCustomer = new Customer({
    usnam,
    id,
    name,
    lastName,
    address,
    phone,
    tel,
    birthday,
    mail,
    subscriptions,
    payments,
  });

  newCustomer
    .save()
    .then((es_entity) => res.status(201).json(es_entity))
    .catch((err) => res.status(400).json(err));
});

/**
 * Update entity.
 *
 * Updates an entity by mongoose id.
 */
router.route("/:id").patch((req, res) => {
  const { name, lastName, tel, phone, mail } = req.body;
  Customer.findByIdAndUpdate(req.body.id, { name, lastName, tel, phone, mail })
    .exec()
    .then((er_entity) => res.json(er_entity))
    .catch((err) => res.status(404).json(err));
});

/**
 * Delete entity.
 *
 * Deletes an entity by mongoose id.
 */
router.route("/:id").delete((req, res) => {
  Customer.findByIdAndDelete(req.body.id)
    .exec()
    .then(() => res.status(204))
    .catch((err) => res.status(404).json(err));
});

module.exports = router;
