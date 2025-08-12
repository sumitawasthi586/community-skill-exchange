// routes/skillRoutes.js
import express from "express";
import Skill from "../models/Skill.js";
const router = express.Router();

// Add Skill
router.post("/add", async (req, res) => {
  try {
    const { name, level, userId } = req.body;
    const skill = new Skill({ name, level, userId });
    await skill.save();
    res.status(201).json(skill);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get Skills for a User
router.get("/:userId", async (req, res) => {
  try {
    const skills = await Skill.find({ userId: req.params.userId });
    res.json(skills);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
