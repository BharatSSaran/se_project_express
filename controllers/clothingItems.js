const ClothingItem = require("../models/clothingItem");
const BadRequestError = require("../errors/BadRequestError");
const NotFoundError = require("../errors/NotFoundError");
const ForbiddenError = require("../errors/ForbiddenError");

const getItems = (req, res, next) => {
  ClothingItem.find({})
    .then((items) => {
      res.status(200).send(items);
    })
    .catch(next);
};

const createItem = (req, res, next) => {
  console.log("Request body:", req.body);
  console.log("User ID:", req.user._id);

  const { name, weather, imageUrl } = req.body;
  const owner = req.user._id; // Get owner from the temporary middleware

  ClothingItem.create({ name, weather, imageUrl, owner })
    .then((item) => {
      console.log("Created item:", item);
      res.status(201).send(item);
    })
    .catch((err) => {
      if (err.name === "ValidationError") {
        next(new BadRequestError(err.message));
      } else {
        next(err);
      }
    });
};

const deleteItem = (req, res, next) => {
  const { itemId } = req.params;
  const userId = req.user._id; // Get current user ID from auth middleware

  // First find the item to check ownership
  ClothingItem.findById(itemId)
    .orFail()
    .then((item) => {
      // Check if the current user is the owner of the item
      if (item.owner.toString() !== userId.toString()) {
        throw new ForbiddenError(
          "You do not have permission to delete this item"
        );
      }

      // If user is the owner, proceed with deletion
      return ClothingItem.findByIdAndDelete(itemId).then((deletedItem) => {
        res.status(200).send(deletedItem);
      });
    })
    .catch((err) => {
      if (err.name === "DocumentNotFoundError") {
        next(new NotFoundError("Item not found"));
      } else if (err.name === "CastError") {
        next(new BadRequestError("The id string is in an invalid format"));
      } else {
        next(err);
      }
    });
};

const likeItem = (req, res, next) => {
  const { itemId } = req.params;
  const userId = req.user._id; // Get user ID from the temporary middleware

  ClothingItem.findByIdAndUpdate(
    itemId,
    { $addToSet: { likes: userId } },
    { new: true }
  )
    .orFail()
    .then((item) => {
      res.status(200).send(item);
    })
    .catch((err) => {
      if (err.name === "DocumentNotFoundError") {
        next(new NotFoundError("Item not found"));
      } else if (err.name === "CastError") {
        next(new BadRequestError("The id string is in an invalid format"));
      } else {
        next(err);
      }
    });
};

const dislikeItem = (req, res, next) => {
  const { itemId } = req.params;
  const userId = req.user._id; // Get user ID from the temporary middleware

  ClothingItem.findByIdAndUpdate(
    itemId,
    { $pull: { likes: userId } },
    { new: true }
  )
    .orFail()
    .then((item) => {
      res.status(200).send(item);
    })
    .catch((err) => {
      if (err.name === "DocumentNotFoundError") {
        next(new NotFoundError("Item not found"));
      } else if (err.name === "CastError") {
        next(new BadRequestError("The id string is in an invalid format"));
      } else {
        next(err);
      }
    });
};

module.exports = { getItems, createItem, deleteItem, likeItem, dislikeItem };
