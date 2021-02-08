import React from 'react';


const HeadBar = () => {
    return ( 
    <header className="app-header">
        <p className="nombre-usuario">Hola <span>Sergio</span></p>
        <nav className="nav-principal">
            <a href="#!">Logout</a>
        </nav>
    </header> 
    );
}
 
export default HeadBar;