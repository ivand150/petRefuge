const mongoose = require('mongoose');

const { Schema, model } = mongoose;

const petShema = new Schema({
  type: { type: String },
  name: { type: String },
  photo: { type: String },
});

module.exports = model('pets', petShema);
