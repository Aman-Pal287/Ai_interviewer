const mongoose = require("mongoose");

const interviewConfigSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    level: {
      type: String,
      enum: ["fresher", "junior", "mid", "senior"],
      required: true,
    },
    jobDescription: {
      type: String,
      required: true,
      trim: true,
    },
    topics: {
      type: [String], // ["React", "Node.js", "DSA"]
      required: true,
    },
    mode: {
      type: String,
      enum: ["mcq", "coding", "hr", "mixed"],
      default: "mixed",
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
  }
);

const interviewConfigModel = mongoose.model(
  "InterviewConfig",
  interviewConfigSchema
);

module.exports = interviewConfigModel;
