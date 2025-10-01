const router = require("express").Router();
const { getUsers, createUser, getUser } = require("../controllers/users"); // used {} because we are exporting object from users controller

router.get("/", getUsers);
router.get("/:userId", getUser);
router.post("/", createUser);

module.exports = router;
