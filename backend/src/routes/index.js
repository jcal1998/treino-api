const express = require("express");
const router = express.Router();
router.get("/", (req, res, next) => {
  res.status(200).send({
    title: "nice ze",
    subtitle: "estas indo bien",
  });
});
module.exports = router;
