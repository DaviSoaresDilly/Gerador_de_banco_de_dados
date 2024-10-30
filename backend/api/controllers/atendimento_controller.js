// backend/api/controllers/atendimento_controller.js
const Atendimento = require("../../data/models/atendimento");
const { calcularTaxaMortalidade } = require("../../services/analytics");

exports.getAllAtendimentos = async (req, res) => {
  try {
    const atendimentos = await Atendimento.findAll();
    res.status(200).json(atendimentos);
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar atendimentos." });
  }
};

exports.calculaTaxaMortalidade = async (req, res) => {
  const { bairroId, populacaoBairro, populacaoTotal } = req.body;
  try {
    const taxaMortalidade = calcularTaxaMortalidade(
      bairroId,
      populacaoBairro,
      populacaoTotal
    );
    res.status(200).json({ taxaMortalidade });
  } catch (error) {
    res.status(500).json({ error: "Erro ao calcular taxa de mortalidade." });
  }
};
