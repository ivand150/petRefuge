const express = require('express');
const petsController = require('../controllers/petsController');

function routes(pets) {
  const petRouter = express.Router();
  const pet = petsController(pets);

  petRouter.route('/')
    .get(pet.getMethod)
    .put(pet.putMethod);
  return petRouter;
}

module.exports = routes;
