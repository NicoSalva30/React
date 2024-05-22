import './App.css'
import NicoImagen from './imagenes/Nico.jpg'
import Button from './componentes/button'
import Contador from './componentes/Contador'
import { useState } from 'react'

function App () {
  const [numClics, setnumClics] = useState(0)

  const manejarClic = () => {
    setnumClics(numClics + 1)
  }

  const reiniciarContador = () => {
    setnumClics(0)
  }

  return (
    <div className='App'>
      <div className='freecodecamp-logo-contenedor'>
        <img className='freecodecamp-logo' src={NicoImagen} alt='Logo de freeCodeCamp' />
      </div>
      <div className='contenedor-principal'>
        <Contador numClics={numClics} />
        <Button texto='Clic' esBotonDeClic manejarClic={manejarClic} />
        <Button texto='Reiniciar' esBotonDeClic={false} manejarClic={reiniciarContador} />
      </div>
    </div>
  )
}

export default App
