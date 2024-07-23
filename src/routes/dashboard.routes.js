import express from "express";
import {
    getChannelStats,
    getChannelVideos,
} from "../controllers/dashboard.controller.js"
import { verifyJWT } from "../middleware/auth.middleware.js";

const router = express.Router();

router.use(verifyJWT); // Apply verifyJWT middleware to all routes in this file

router.route("/stats").get(getChannelStats);
router.route("/videos").get(getChannelVideos);

export default router