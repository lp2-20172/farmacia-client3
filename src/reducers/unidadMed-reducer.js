import {
    UNIDADMED_LIST,
    UNIDADMED_LIST_FAILURE,
    UNIDADMED_ADD, UNIDADMED_UPDATE,
    UNIDADMED_DELETE
} from '../actions/unidadMed-action'
//import { CATEGORIA_FETCH,  } from '../actions/categoria-action'

const initialState = {
    list: [],
    data: {},
    error: null
}

const unidadMedReducer = (state = initialState, action) => {
    switch (action.type) {
        case UNIDADMED_LIST:
            return {
                ...state,
                list: action.list,
                error: null
            }
        case UNIDADMED_LIST_FAILURE: return {
            ...state,
            list: [],
            error: action.error,
        }
        case UNIDADMED_ADD:
            return {
                ...state,
            }
        /*
    case UNIDADMED_FETCH:
        return {
            ...state,
            data: action.data
        }*/
        case UNIDADMED_UPDATE:
            return {
                ...state,
            }
        case UNIDADMED_DELETE:
            const id = action.data
            return {
                ...state,
                list: state.list.filter(item => item.id !== id)
            }
        default:
            return state;
    }
}
export default unidadMedReducer