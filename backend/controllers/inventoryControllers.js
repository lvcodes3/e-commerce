const db = require("../db");

const getInventoryItem = async (req, res) => {
  try {
    let result = await db.query(
      `SELECT id, name, description, category, price, quantity, images, status
             FROM inventory
             LIMIT 1;`
    );
    return res.status(200).json(result);
  } catch (err) {
    console.log(`Get Inventory Item Error: ${err}`);
    return res.status(500).json({ err: "Get Inventory Item Error." });
  }
};

module.exports = {
  getInventoryItem,
};
