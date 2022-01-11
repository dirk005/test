const express = require("express");

// var CityListController = require('../Controllers/City')
// var RestaurantCityController = require('../Controllers/Restaurants')
var MenuController = require("../Controllers/Menu");

const router = express.Router();

// router.get("/getCityList", CityListController.getCityList);
// router.get(
//   "/getRestaurantsByCity/:cityname",
//   RestaurantCityController.getRestaurantsByCity
// );
router.get("/getMenu", MenuController.getMenu);

module.exports = router;
