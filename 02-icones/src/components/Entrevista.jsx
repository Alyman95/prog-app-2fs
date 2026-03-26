import { useState } from "react"

function Entrevista() {
    const[resultado, setResultado] = UseState('')
    function lerNumero(){
    let n = Number(prompt("Digite um número:"))
    let linhas = ""
    let linha 
    for(let i = 1; i<=10; i++){
    linhas += linha
    let mult = i*n
    console.log(linha);
    }
   
    setResultado(linha)
    }
    return (
        <div style={{
            backgroundColor:"black"}}>
             <h2>tabuada</h2>
            <button onClick={lerNumero}>informar o número</button>
            {resultado && <p>{resultado}</p>}
         
        </div>
    )
}

export default Entrevista




