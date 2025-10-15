const router = require("express").Router();
const { getCurrentUser, updateUser } = require("../controllers/users");

// Protected route to get current user's profile
router.get("/me", getCurrentUser);

// Protected route to update current user's profile
router.patch("/me", updateUser);

module.exports = router;
