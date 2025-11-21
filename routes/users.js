const router = require("express").Router();
const { getCurrentUser, updateUser } = require("../controllers/users");
const { validateUserUpdate } = require("../middlewares/validation");

// Protected route to get current user's profile
router.get("/me", getCurrentUser);

// Protected route to update current user's profile
router.patch("/me", validateUserUpdate, updateUser);

module.exports = router;
