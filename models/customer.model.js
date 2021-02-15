/**
 *  Customer Model
 *  ZHR_Customer
 *
 */

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

/**
 * Customers Schema
 * @constructor
 * @param {string} usname the user ID
 * @param {string} name the customer's name
 * @param {string} lastName the customer's surname
 * @param {string} tel the customer's phone number
 * @param {string} mail the customer's e-mail
 */
const customerSchema = new Schema(
  {
    usnam: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      minlength: 4,
    },
    name: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      minlength: 2,
    },
    lastName: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      minlength: 2,
    },
  },
  { timestamps: true }
);

const Customer = mongoose.model("Customer", customerSchema);

module.exports = Customer;
