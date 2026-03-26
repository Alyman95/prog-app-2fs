
import React, { useState } from "react";

function App() {
  const [pressaoDesejada, setPressaoDesejada] = useState("");
  const [pressaoLida, setPressaoLida] = useState("");
  const [resultado, setResultado] = useState(null);

  const calcular = () => {
    const diferenca = pressaoDesejada - pressaoLida;
    setResultado(diferenca);
  };

  return (
    <div >
      <h2>Calculadora de Pressão do Pneu</h2>

      <div>
        <label>Pressão desejada:</label>
        <input
          type="number"
          value={pressaoDesejada}
          onChange={(e) => setPressaoDesejada(e.target.value)}
        />
      </div>

      <div>
        <label>Pressão lida:</label>
        <input
          type="number"
          value={pressaoLida}
          onChange={(e) => setPressaoLida(e.target.value)}
        />
      </div>

      <button onClick={calcular}>Calcular diferença</button>

      {resultado !== null && (
        <h3>Diferença: {resultado}</h3>
      )}
    </div>
  );
}

export default App;
