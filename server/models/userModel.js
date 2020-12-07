const mongoose = require('mongoose');

const { Schema, model } = mongoose;

const userSchema = new Schema({
  name: { type: String },
  email: { type: String },
  photo: { type: String },
  favourite: [Number],
});

module.exports = model('users', userSchema);
