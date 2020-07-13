const express = require("express");
const router = express.Router();
const axios = require("axios");

const apiKey = "8675039E47CE92D54B6D032DA9D67FA0";

// GET ALL HEROES
// @route  /heroes

router.get("/", async (req, res, next) => {
  try {
    const url = `https://api.steampowered.com/IEconDOTA2_570/GetHeroes/v0001/?key=${apiKey}`;
    const list = await axios.get(url);
    const heroes = list.data.result;

    // for (var i = 0; i < heroes.length; i++) {
    //   var str = parsedResponse.result.heroes[i].name.replace(
    //     "npc_dota_hero_",
    //     ""
    //   );
    //   heroPortraits.push(
    //     '<img src="http://cdn.dota2.com/apps/dota2/images/heroes/' +
    //       str +
    //       '_sb.png">'
    //   );
    // }

    res.send(heroes);
  } catch (error) {
    console.log(error.message);
  }
});

module.exports = router;
