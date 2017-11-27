import {
    VENTA_LIST,
    VENTA_LIST_FAILURE,
    VENTA_ADD, VENTA_UPDATE,
    VENTA_DELETE
} from '../actions/venta-action'
//import { CATEGORIA_FETCH,  } from '../actions/categoria-action'

const initialState = {
    list: [],
    data: {},
    error: null
}

const ventaReducer = (state = initialState, action) => {
    switch (action.type) {
        case VENTA_LIST:
            return {
                ...state,
                list: action.list,
                error: null
            }
        case VENTA_LIST_FAILURE: return {
            ...state,
            list: [],
            error: action.error,
        }
        case VENTA_ADD:
            return {
                ...state,
            }
        /*
    case CATEGORIA_FETCH:
        return {
            ...state,
            data: action.data
        }*/
        case VENTA_UPDATE:
            return {
                ...state,
            }
        case VENTA_DELETE:
            const id = action.data
            return {
                ...state,
                list: state.list.filter(item => item.id !== id)
            }
        default:
            return state;
    }
}
export default ventaReducer