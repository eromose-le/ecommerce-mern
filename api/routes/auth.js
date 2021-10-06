const router = require('express').Router();
const User = require('../models/User');
const CryptoJS = require('crypto-js');
const jwt = require('jsonwebtoken');

// REGISTER
router.post('/register', async (req, res) => {
  // GET PARAMS FROM FORM
  const newUser = new User({
    username: req.body.username,
    email: req.body.email,
    password: CryptoJS.AES.encrypt(
      req.body.password,
      process.env.SECRET_KEY.toString()
    )
  });

  // SAVE USER
  try {
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (err) {
    res.status(500).json(err);
  }
});

// LOGIN
router.post('/login', async (req, res) => {
  try {
    // CHECK FOR USER BY USERNAME
    const user = await User.findOne({
      username: req.body.username
    });

    // CHECK USER IS NOT FOUND
    !user && res.status(401).json('Wrong credentials!');

    // DECRYPT PASSWORD
    const hashedPassword = CryptoJS.AES.decrypt(
      user.password,
      process.env.SECRET_KEY
    );
    const OriginalPassword = hashedPassword.toString(CryptoJS.enc.Utf8);

    // CHECK PASSWORD IS WRONG
    OriginalPassword !== req.body.password &&
      res.status(401).json('Wrong credentials!');

    // CREATE TOKEN FOR SUCCESSFUL SIGNED IN USER
    const accessToken = jwt.sign(
      {
        id: user._id,
        isAdmin: user.isAdmin
      },
      process.env.JWT_SECRET_KEY,
      {
        expiresIn: process.env.JWT_SECRET_KEY_EXPIRATION
      }
    );

    // EXCLUDE PASSWORD FROM USER BODY
    const { password, ...others } = user._doc;

    // PASS EXCLUDED PASSWORDS
    res.status(200).json({ ...others, accessToken });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
