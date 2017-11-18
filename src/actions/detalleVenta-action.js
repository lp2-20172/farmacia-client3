//import axios from "axios";

import client from './'

//https://github.com/brandiqa/redux-crud-example/blob/master/src/actions/contact-actions.js#L22

const url = '/api-catalogo/detalleVenta/'

export const DETALLEVENTA_LIST_REQUEST = "DETALLEVENTA_LIST_REQUEST"
export const DETALLEVENTA_LIST_SUCCESS = 'DETALLEVENTA_LIST_SUCCESS'
export const DETALLEVENTA_LIST_FAILURE = 'DETALLEVENTA_LIST_FAILURE'

export const detalleVentaList = () => ({
    type: DETALLEVENTA_LIST_REQUEST,
})

export const detalleVentaListSuccess = (list) => ({
    type: DETALLEVENTA_LIST_SUCCESS,
    list
})

export const detalleVentaListFailure = error => ({
    type: DETALLEVENTA_LIST_FAILURE,
    error
})

export const DETALLEVENTA_ADD = "DETALLEVENTA_ADD"
export const DETALLEVENTA_FETCH = "DETALLEVENTA_FETCH"
export const DETALLEVENTA_UPDATE = "DETALLEVENTA_UPDATE"
export const DETALLEVENTA_DELETE = "DETALLEVENTA_DELETE"

export const getList = (q = '') => {
    let params = {
        params: {
            query: q
        }
    }
    return (dispatch) => {
        client.get(url, params).then(r => {
            dispatch(detalleVentaListSuccess(r.data))
        }).catch(error => { //throw (error)
            //console.log('getList catch:' + JSON.stringify(error.response))
            if (error.response) {
                dispatch(detalleVentaListFailure(error.response.data.detail))
            } else if (error.request) {
                console.log(error.request);
                dispatch(detalleVentaListFailure(JSON.stringify('Error '+error.request)))
            } else {
                // Something happened in setting up the request that triggered an Error
                console.log('Error', error.message);
                dispatch(detalleVentaListFailure('Error '+error.message))
            }
            //console.log(error.config);
        })
    }
}

export function save(data, history) {
    console.log('save data:' + JSON.stringify(data))
    return (dispatch) => {
        return client.post(url, data)
            .then((r) => {
                dispatch({
                    "type": DETALLEVENTA_ADD,
                    "data": r.data //no usado
                })
                history.push('/catalogo/detalleVentas/list')
            })
            .catch((error) => {
                console.log(error)
                throw (error)
            })
    }
}

export function getById(id) {
    return dispatch => {
        return client.get(`${url}${id}`)
            .then((r) => {
                /*
                dispatch({
                    "type": DETALLECOMPRA_FETCH,
                    "data": r.data 
                })
                */
                return r.data
            })
            .catch((error) => {
                console.log(error)
                //throw (error)
            })
    }
}

export function update(data, history) {
    return (dispatch) => {
        return client.put(`${url}${data.id}/`, data)
            .then((r) => {
                dispatch({
                    "type": DETALLEVENTA_UPDATE,
                    "data": r.data //no usado
                })
                history.push('/catalogo/detalleVentas/list')
            })
            .catch((error) => {
                console.log(error)
                throw (error)
            })
    }
}

export function del(_id, history) {
    return dispatch => {
        return client.delete(`${url}${_id}`)
            .then((r) => {
                //console.log('deletex r:' + JSON.stringify(r))
                dispatch({
                    "type": DETALLEVENTA_DELETE,
                    "data": _id
                })
                //history.push('/catalogo/detalleVentas')
            })
            .catch((error) => {
                console.log(error)
                throw (error)
            })
    }
}