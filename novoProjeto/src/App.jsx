import { useState } from 'react'
import './App.css'
import Home from './pages/Home';
import Elite from './pages/Elite';
import Fileh from './pages/Fileh';


function App() {
const[tela, setTela] = useState(<Home/>)

  return (
    <div className="cont-app">
    <header className={"cont-header"}>
     <nav>
     <button className={'botoes-nav'} onClick={()=> setTela(<Home/>)}>Home</button>
     <button className={'botoes-nav'} onClick={()=> setTela(<Fileh/>)}>Fileh</button>
     <button className={'botoes-nav'} onClick={()=> setTela(<Elite/>)}>Elite</button>
    </nav>
      </header>
    <main className={"cont-main"}>
    <Home/>
    <Elite/>
     <Fileh /> 
     </main>
     {tela}
    </div>
  )
}

export default App

