import {
    PEDIDO_LIST,
    PEDIDO_LIST_FAILURE,
    PEDIDO_ADD, PEDIDO_UPDATE,
    PEDIDO_DELETE
} from '../actions/pedido-action'
//import { CATEGORIA_FETCH,  } from '../actions/categoria-action'

const initialState = {
    list: [],
    data: {},
    error: null
}

const pedidoReducer = (state = initialState, action) => {
    switch (action.type) {
        case PEDIDO_LIST:
            return {
                ...state,
                list: action.list,
                error: null
            }
        case PEDIDO_LIST_FAILURE: return {
            ...state,
            list: [],
            error: action.error,
        }
        case PEDIDO_ADD:
            return {
                ...state,
            }
        /*
    case CATEGORIA_FETCH:
        return {
            ...state,
            data: action.data
        }*/
        case PEDIDO_UPDATE:
            return {
                ...state,
            }
        case PEDIDO_DELETE:
            const id = action.data
            return {
                ...state,
                list: state.list.filter(item => item.id !== id)
            }
        default:
            return state;
    }
}
export default pedidoReducer