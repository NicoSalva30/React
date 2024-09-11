import './App.css';
import LogoCocaCola from './imagenes/logo.png'
import ListaDeTareas from './componentes/ListaDeTareas';


function App() {
  return (
    <div className="aplicacion-tareas">
      <div className='freecodecamp-logo-contenedor'>
        <img 
        src={LogoCocaCola} 
        className='freecodecamp-logo' 
        />  
      </div> 
      <div className='tareas-lista-principal'>
        <h1>Mis Tareas</h1>
        <ListaDeTareas />
      </div> 
    </div>
  );
}

export default App;
