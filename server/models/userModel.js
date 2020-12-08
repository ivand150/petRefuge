const mongoose = require('mongoose');

const { Schema, model } = mongoose;

const userSchema = new Schema({
  displayName: { type: String },
  email: { type: String },
  photoURL: { type: String },
  favourite: [Number],
});

module.exports = model('users', userSchema);
