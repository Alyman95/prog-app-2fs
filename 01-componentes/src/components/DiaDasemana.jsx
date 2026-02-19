
function DiaDasemana() {
    function verificarDia(){
        let dia = prompt("Digite o dia da semana(1 a 7):")
        dia = Number(dia)
        
        // if(dia === 1){
        //     alert("Domingo")
        // }else if(dia === 2){
        //     alert("segunda")
        // }else if(dia === 3){
        //     alert("terça")
        // }else if(dia === 4){
        //     alert("quarta")
        // }else if (dia === 5){
        //     alert ("quinta")
        // }else if (dia === 6){
        //     alert("sexta")
        // }else if(dia === 7){
        //     alert ("sábado")
        // }
        
      switch(dia){
            case 1: alert ("Domingo")
                   break
            case 2: alert ("segunda")
                   break
            case 3: alert ("terça")
                   break
            case 4: alert ("quarta")
                   break
            case 5: alert ("quinta")
                   break
            case 6: alert ("sexta")
                   break
            case 7: alert ("sábado")
                   break
           default: alert("Esse dia não existe!!")

        }

       
            
        }
    
    return (
        <div>
            <h2>Dia da semana</h2>
            <button onClick={verificarDia}>verificar dia</button>
        
        </div>
    )
    
    }

    export default DiaDasemana



