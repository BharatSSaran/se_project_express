const ERROR_CODES = {
  BAD_REQUEST: 400,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  INTERNAL_SERVER_ERROR: 500,
};

const ERROR_MESSAGES = {
  BAD_REQUEST:
    "Invalid data passed to the methods for creating an item/user or updating an item",
  FORBIDDEN: "You do not have permission to perform this action",
  NOT_FOUND: "There is no user or clothing item with the requested id",
  INTERNAL_SERVER_ERROR: "An error has occurred on the server",
  INVALID_ID: "Invalid ID format",
  ITEM_NOT_FOUND: "Item not found",
  USER_NOT_FOUND: "User not found",
};

module.exports = {
  ERROR_CODES,
  ERROR_MESSAGES,
};
