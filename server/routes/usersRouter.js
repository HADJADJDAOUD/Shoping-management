const authController = require("../controllers/authController");
const userController = require("../controllers/usersController");

const express = require("express");

const router = express.Router();
/// AUTHENTICATION PART ../../../../../.../

router.post("/signUp", authController.signUp);
router.get("/confirm/:token", authController.confirmRegistration);
router.post("/login", authController.login);
router.post("/signOut", authController.signOut);
router.post("/forgotPassword", authController.forgotPassword);
router.post("/verifyCode", authController.verifyCode);
router.patch("/resetPassword/:token", authController.resetPassword);

//// FIRST PAGE PART CVS
router.get("/", userController.getAllUsers);
// SEARCH ONE
router.patch(
  "/updateUserInfo",
  authController.protect,
  userController.updateUserInfo
);

/// MY PROFILE
router.get("/getMe", authController.protect, userController.getUser);
router.get("/allUsers", userController.getAllUsers);

router.get("/saves", authController.protect, userController.getUsersaves);

module.exports = router;
