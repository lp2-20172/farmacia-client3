import {
    ALMACEN_LIST,
    ALMACEN_LIST_FAILURE,
    ALMACEN_ADD, ALMACEN_UPDATE,
    ALMACEN_DELETE
} from '../actions/almacen-action'
//import { CATEGORIA_FETCH,  } from '../actions/categoria-action'

const initialState = {
    list: [],
    data: {},
    error: null
}

const almacenReducer = (state = initialState, action) => {
    switch (action.type) {
        case ALMACEN_LIST:
            return {
                ...state,
                list: action.list,
                error: null
            }
        case ALMACEN_LIST_FAILURE: return {
            ...state,
            list: [],
            error: action.error,
        }
        case ALMACEN_ADD:
            return {
                ...state,
            }
        /*
    case CATEGORIA_FETCH:
        return {
            ...state,
            data: action.data
        }*/
        case ALMACEN_UPDATE:
            return {
                ...state,
            }
        case ALMACEN_DELETE:
            const id = action.data
            return {
                ...state,
                list: state.list.filter(item => item.id !== id)
            }
        default:
            return state;
    }
}
export default almacenReducer