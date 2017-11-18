import {combineReducers} from 'redux'

import categoria from './categoria-reducer'
import theme from './theme-reducer'

let reducer = combineReducers({
    theme:theme,
    categoria: categoria,
    
})

export default reducer               