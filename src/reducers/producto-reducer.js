import {
    PRODUCTO_LIST,
    PRODUCTO_LIST_FAILURE,
    PRODUCTO_ADD, PRODUCTO_UPDATE,
    PRODUCTO_DELETE
} from '../actions/producto-action'
//import { CATEGORIA_FETCH,  } from '../actions/categoria-action'

const initialState = {
    list: [],
    data: {},
    error: null
}

const productoReducer = (state = initialState, action) => {
    switch (action.type) {
        case PRODUCTO_LIST:
            return {
                ...state,
                list: action.list,
                error: null
            }
        case PRODUCTO_LIST_FAILURE: return {
            ...state,
            list: [],
            error: action.error,
        }
        case PRODUCTO_ADD:
            return {
                ...state,
            }
        /*
    case PRODUCTO_FETCH:
        return {
            ...state,
            data: action.data
        }*/
        case PRODUCTO_UPDATE:
            return {
                ...state,
            }
        case PRODUCTO_DELETE:
            const id = action.data
            return {
                ...state,
                list: state.list.filter(item => item.id !== id)
            }
        default:
            return state;
    }
}
export default productoReducer