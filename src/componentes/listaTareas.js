import React, { useState } from "react";
import TareaFormulario from "./tareaFormulario";
import '../stylesheets/listaTareas.css';
import Tarea from "./tarea";

function ListaTareas(){
  const [tareas, setTareas] = useState([]);

  const agregarTarea = tarea => {
    console.log(tarea);
    if(tarea.texto.trim()){
      tarea.texto = tarea.texto.trim();
      const tareasActualizadas = [tarea, ...tareas];
      setTareas(tareasActualizadas);
    }
  }

  return(
    <>
      <TareaFormulario 
        onSubmit={agregarTarea}
      /> 
      <div className='lista-contenedor'>
        {
          tareas.map((tarea) =>
            <Tarea 
              key={tarea.id}
              id={tarea.id}
              texto={tarea.texto}
              completada = {tarea.completada}
            />
          )
        }
      </div>
    </>
  );
}

export default ListaTareas;