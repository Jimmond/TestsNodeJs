var express = require('express');
var router = express.Router();
const vehicleController = require("../controller/vehicleController");

/* GET home page. */
router.get('/', function(req, res){
    res.send("Dealer House!")
});

module.exports = router;
