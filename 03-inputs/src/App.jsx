import { useState } from 'react'
import './App.css'
import Noel from './assets/Componets/Noel';
Noel
function App() {
const[inputNome, setInputNome] = useState('')

function cadastrar(){
  console.log("cadastrando:" + inputNome)
}

  return (
    <>
  <h1>inputs controlados</h1>
   nome <input type="text"
   value={inputNome} 
   onChange={(e) => setInputNome(e.target.value)}
   />
 <p>nome Digitado: {inputNome}</p>
 <button onClick={cadastrar}>cadastrar</button>
   </>
 

  )
  

}

export default Noel
