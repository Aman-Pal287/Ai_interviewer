const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/auth.middleware");
const userTopicController = require("../controllers/userTopic.controller");

router.post(
  "/createtopic",
  authMiddleware.authUser,
  userTopicController.createTopic
);

module.exports = router;
