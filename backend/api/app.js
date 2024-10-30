// backend/api/app.js

const express = require("express");
const bodyParser = require("body-parser");
const atendimentoRoutes = require("./routes/atendimentos");
const pacienteRoutes = require("./routes/pacientes");
const relatorioRoutes = require("./routes/relatorios");
const authMiddleware = require("./middlewares/auth_middleware");
const logMiddleware = require("./middlewares/log_middleware");

const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares globais
app.use(bodyParser.json());
app.use(authMiddleware); // Middleware de autenticação
app.use(logMiddleware); // Middleware de logging

// Rotas
app.use("/api/atendimentos", atendimentoRoutes);
app.use("/api/pacientes", pacienteRoutes);
app.use("/api/relatorios", relatorioRoutes);

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

module.exports = app;
