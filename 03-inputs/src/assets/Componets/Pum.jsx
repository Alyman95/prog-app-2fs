import  { useState } from 'react'

function Pum() {
    const [resultado, setResultado] = useState =('')
    function gerarpum(){
    let texto = ""
     for(let i =0; i<10;i++){
         if(i%4 !=0){
         texto += i +''
         }else{
      texto += "pum"
         }
     }
    }
    return (
        <div>
            <button onClick={gerarpum}>pum</button>
            {resultado}
        </div>

    )
}

export default Pum
