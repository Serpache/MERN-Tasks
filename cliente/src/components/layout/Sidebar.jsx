import React from 'react';

import NewProyect from '../proyects/NewProyect'

const Sidebar = () => {
    return (   
        <aside>
           <h1>MERN<span>Tasks</span></h1> 
           <NewProyect />
           <div className="proyectos">
               <h2>Your proyects</h2>
           </div>
        </aside>
    );
}
 
export default Sidebar;