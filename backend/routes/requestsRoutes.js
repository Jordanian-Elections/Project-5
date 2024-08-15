const express = require("express");
const router = express.Router();
const requests = require("../controllers/requests");

router.post("/contact", requests.contactRequest);
router.get("/nationalId", requests.getUserByNationalId);
router.post("/local-election-requests", requests.createLocalElectionRequest);

module.exports = router;
