import React from 'react';

import Sidebar from '../layout/Sidebar'
import HeadBar from '../layout/HeadBar'
import FormTask from '../tasks/FormTask'
import TasksList from '../tasks/TasksList'

const Proyects = () => {
    return ( 
        <div className="contenedor-app">
           <Sidebar />
            <div className="seccion-principal">
                <HeadBar />
                <main>
                    <FormTask />
                    <div className="contenedor-tareas">
                        <TasksList />
                    </div>
                </main>
            </div>
        </div>
     );
}
 
export default Proyects;