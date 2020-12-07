function userController(user) {
  function getMethod(req, res) {
    const query = { name: req.query.name };
    user.findOne(query, (errorFindUser, userFind) => (
      errorFindUser
        ? res.send(errorFindUser)
        : res.json(userFind)
    ));
  }
  function putMethod({ body }, res) {
    console.log(body);
    const query = { name: body.name };
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
