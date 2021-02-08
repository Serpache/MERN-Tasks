import React from 'react';


const Proyect = ({proyecto}) => {
    return ( 
        <li>
            <button
                type="button"
                className="btn btn-blank"
            >{proyecto.name}</button>
        </li>
     );
}
 
export default Proyect;