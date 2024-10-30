// backend/api/routes/relatorios.js

const express = require("express");
const router = express.Router();
const relatorioController = require("../controllers/relatorio_controller");

router.get("/generate", relatorioController.generateReport);

module.exports = router;
