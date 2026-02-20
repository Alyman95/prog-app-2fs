
function Notas() {
    function somarnotas(){
        let soma = Number (prompt("Digite sua nota:"))}
        if(soma === 100){
            alert("Sua letra é 'A' ")

        }else if(soma === 60){
            alert("Sua letra é 'B'")
        }else if(soma === 40){
            alert("Sua letra é 'C'")
        }else if(soma === 30){
            alert("Sua letra é 'D'")
        }else if(soma === 20){
            alert("Sua letra é 'E'")
        }
            
        
    }   
    {return (
        <div>
            <h2>notas</h2>
        </div>
    )
}

export default Notas
