// backend/api/controllers/paciente_controller.js

exports.getPacientes = (req, res) => {
  // Aqui você buscaria os pacientes do banco de dados
  res.json([{ id: 1, nome: "João Silva", idade: 45 }]);
};

exports.createPaciente = (req, res) => {
  const novoPaciente = req.body;
  // Aqui você salvaria o paciente no banco de dados
  res
    .status(201)
    .json({ message: "Paciente criado com sucesso", data: novoPaciente });
};
