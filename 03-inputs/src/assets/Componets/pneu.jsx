
import { useState } from 'react'
function pneu() {
    const[inputPneu, setInputPneu] = useState('')
    function libras(){
        console.log("somando" + inputPneu)
    
    }
    return (
        <div>
            <h1> Descubra a calabrigem do seu pneu</h1>
           Digite Aqui <input type="text"
           value={inputPneu}
           onChance={(e) => setInputPneu(e.target.value)}
           />
        
           <button onClick={libras}>Enviar</button>
         
        </div>
    )
}

export default pneu
