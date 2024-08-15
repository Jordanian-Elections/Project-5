const express = require("express");
const router = express.Router();
const requests = require("../controllers/requests");

router.post("/", requests.contactRequest);

module.exports = router;
