// backend/api/routes/atendimentos.js

const express = require("express");
const router = express.Router();
const atendimentoController = require("../controllers/atendimento_controller");

router.get("/", atendimentoController.getAtendimentos);
router.post("/", atendimentoController.createAtendimento);

module.exports = router;
