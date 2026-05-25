import express from "express";

import {
  loginUser,
  signupUser,
  logoutUser,
} from "../controllers/auth.controller.js";

const router = express();

//login routeapi/auth/
router.post("/login", loginUser);

//signup
router.post("/signup", signupUser);

//logout
router.post("/logout", logoutUser);

export default router;
