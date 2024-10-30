// frontend/src/components/Dashboard.js
import React, { useEffect, useState } from "react";
import api from "../services/api";

function Dashboard() {
  const [atendimentos, setAtendimentos] = useState([]);

  useEffect(() => {
    async function fetchAtendimentos() {
      const response = await api.get("/atendimentos");
      setAtendimentos(response.data);
    }
    fetchAtendimentos();
  }, []);

  return (
    <div>
      <h1>Dashboard de Atendimentos</h1>
      <ul>
        {atendimentos.map((atendimento) => (
          <li key={atendimento.id}>{atendimento.data_atendimento}</li>
        ))}
      </ul>
    </div>
  );
}

export default Dashboard;
