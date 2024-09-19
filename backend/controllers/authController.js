const User = require('../models/User');
const jwt = require('jsonwebtoken');

// Signup Controller
exports.signup = async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.create({ username, password });
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1d' });

    res.status(201).json({ message: 'User registered successfully', token });
  } catch (error) {
    res.status(400).json({ message: 'Failed to register user', error });
  }
};

// Login Controller
exports.login = async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ username });

    if (user && (await user.matchPassword(password))) {
      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1d' });
      res.status(200).json({ message: 'User logged in successfully', token });
    } else {
      res.status(400).json({ message: 'Invalid username or password' });
    }
  } catch (error) {
    res.status(400).json({ message: 'Login failed', error });
  }
};
