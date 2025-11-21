const errorHandler = (err, req, res, next) => {
  // Log the error to console
  console.error(err);

  // If the error has a statusCode, use it; otherwise use 500
  const statusCode = err.statusCode || 500;

  // If the error has a message, use it; otherwise use a default message
  const message =
    statusCode === 500 ? "An error occurred on the server" : err.message;

  res.status(statusCode).send({ message });
};

module.exports = errorHandler;
