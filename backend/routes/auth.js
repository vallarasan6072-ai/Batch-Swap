const express = require("express");
const router = express.Router();

// ✅ ADD THIS
const User = require("../models/User");

// ✅ SIGNUP
router.post("/signup", async (req, res) => {
  try {
    const { username, password, role } = req.body;

    const user = new User({ username, password, role });
    await user.save();

    res.send("Signup Successful");

  } catch (err) {
    console.log("ERROR:", err.message); // 👈 SEE REAL ERROR
    res.status(500).send(err.message);  // 👈 SEND REAL ERROR
  }
});

// ✅ LOGIN (USE DATABASE)
router.post("/login", async (req, res) => {
  const { username, password } = req.body;

  const user = await User.findOne({ username, password });

  if (!user) {
    return res.status(401).send("Invalid Login");
  }

  res.send(user);
});

module.exports = router;