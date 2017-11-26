import {
    DETALLECOMPRA_LIST,
    DETALLECOMPRA_LIST_FAILURE,
    DETALLECOMPRA_ADD, DETALLECOMPRA_UPDATE,
    DETALLECOMPRA_DELETE
} from '../actions/detalleCompra-action'

const initialState = {
    list: [],
    data: {},
    error: null
}

const detalleCompraReducer = (state = initialState, action) => {
    switch (action.type) {
        case DETALLECOMPRA_LIST:
            return {
                ...state,
                list: action.list,
                error: null
            }
        case DETALLECOMPRA_LIST_FAILURE: return {
            ...state,
            list: [],
            error: action.error,
        }
        case DETALLECOMPRA_ADD:
            return {
                ...state,
            }
        case DETALLECOMPRA_UPDATE:
            return {
                ...state,
            }
        case DETALLECOMPRA_DELETE:
            const id = action.data
            return {
                ...state,
                list: state.list.filter(item => item.id !== id)
            }
        default:
            return state;
    }
}
export default detalleCompraReducer