const Services = require("./service");

const getUser = (req, res) => res.status(200).json(Services.getUser());
const getUserById = (req, res) =>
  res.status(200).json(
    Services.getUserById({
      id: req.params.id,
    })
  );
module.exports = { getUser, getUserById };
