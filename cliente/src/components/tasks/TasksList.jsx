import React, { Fragment } from "react";

import Task from "./Task";

const TasksList = () => {
  const ProyectTasks = [
    { name: "Patata", completed: true },
    { name: "Limon", completed: false },
    { name: "Cosa", completed: false },
    { name: "Tela", completed: true }
  ];

  return (
    <Fragment>
      <h2>listado: tienda</h2>
      <ul className="listado-tareas">
        {ProyectTasks.length === 0 ? (
          <li className="tarea">
            <p>No tasks added</p>
          </li>
        ) : (
          ProyectTasks.map(task => <Task task={task} />)
        )}
      </ul>
      <button type="button" className="btn btn-eliminar">
        Delete proyect &times;
      </button>
    </Fragment>
  );
};

export default TasksList;
