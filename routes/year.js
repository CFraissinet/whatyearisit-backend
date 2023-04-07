var express = require("express");
var router = express.Router();

router.get("/", (req, res) => {
  let date = new Date();
  date = date.getFullYear();
  date = date.toString();
  res.json({ year: date });
});

module.exports = router;
