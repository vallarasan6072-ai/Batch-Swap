// controllers/authController.js

exports.login = (req, res) => {
  const { username, password } = req.body;

  // Default user (for demo)
  const user = {
    username: "admin",
    password: "1234",
    role: "faculty"
  };

  if (username !== user.username) {
    return res.status(404).json({ message: "User not found" });
  }

  if (password !== user.password) {
    return res.status(401).json({ message: "Password is wrong" });
  }

  res.json({
    message: "Login successful",
    user: {
      username: user.username,
      role: user.role
    }
  });
};