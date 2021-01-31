import React from 'react';

import Proyect from './Proyect'

const ProyectsList = () => {

    const proyectos = [
        {nombre: "Tienda"},
        {nombre: "Coche"},
        {nombre: "Seguro"}
    ];

    return ( 
        <ul className="listado-proyectos">
            {proyectos.map(proyecto => (
                <Proyect proyecto={proyecto} />
            ))}
        </ul>
     );
}
 
export default ProyectsList;