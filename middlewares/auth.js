const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../utils/config");
const { ERROR_CODES } = require("../utils/errors");

const auth = (req, res, next) => {
  // Extract the authorization header
  const { authorization } = req.headers;

  // Check if authorization header exists and starts with 'Bearer '
  if (!authorization || !authorization.startsWith("Bearer ")) {
    return res
      .status(ERROR_CODES.UNAUTHORIZED)
      .send({ message: "Authorization required" });
  }

  try {
    // Extract the token by removing 'Bearer ' prefix
    const token = authorization.replace("Bearer ", "");

    // Verify the token
    const payload = jwt.verify(token, JWT_SECRET);

    // If no issues with token, add payload to user object and call next()
    req.user = payload;
    return next();
  } catch (err) {
    // If something is wrong with the token, return 401 error
    return res
      .status(ERROR_CODES.UNAUTHORIZED)
      .send({ message: "Authorization required" });
  }
};

module.exports = auth;
