import express from "express";
import {
  registerUser,
  login,
  logoutUser,
  getCurrentUser,
  verifyEmail,
  resendEmailVerification,
  refreshAccessToken,
  forgotPasswordRequest,
  changeCurrentPassword,
  resetForgotPassword,
} from "../controllers/auth.controllers.js";
import { validate } from "../middlewares/validator.middleware.js";
import { userRegisterValidator } from "../validators/index.js";

const router = express.Router();

router.route("/register").post(userRegisterValidator(), validate, registerUser);
router.route("/login").post(login);
router.route("/logout").post(logoutUser);
router.route("/current-user").get(getCurrentUser);
router.route("/verify-email").post(verifyEmail);
router.route("/resend-email-verification").post(resendEmailVerification);
router.route("/refresh-access-token").post(refreshAccessToken);
router.route("/forgot-password").post(forgotPasswordRequest);
router.route("/change-password").post(changeCurrentPassword);
router.route("/reset-password/:resetToken").post(resetForgotPassword);

export default router;
