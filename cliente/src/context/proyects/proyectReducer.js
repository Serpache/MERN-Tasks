import { FORM_PROYECT, GET_PROYECTS } from '../../types'


export default (state, action) => {
    switch (action.type) {
        case FORM_PROYECT:
            return {
                ...state,
                newProyectForm: true
            }
        case GET_PROYECTS:
            return {
                ...state,
                proyects: action.payload
            }
        default:
            return state;
    }
}