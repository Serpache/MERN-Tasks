import React, { Fragment, useState, useContext } from "react";

import proyectContext from "../../context/proyects/proyectContext";

const NewProyect = () => {
  //Obtener el state del formulario
  const proyectsContext = useContext(proyectContext);
  const { newProyectForm, showForm } = proyectsContext;

  //State de proyecto
  const [proyecto, guardarProyecto] = useState({
    nombre: ""
  });

  //Lee contenido del input
  const onChangeProyecto = e => {
    guardarProyecto({
      ...proyecto,
      [e.target.name]: e.target.value
    });
  };

  //Guarda el proyecto
  const onSubmitProyecto = e => {
    e.preventDefault();
    //Validar el proyecto

    //agregar al state principal

    //reiniciar el form
  };

  const { nombre } = proyecto;

  return (
    <Fragment>
      <button
        type="button"
        className="btn btn-block btn-primario"
        onClick={() => showForm()}
      >
        New proyect
      </button>
      {newProyectForm ? (
        <form className="formulario-nuevo-proyecto" onSubmit={onSubmitProyecto}>
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
      ) : null}
    </Fragment>
  );
};

export default NewProyect;
