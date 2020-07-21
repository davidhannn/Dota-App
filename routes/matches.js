const express = require("express");
const router = express.Router();
const axios = require("axios");
const fetch = require("node-fetch");

const apiKey = "8675039E47CE92D54B6D032DA9D67FA0";
router.get("/", async (req, res, next) => {
  const urls = [
    `https://api.steampowered.com/IDOTA2Match_570/GetMatchDetails/V001/?match_id=5506574406&key=${apiKey}`,
    `https://api.steampowered.com/IEconDOTA2_570/GetHeroes/v0001/?key=${apiKey}`,
    `https://api.steampowered.com/IEconDOTA2_570/GetGameItems/V001/?key=${apiKey}`,
  ];

  const apiData = urls.map((url) => {
    return fetch(url).then((res) => res.json());
  });

  Promise.all(apiData).then((data) => {
    res.send({ data });
  });
});

module.exports = router;
