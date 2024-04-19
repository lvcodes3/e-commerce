const express = require("express");
const router = express.Router();

const inventoryController = require("../controllers/inventoryControllers.js");

router.get("/get", inventoryController.getInventoryItem);

module.exports = router;
