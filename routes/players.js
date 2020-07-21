const express = require("express");
const router = express.Router();
const axios = require("axios");

// const account_id = 33703112;

router.get("/:id", async (req, res, next) => {
  console.log(req.params);

  const id = req.params.id * 1;
  const url = `https://api.opendota.com/api/players/${id}`;
  const list = await axios.get(url);

  res.status(200).json({
    status: "success",
    data: {
      list: list.data,
    },
  });
});

module.exports = router;
