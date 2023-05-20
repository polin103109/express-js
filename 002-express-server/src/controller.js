const getUser = (req, res) => {
  res.status(200).json({
    name: "sabrina",
    age: "24",
    address: {
      city: "Chittagong",
      country: "Bangladesh",
    },
  });
};
module.exports = { getUser };
