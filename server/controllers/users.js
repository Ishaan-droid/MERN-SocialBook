const User = require('../models/UserModel');

const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.signin = async (req, res) => {
  try {
    const { email, password } = req.body;

    const existingUser = await User.findOne({ email });

    if (!existingUser) return res.status(404).json({ message: 'No user found' });
    const isPasswordCorrect = await bcrypt.compare(password, existingUser.password);

    if (!isPasswordCorrect) return res.status(404).json({ message: 'User authentication failed' });

    const token = jwt.sign({ email: existingUser.email, id: existingUser._id }, 'test', {
      expiresIn: '1h',
    });

    res.status(200).json({ result: existingUser, token });
  } catch (err) {
    return res.status(404).json({ message: err.message });
  }
};

exports.signup = async (req, res) => {
  try {
    const { firstName, lastName, password, confirmPassword, email } = req.body;

    const existingUser = await User.findOne({ email });

    if (existingUser) return res.status(400).json({ message: 'User already exists' });

    if (password !== confirmPassword)
      return res.status(400).json({ message: 'Passwords dont match' });

    const hashedPassword = await bcrypt.hash(password, 12);

    const result = await User.create({
      email,
      name: firstName + lastName,
      password: hashedPassword,
    });

    const token = jwt.sign({ email: result.email, id: result._id }, 'test', {
      expiresIn: '1h',
    });

    res.status(200).json({ result, token });
  } catch (err) {
    return res.status(404).json({ message: err.message });
  }
};
