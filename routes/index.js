const router = require("express").Router();
const NotFoundError = require("../errors/NotFoundError");
const { createUser, login } = require("../controllers/users");
const {
  validateUserBody,
  validateAuthentication,
} = require("../middlewares/validation");
const auth = require("../middlewares/auth");

const userRouter = require("./users");
const clothingItemRouter = require("./clothingItems");

// Authentication routes (no auth required)
router.post("/signup", validateUserBody, createUser);
router.post("/signin", validateAuthentication, login);

// Protected routes - auth required
router.use("/users", auth, userRouter);
router.use("/items", clothingItemRouter); // Auth is handled individually in clothingItems.js

router.use((req, res, next) => {
  next(new NotFoundError("Requested resource not found"));
});

module.exports = router;
