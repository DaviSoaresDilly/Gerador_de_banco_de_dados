// backend/api/middlewares/log_middleware.js

module.exports = (req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} - ${req.url}`);
  next();
};
