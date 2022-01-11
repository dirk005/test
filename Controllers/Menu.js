const mealtypes = require("../Models/menu.json");

exports.getMenu = (req, res) => {
  const resultname = mealtypes.map((items) => items.name);

  res.status(200).json({
    message: "widgets data fetched successfully",
    name: resultname,
  });
};
