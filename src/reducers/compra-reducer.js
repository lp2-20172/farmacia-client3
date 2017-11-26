import {
    COMPRA_LIST,
    COMPRA_LIST_FAILURE,
    COMPRA_ADD, COMPRA_UPDATE,
    COMPRA_DELETE
} from '../actions/compra-action'
//import { CATEGORIA_FETCH,  } from '../actions/compra-action'

const initialState = {
    list: [],
    data: {},
    error: null
}

const compraReducer = (state = initialState, action) => {
    switch (action.type) {
        case COMPRA_LIST:
            return {
                ...state,
                list: action.list,
                error: null
            }
        case COMPRA_LIST_FAILURE: return {
            ...state,
            list: [],
            error: action.error,
        }
        case COMPRA_ADD:
            return {
                ...state,
            }
        /*
    case COMPRA_FETCH:
        return {
            ...state,
            data: action.data
        }*/
        case COMPRA_UPDATE:
            return {
                ...state,
            }
        case COMPRA_DELETE:
            const id = action.data
            return {
                ...state,
                list: state.list.filter(item => item.id !== id)
            }
        default:
            return state;
    }
}
export default compraReducer