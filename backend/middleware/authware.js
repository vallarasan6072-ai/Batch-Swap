// middleware/authMiddleware.js

module.exports = (req, res, next) => {
  const { username } = req.body;

  // simple check (demo purpose)
  if (!username) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  next(); // go to next function
};