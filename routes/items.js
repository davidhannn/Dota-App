const express = require("express");
const router = express.Router();
const axios = require("axios");

const apiKey = "8675039E47CE92D54B6D032DA9D67FA0";

// Get all Items

router.get("/", async (req, res, next) => {
  try {
    const url = `https://api.steampowered.com/IEconDOTA2_570/GetGameItems/V001/?key=${apiKey}`;
    const list = await axios.get(url);
    const items = list.data.result;
    res.send(items);
  } catch (error) {
    console.log(error.message);
  }
});

module.exports = router;
