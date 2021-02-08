import React, { useContext, useEffect } from "react";

import Proyect from "./Proyect";

import proyectContext from "../../context/proyects/proyectContext";

const ProyectsList = () => {

  //Obtener proyectos
  const proyectsContext = useContext(proyectContext);
  const { proyects, getProyects } = proyectsContext;

  //useEffect siempre antes de cualquier return
  useEffect(() => {
    getProyects();
  }, []);

  //Revisar si proyectos tiene contenido
  if(proyects.length === 0) return null;

  return (
    <ul className="listado-proyectos">
      {proyects.map(proyecto => (
        <Proyect key={proyecto.id} proyecto={proyecto} />
      ))}
    </ul>
  );
};

export default ProyectsList;
