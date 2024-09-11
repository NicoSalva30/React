import './App.css'
import { Testimonio } from './componentes/Testimonio'

function App () {
  return (
    <div className='App'>
      <div className='contenedor-principal'>
        <h1>Esto son nuestros alumnos</h1>
        <Testimonio
          nombre='Emma'
          pais='Suecia'
          imagen='foto'
          cargo='Ingeniera'
          empresa='Spotify'
          testimonio='asdasdasdasdasdasdasd'
        />
        <Testimonio
          nombre='Jhon'
          pais='Suecia'
          imagen='foto'
          cargo='Ingeniera'
          empresa='Spotify'
          testimonio='asdasdasdasdasdasdasd'
        />
      </div>
    </div>
  )
}

export default App
