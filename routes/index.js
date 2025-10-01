const router = require("express").Router();

const userRouter = require("./users");
const closingItem = require("./closingItems");

router.use("/users", userRouter);
router.use("/items", closingItem);

router.use((req, res) => {
  res.status(404).send({ message: "Requested resource not found" });
});

module.exports = router;
