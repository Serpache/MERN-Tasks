import React, { Fragment, useState } from "react";

const NewProyect = () => {

    const [proyecto, guardarProyecto] = useState({
        nombre:""
    });

    const onChangeProyecto = e => {
        guardarProyecto({
            ...proyecto,
            [e.target.name]: e.target.value
        })
    }

    const {nombre} = proyecto;

  return (
    <Fragment>
      <button type="button" className="btn btn-block btn-primario">
        New proyect
      </button>
      <form className="formulario-nuevo-proyecto">
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
