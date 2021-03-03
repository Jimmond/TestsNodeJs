var express = require('express');
var router = express.Router();
const vehicleController = require("../controller/vehicleController");

/* GET Vehicle page. */
router.get('/', vehicleController.index);

module.exports = router;