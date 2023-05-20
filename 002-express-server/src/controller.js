const Services = require("./service");

const getUser = (req, res) => res.status(200).json(Services.getUser());

module.exports = { getUser };
