const express = require("express");
const router = express.Router();
const Contact = require("../models/Contact");

//Get All Contacts
router.get("/", (req, res, next) => { });

//Post a New Contact
router.post("/", (req, res, next) => {
  const contact = new Contact({
    name: req.body.name,
    phoneNo: req.body.phoneNo,
    email: req.body.email || null
  });
  contact.save()
    .then(contacts => {
      console.log(contacts);
      res.status(201).json(contacts);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get("/", (req, res, next) => { });

router.patch("/", (req, res, next) => { });

router.delete("/", (req, res, next) => { });
module.exports = router;
