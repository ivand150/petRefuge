const mongoose = require('mongoose');

const { Schema, model } = mongoose;

const petShema = new Schema({
  id: { type: Number },
  type: { type: String },
  name: { type: String },
  description: { type: String },
  photo: { type: String },
});

module.exports = model('pets', petShema);
