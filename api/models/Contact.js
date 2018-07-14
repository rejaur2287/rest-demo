const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const validator = require("validator");

const ContactShcema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    minlength: 2,
    maxlength: 30
  },
  phoneNo: {
    type: String,
    required: true,
    trim: true,
    unique: true,
    validate: {
      validator: (v) => {
        return /^(?:\+88|01)?(?:\d{11}|\d{13})$/.test(v);
      },
      message: "{VALUE} is not a valid phone number!"
    }
  },
  email: {
    type: String,
    minlength: 3,
    validate: {
      validator: (v) => {
        return validator.isEmail(v);
      },
      message: "{VALUE} is not a valid Email!"
    }
  }
});

//Name - String - Required - Trim - Min Length - Max Length
//PhoneNo - string -required- trim- validator- unique
//email - string - trim- validator- Min Length
//
const Contact = mongoose.model("Contact", ContactShcema);
module.exports = Contact;
