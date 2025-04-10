import { Router } from "express";

const router = Router();

// Authentication endpoints, handled by backend fully
router.get("/auth/callback/discord");
router.get("/auth/callback/google");

// Getting, updating and deleting current profile
router.get("/me");
router.put("/me");
router.delete("/me");

// Getting blogs of the current user
router.get("/me/blogs");

export default router;
