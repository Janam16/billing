const express = require("express");
const bodyParser = require("body-parser");
const router = express.Router();
const path = require("path");

router.use(express.static(path.join(__dirname, "public")));
/*
router.post("/store-menu", (req, res, next) => {
  console.log("working on it.....");
  res.sendFile(path.join(__dirname, "./", "views", "shop.html"));
});
*/
module.exports = router;
