const router = require("express").Router();
const { ERROR_CODES } = require("../utils/errors");
const { createUser, login } = require("../controllers/users");
const auth = require("../middlewares/auth");

const userRouter = require("./users");
const clothingItemRouter = require("./clothingItems");

// Authentication routes (no auth required)
router.post("/signup", createUser);
router.post("/signin", login);

// Protected routes - auth required
router.use("/users", auth, userRouter);
router.use("/items", clothingItemRouter); // Auth is handled individually in clothingItems.js

router.use((req, res) => {
  res
    .status(ERROR_CODES.NOT_FOUND)
    .send({ message: "Requested resource not found" });
});

module.exports = router;
