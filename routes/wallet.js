const express = require("express");
const Wallet = require("../controller/wallets");
const newWallet = new Wallet();
router = express.Router();

router.get("/", (req, res) => newWallet.getWallet(req, res));
router.post("/", (req, res) => newWallet.addWallet(req, res));

module.exports = router;