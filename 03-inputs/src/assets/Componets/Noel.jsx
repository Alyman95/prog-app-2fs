/*import React from 'react'
import { useState } from 'react'
function Noel() {
    const [inputPalavra, Setinputpalavra] = useState('')
function palavraNoel(){
    console.log(inputPalavra)
}
    return (
        <div>
            <h1>Sorteio do noel</h1>
           <button  onClick={palavraNoel}>Enviar</button> 
           
           <input type="text" onChange={(e) => Setinputpalavra(e.target.value)}/>
           
         
           
        </div>
    )
}

export default Noel*/
import React, { useState } from 'react'

function Noel() {
    const [numero, setNumero] = useState('')
    const [resultado, setResultado] = useState('')

    function gerarHo() {
        const N = Number(numero)
        if (N > 0) {
         setResultado("Hohohohohoho"  )
        }
    }

    return (
        <div>
            <h1>Papai Noel</h1>

            <input 
                type="Number"
                value={numero}
                onChange={(e) => setNumero(e.target.value)}
            />

            <button onClick={gerarHo}>Gerar</button>

            <p>{resultado}</p>
        </div>
    )
}

export default Noel
