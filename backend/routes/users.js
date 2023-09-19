const express = require("express");
const router = express.Router();
const User = require("../models/User");
var jwt = require("jsonwebtoken");
const { body, validationResult } = require("express-validator");
var bcrypt = require("bcryptjs");

const JWT_SECRET = "ZaeemTheMarvelAvengersFan$3000";

router.post(
  "/createuser",
  [
    body("name", "Enter a valid name of at least 3 characters").isLength({
      min: 3,
    }),
    body(
      "username",
      "Enter a valid username of at least 3 characters"
    ).isLength({ min: 3 }),
    body("email", "Enter a valid email").isEmail(),
    body("password", "Password must be of atleast 5 characters").isLength({
      min: 5,
    }),
    body("contact", "Contact must be of atleast 7 characters").isLength({
      min: 7,
    }),
  ],
  async (req, res) => {
    let success = false;

    const validationErrors = validationResult(req);
    if (!validationErrors.isEmpty()) {
      res
        .status(400)
        .json({ success: success, validation: validationErrors.array() });
    } else {
      try {
        let user = await User.findOne({ email: req.body.email });
        if (user) {
          res.status(400).json({
            success: success,
            error: "Sorry, a user of this email is already exists.",
          });
        } else {
          var salt = await bcrypt.genSalt(10);
          var secPassword = await bcrypt.hash(req.body.password, salt);

          user = await User.create({
            name: req.body.name,
            username: req.body.username,
            email: req.body.email,
            password: secPassword,
            contact: req.body.contact,
            gender: req.body.gender,
          });

          const data = {
            user: {
              id: user.id,
            },
          };

          const userToken = jwt.sign(data, JWT_SECRET);

          success = true;

          res.json({ success: success, userToken });
        }
      } catch (error) {
        console.log(error.message);
        res.status(500).send("Internal Server Error");
      }
    }
  }
);

router.post(
  "/login",
  [
    body("email", "Enter a valid email").isEmail(),
    body("password", "Password cannot be blank").exists(),
  ],
  async (req, res) => {
    let success = false;

    const validationErrors = validationResult(req);
    if (!validationErrors.isEmpty()) {
      res
        .status(400)
        .json({ success: success, validation: validationErrors.array() });
    } else {
      try {
        let user = await User.findOne({ email: req.body.email });

        if (!user) {
          res.status(400).json({
            success,
            error: "Please try to login with correct credentials",
          });
        } else {
          const passwordCompare = await bcrypt.compareSync(
            req.body.password,
            user.password
          );
          if (!passwordCompare) {
            success = false;
            return res.status(400).json({
              success,
              error: "Please try to login with correct credentials",
            });
          } else {
            const data = {
              user: {
                id: user.id,
              },
            };

            const userToken = jwt.sign(data, JWT_SECRET);

            success = true;

            res.json({ success: success, userToken });
          }
        }
      } catch (error) {
        console.log(error.message);
        res.status(500).send("Internal Server Error");
      }
    }
  }
);

module.exports = router;
