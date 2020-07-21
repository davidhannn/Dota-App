const express = require("express");
const router = express.Router();
const axios = require("axios");
const fetch = require("node-fetch");

const apiKey = "8675039E47CE92D54B6D032DA9D67FA0";
router.get("/", async (req, res, next) => {
  // const match_url = `https://api.steampowered.com/IDOTA2Match_570/GetMatchDetails/V001/?match_id=5506574406&key=${apiKey}`;
  // const match_list = await axios.get(match_url);
  // const matches = match_list.data.result;

  // const hero_url = `https://api.steampowered.com/IEconDOTA2_570/GetHeroes/v0001/?key=${apiKey}`;
  // const hero_list = await axios.get(hero_url);
  // const heroes = hero_list.data.result;

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
  // Promise.all(
  //   urls
  //     .map((url) =>
  //       fetch(url)
  //         .then((res) => res.json())
  //         .then((data) => {
  //           console.log(data);
  //           res.send({ data });
  //         })
  //     )

  //     .catch((err) => {
  //       res.send(err.message);
  //     })
  // );
  // const output = matches.concat(heroes);
  // function getData() {
  //   let matchApi = fetch(
  //     `https://api.steampowered.com/IDOTA2Match_570/GetMatchDetails/V001/?match_id=5506574406&key=${apiKey}`
  //   );
  //   let heroApi = fetch(
  //     `https://api.steampowered.com/IEconDOTA2_570/GetHeroes/v0001/?key=${apiKey}`
  //   );

  //   Promise.all([matchApi, heroApi])
  //     .then((values) => Promise.all(values.map((value) => value.json())))
  //     .then((finalVals) => {
  //       let matchApi = finalVals[0];
  //       let heroApi = finalVals[1];
  //       console.log(matchApi, heroApi);
  //     });
  // }
  // const fetchData = () => {
  //   const matchApi = `https://api.steampowered.com/IDOTA2Match_570/GetMatchDetails/V001/?match_id=5506574406&key=${apiKey}`;
  //   const heroApi = `https://api.steampowered.com/IEconDOTA2_570/GetHeroes/v0001/?key=${apiKey}`;
  //   const itemApi = `https://api.steampowered.com/IEconDOTA2_570/GetGameItems/V001/?key=${apiKey}`;

  //   const getMatches = axios.get(matchApi);
  //   const getHeroes = axios.get(heroApi);
  //   const getItems = axios.get(itemApi);
  //   axios.all([getMatches, getHeroes, getItems]).then(
  //     axios.spread((...allData) => {
  //       const allMatchData = allData[0];
  //       const allHeroData = allData[1];
  //       const allItemData = allData[2];

  //       console.log(allMatchData);
  //       console.log(allHeroData);
  //     })
  //   );
  // };

  // // fetchData();
  // res.send(matches);
});

module.exports = router;
