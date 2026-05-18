import { useState } from 'react'
import "./App.css"
function App() {
    const [pedidos, setPedidos] = useState('')

    return (
        <div>
            <h1>Faça seu pedido:</h1>
            <input placeholder="Qual o pedido" value={pedidos} onChange={(e) => setPedidos(e.target.value)} />
            <button>ENVIAR</button>
        </div>
    )
}

export default App