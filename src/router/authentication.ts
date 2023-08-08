import express from "express";
import { register, loginPassword, logout } from "../controllers/authentication";

const router = express.Router();

router.post("/register", register); 
router.post("/login/password", loginPassword); 
router.post("/logout", logout); 

export default router;
