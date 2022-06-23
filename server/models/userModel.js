const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Your name is required'],
  },
  password: {
    type: String,
    required: [true, 'Password is required to create an account'],
  },
  email: {
    type: String,
    required: true,
  },
  id: {
    type: String,
  },
});

const User = mongoose.model('User', UserSchema);

module.exports = User;
