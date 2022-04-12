const express = require("express");
const router = express.Router();
const controller = require("../controllers/personController");
router.post("/add", controller.post);
router.post("/add-ajax", controller.postAjax);
router.put("/:id", controller.put);
router.delete("/:id", controller.delete);
module.exports = router;
