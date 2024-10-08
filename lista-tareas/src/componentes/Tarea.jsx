import React from "react";
import '../hojas-de-estilo/Tarea.css'
import { HiArchiveBoxXMark } from "react-icons/hi2";


function Tarea({ id, texto, completada, completarTarea, eliminarTarea }) {
  return (
        <div className={completada ? 'tarea-contenedor completada' : 'tarea-contenedor'}>
            <div 
            className='tarea-texto'
            onClick={() => completarTarea(id)}>
                {texto}
            </div>
            <div 
            className='tarea-icono'
            onClick={() => eliminarTarea(id)}>
            <HiArchiveBoxXMark className='tarea-icono'/>
            </div>
        </div>
    );
}

export default Tarea;