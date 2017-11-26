import {combineReducers} from 'redux'

import categoria from './categoria-reducer'
import proveedor from './proveedor-reducer'
import almacen from './almacen-reducer'
import producto from './producto-reducer'
import venta from './venta-reducer'
import compra from './compra-reducer'
import detalleVenta from './detalleVenta-reducer'
import detalleCompra from './detalleCompra-reducer'
import cliente from './cliente-reducer'
import unidadMed from './unidadMed-reducer'
import theme from './theme-reducer'

let reducer = combineReducers({
    theme:theme,
    proveedor: proveedor,
    categoria: categoria,
    venta:venta,
    detalleVenta:detalleVenta,
    detalleCompra:detalleCompra,
    compra:compra,
    producto:producto,
    almacen:almacen,
    cliente:cliente,
    unidadMed:unidadMed,
    
})

export default reducer               