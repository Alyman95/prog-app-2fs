import { useState} from 'react'
function evento() {
    const[inputEvento, setInputEvento] = useState('')
    function handletInput(e){
        setInputEvento(e.target.value)
        console.log(e);
    }
    return (
        <div>
            <h2>Demo de eventos</h2>
            <button onClick={(e) => console.log(evento)}>Evento onClick</button>
            <input type="text"
            value={inputEvento}
            onChange={handletInput}/> 
        
        </div>
    )
}

export default evento
