const express = require("express");
const {
    getFilteredEvents
} = require("../../controllers/user/event-controller");

const router = express.Router();


router.get("/get", getFilteredEvents);

module.exports = router;
