/* eslint-disable no-console */
function petsController(pets) {
  function getMethod(req, res) {
    console.log('getting data...');
    const query = {};
    pets.find(query, (errorFindPets, allPets) => (
      errorFindPets
        ? res.send(errorFindPets)
        : res.json(allPets)
    ));
  }
  function putMethod({ body }, res) {
    pets.create(body, (errorCreating) => (
      errorCreating
        ? res.send(errorCreating)
        : res.send('element created ...')
    ));
  }

  return {
    getMethod, putMethod,
  };
}

module.exports = petsController;
