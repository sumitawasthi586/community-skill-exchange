import express from "express";
import Skill from "../models/Skill.js";
import jwt from "jsonwebtoken";

const router = express.Router();

// Middleware to verify token
const auth = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) return res.status(401).json({ message: "No token provided" });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.userId = decoded.id;
    next();
  } catch {
    return res.status(401).json({ message: "Invalid token" });
  }
};

// Add skill
router.post("/", auth, async (req, res) => {
  const { title, description, category } = req.body;
  try {
    const skill = new Skill({ title, description, category, user: req.userId });
    await skill.save();
    res.json({ message: "Skill added successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get all skills
router.get("/", async (req, res) => {
  const skills = await Skill.find().populate("user", "name email");
  res.json(skills);
});

export default router;
