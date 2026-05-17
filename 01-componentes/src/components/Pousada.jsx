import {useStade} from 'react'

function Pousada(){
    const[conta, setConta] = useStade('')
    const[usuario, setUsuario] = useStade('Humberto')

    function mudarUsuario(){
        let nome = prompt("Nome:")
        setUsuario(nome)
    }
function calcular(){
    let diarias = Number(prompt('Quantos dias?'))
    let valorDiaria
    if(diarias <= 5){
        valorDiaria = 100
    }else if(diaria < 100){
        valorDiaria = 90
    }else{
        valorDiaria = 80
    }
 let valorBruto = diarias * valorDiaria
 let desconto10 = valorBruto * 10/100
 let desconto15 = valorBruto * 15/100
 let valorTotal = valorBruto - desconto10 + desconto15 + 150
 setConta ("Valor a pagar: R$" + valorTotal.toFixed(2))
}

return (
    <div className={"container-pousada"}>
        <h2>pousada</h2>
        <button onClick={calcular}>Calcular preço </button>
        <p>{conta}</p>
        <button onClick={mudarUsuario}>Mudar usuários </button>
        <p>Usuário: {usuario}</p>
    </div>
)

 }

 export default Pousada