const express = require('express');
const petsController = require('../controllers/petsController');
const petController = require('../controllers/petController');

function routes(pets) {
  const petRouter = express.Router();
  const pet = petsController(pets);
  const detailPet = petController(pets);

  petRouter.route('/')
    .get(pet.getMethod)
    .put(pet.putMethod);

  petRouter.route('/detail')
    .get(detailPet.getMethod);
  return petRouter;
}

module.exports = routes;
