const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Your name is required'],
  },
  password: {
    type: String,
    require: [true, 'Password is required to create an account'],
  },
});

const User = mongoose.model('User', UserSchema);

// module.exports = User;
