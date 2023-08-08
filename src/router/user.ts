import express from "express";
import { authMiddleware } from "../middlewares/auth";

const router = express.Router();

router.use(authMiddleware);

router.get('/', (req, res) => {
    if (req.session && req.session.user) {
        res.send(`Hello ${req.session.user.username}!`);
    } else {
        res.send('Not authenticated!');
    }
});

export default router;
