// backend/api/routes/pacientes.js

const express = require("express");
const router = express.Router();
const pacienteController = require("../controllers/paciente_controller");

router.get("/", pacienteController.getPacientes);
router.post("/", pacienteController.createPaciente);

module.exports = router;
