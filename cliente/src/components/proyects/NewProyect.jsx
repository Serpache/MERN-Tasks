import React, { Fragment, useState } from "react";

const NewProyect = () => {

    //State de proyecto
    const [proyecto, guardarProyecto] = useState({
        nombre:""
    });

    //Lee contenido del input
    const onChangeProyecto = e => {
        guardarProyecto({
            ...proyecto,
            [e.target.name]: e.target.value
        })
    }

    //Guarda el proyecto
    const onSubmitProyecto = e => {
        e.preventDefault();
        //Validar el proyecto

        //agregar al state principal

        //reiniciar el form
    }

    const {nombre} = proyecto;

  return (
    <Fragment>
      <button type="button" className="btn btn-block btn-primario">
        New proyect
      </button>
      <form 
        className="formulario-nuevo-proyecto"
        onSubmit={onSubmitProyecto}
      >
        <input 
            type="text"
            className="input-text"
            placeholder="Proyect name"
            name="nombre"
            value={nombre}
            onChange={onChangeProyecto}
        />
        <input 
            type="submit"
            className="btn btn-block btn-primario"
            value="Add proyect"
        />
      </form>
    </Fragment>
  );
};

export default NewProyect;
