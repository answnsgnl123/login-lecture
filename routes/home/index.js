"ues strict";

const express = require("express");
const router = express.Router();
const ctrl = require("./home.ctrl");

router.get("/home", ctrl.output.hello);

router.get("/page", ctrl.output.page);
router.post("/page", ctrl.output.page);

router.get("/login", ctrl.output.login);
router.post("/login", ctrl.process.login);

module.exports = router;