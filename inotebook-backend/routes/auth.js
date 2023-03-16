const express = require("express");
const User = require("../models/User");
const router = express.Router();
const { body, validationResult } = require("express-validator");
//create a user using POST "/api/auth/createUser".No login required
router.post(
  "/",
  [
    body("name", "Enter a valid name").isLength({ min: 3 }),

    body("email", "Enter a valid email").isEmail(),
    body("password", "Enter a valid password").isLength({ min: 5 }),
  ],
  async (req, res) => {
    //If their are errors return bad request and the errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    // check whether the user with same email exists already
    let user = await User.findOne({ email: req.body.email });
    // console.log(user);
    if (user) {
      return res
        .status(400)
        .json({ error: "Sorry a user with this email already exists!" });
    }
    //creating user
    user = await User.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    });

    //   .then((user) => res.json(user))
    //   .catch((err) => {
    //     console.log(err);
    //     res.json({ error: "Please enter a unique value for email" });
    //   });
    res.send("response sent");
  }
);
module.exports = router;
