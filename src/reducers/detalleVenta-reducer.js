import {
    DETALLEVENTA_LIST,
    DETALLEVENTA_LIST_FAILURE,
    DETALLEVENTA_ADD, DETALLEVENTA_UPDATE,
    DETALLEVENTA_DELETE
} from '../actions/detalleVenta-action'

const initialState = {
    list: [],
    data: {},
    error: null
}

const detalleVentaReducer = (state = initialState, action) => {
    switch (action.type) {
        case DETALLEVENTA_LIST:
            return {
                ...state,
                list: action.list,
                error: null
            }
        case DETALLEVENTA_LIST_FAILURE: return {
            ...state,
            list: [],
            error: action.error,
        }
        case DETALLEVENTA_ADD:
            return {
                ...state,
            }
        /*
    case CATEGORIA_FETCH:
        return {
            ...state,
            data: action.data
        }*/
        case DETALLEVENTA_UPDATE:
            return {
                ...state,
            }
        case DETALLEVENTA_DELETE:
            const id = action.data
            return {
                ...state,
                list: state.list.filter(item => item.id !== id)
            }
        default:
            return state;
    }
}
export default detalleVentaReducer