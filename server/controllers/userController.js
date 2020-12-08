function userController(user) {
  function getMethod(req, res) {
    const query = { displayName: req.query.displayName };
    user.findOne(query, (errorFindUser, userFind) => (
      errorFindUser
        ? res.send(errorFindUser)
        : res.json(userFind)
    ));
  }
  function putMethod({ body }, res) {
    console.log('trying to create');
    const query = { displayName: body.displayName };
    user.findOneAndUpdate(query, body, {
      upsert: true, useFindAndModify: false,
    }, (errorFindUser, userModified) => (
      errorFindUser
        ? res.send(errorFindUser)
        : res.json(userModified)
    ));
  }
  return {
    getMethod, putMethod,
  };
}

module.exports = userController;
