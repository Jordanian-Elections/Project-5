const express = require("express");
const router = express.Router();
const requests = require("../controllers/requests");

router.post("/contact", requests.contactRequest);

module.exports = router;
