import React, {useReducer} from 'react';

import proyectContext from './proyectContext'
import proyectReducer from './proyectReducer'
import {FORM_PROYECT, GET_PROYECTS} from '../../types'



const ProyectState = props => {

    const proyects = [
        {id: 1, name: "Tienda"},
        {id: 2, name: "Coche"},
        {id: 3, name: "Casa"}
    ]

    const initialState = {
        proyects: [],
        newProyectForm: false
    }

    //Dsipatch para ejecutar las acciones
    const [state, dispatch] = useReducer(proyectReducer, initialState)

    //Funciones para el CRUD
    const showForm = () => {
        dispatch({
            type: FORM_PROYECT
        })
    }
    //Obtener los proyectos
    const getProyects = () => {
        dispatch({
            type: GET_PROYECTS,
            payload: proyects
        })
    }

    return (
        <proyectContext.Provider
            value={{
                proyects: state.proyects,
                newProyectForm: state.newProyectForm,
                showForm,
                getProyects
            }}
        >
            {props.children}
        </proyectContext.Provider>
    )
}

export default ProyectState;