// backend/api/middlewares/auth_middleware.js

module.exports = (req, res, next) => {
  const apiKey = req.headers["x-api-key"];
  if (apiKey === "sua_chave_api_secreta") {
    next(); // Continua para a próxima função se autenticado
  } else {
    res.status(401).json({ error: "Acesso negado. Autenticação necessária." });
  }
};
