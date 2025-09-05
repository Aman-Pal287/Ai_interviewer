const InterviewConfig = require("../models/interviewConfig.model"); // jo model tune banaya tha


async function createTopic(req, res) {
  try {
    const { level, jobDescription, topics, mode } = req.body;

    // check required fields
    if (!level || !jobDescription || !topics || topics.length === 0) {
      return res.status(400).json({
        success: false,
        message: "Level, jobDescription and topics are required",
      });
    }

    // new topic config create
    const newConfig = new InterviewConfig({
      userId: req.user._id, // auth.middleware se aaya
      level,
      jobDescription,
      topics,
      mode: mode || "mixed",
    });

    await newConfig.save();

    res.status(201).json({
      success: true,
      message: "Topic configuration created successfully",
      data: newConfig,
    });
  } catch (error) {
    console.error("Error creating topic config:", error);
    res.status(500).json({
      success: false,
      message: "Server error while creating topic config",
    });
  }
}

module.exports = { createTopic };
