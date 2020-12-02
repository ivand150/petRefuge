function PetController(pets) {
  function getMethod(req, res) {
    const query = { id: +req.query.id };
    pets.findOne(query, (errorFindPet, pet) => (
      errorFindPet
        ? res.send(errorFindPet)
        : res.json(pet)
    ));
  }
  return {
    getMethod,
  };
}

module.exports = PetController;
