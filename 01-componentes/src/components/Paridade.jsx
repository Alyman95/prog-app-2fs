

function Paridade() {
    function calcularParidade(){
        let numero = Number(prompt ("Digite o número:"))
 if(numero % 2 === 0){
        alert("é par!!")
    }else{
        alert("é impar!!")
    }
    }
    
   { return (
        <div>
            <h2>par ou impar?</h2>
            <button onClick={calcularParidade}>
                Paridade
            </button>
        </div>
    )
    }

export default Paridade
}