// backend/api/controllers/atendimento_controller.js

exports.getAtendimentos = (req, res) => {
  // Aqui você buscaria os atendimentos do banco de dados
  res.json([{ id: 1, paciente: "João Silva", data: "2023-10-30" }]);
};

exports.createAtendimento = (req, res) => {
  const novoAtendimento = req.body;
  // Aqui você salvaria o atendimento no banco de dados
  res
    .status(201)
    .json({ message: "Atendimento criado com sucesso", data: novoAtendimento });
};
