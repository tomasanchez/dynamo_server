/**
 * Customer's Model.
 *
 * Mongoose Schema for Customers storage.
 *
 * @file customer.model.js
 * @author Tomás A. Sánchez
 * @since 02.22.2021
 */

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

/**
 * Customers Schema
 * @constructor
 * @param {string} usnam the user ID
 * @param {string} id the customer's ID
 * @param {string} name the customer's names
 * @param {string} lastName the customer's surname
 * @param {object} address the customer's current address
 * @param {string} phone the customer's home phone number
 * @param {string} tel the customer's celphone number
 * @param {date} birthday the customer's birthday date
 * @param {string} mail the customer's e-mail
 * @param {array} subscriptions the subscribed actvities
 * @param {array} payments history of payments
 */
const customerSchema = new Schema(
  {
    _id: Schema.Types.ObjectId,
    usnam: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      minlength: 4,
    },
    id: {
      type: String,
      required: true,
      unique: true,
    },
    name: {
      type: String,
      required: true,
      trim: true,
      minlength: 2,
    },
    lastName: {
      type: String,
      required: true,
      trim: true,
      minlength: 2,
    },
    address: {
      street: { type: String, required: true },
      zip: String,
      city: { type: String, required: true },
    },
    phone: {
      type: String,
      required: true,
      minLength: 8,
    },
    tel: {
      type: String,
      required: true,
      minLength: 10,
    },
    birthday: Date,
    mail: {
      type: String,
      required: true,
      unique: true,
    },
    subscriptions: [{ type: Schema.Types.ObjectId, ref: "Subscription" }],
    payments: [{ type: Schema.Types.ObjectId, ref: "Payments" }],
  },
  { timestamps: true }
);

const Customer = mongoose.model("Customer", customerSchema);

module.exports = Customer;
