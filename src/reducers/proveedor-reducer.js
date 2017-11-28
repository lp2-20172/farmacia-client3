import {
    PROVEEDOR_LIST,
    PROVEEDOR_LIST_FAILURE,
    PROVEEDOR_ADD, PROVEEDOR_UPDATE,
    PROVEEDOR_DELETE
} from '../actions/proveedor-action'
//import { CATEGORIA_FETCH,  } from '../actions/categoria-action'

const initialState = {
    list: [],
    data: {},
    error: null
}

const proveedorReducer = (state = initialState, action) => {
    switch (action.type) {
        case PROVEEDOR_LIST:
            return {
                ...state,
                list: action.list,
                error: null
            }
        case PROVEEDOR_LIST_FAILURE: return {
            ...state,
            list: [],
            error: action.error,
        }
        case PROVEEDOR_ADD:
            return {
                ...state,
            }
        /*
    case PROVEEDOR_FETCH:
        return {
            ...state,
            data: action.data
        }*/
        case PROVEEDOR_UPDATE:
            return {
                ...state,
            }
        case PROVEEDOR_DELETE:
            const id = action.data
            return {
                ...state,
                list: state.list.filter(item => item.id !== id)
            }
        default:
            return state;
    }
}
export default proveedorReducer