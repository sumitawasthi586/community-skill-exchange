import express from 'express';
import rateLimit from 'express-rate-limit';
import { register, login } from '../controllers/authController.js';

const router = express.Router();

// limit to reduce brute force
const limiter = rateLimit({
  windowMs: 60 * 1000, // 1 minute
  max: 10, // max 10 requests per minute per IP for auth routes
});

router.post('/register', limiter, register);
router.post('/login', limiter, login);
// ...existing code...
export default router;