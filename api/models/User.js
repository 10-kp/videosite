const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema(
  {
    username: { type: String, requred: true, unique: true },
    email: { type: String, requred: true, unique: true },
    password: { type: String, requred: true },
    profilePic: { type: String, default: '' },
    isAdmin: { type: Boolean, default: false },
  },
  { timestamp: true }
);

module.exports = mongoose.model('User', UserSchema);
