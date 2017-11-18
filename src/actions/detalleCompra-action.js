//import axios from "axios";

import client from './'

//https://github.com/brandiqa/redux-crud-example/blob/master/src/actions/contact-actions.js#L22

const url = '/api-catalogo/detalleCompra/'

export const DETALLECOMPRA_LIST_REQUEST = "DETALLECOMPRA_LIST_REQUEST"
export const DETALLECOMPRA_LIST_SUCCESS = 'DETALLECOMPRA_LIST_SUCCESS'
export const DETALLECOMPRA_LIST_FAILURE = 'DETALLECOMPRA_LIST_FAILURE'

export const detalleCompraList = () => ({
    type: DETALLECOMPRA_LIST_REQUEST,
})

export const detalleCompraListSuccess = (list) => ({
    type: DETALLECOMPRA_LIST_SUCCESS,
    list
})

export const detalleCompraListFailure = error => ({
    type: DETALLECOMPRA_LIST_FAILURE,
    error
})

export const DETALLECOMPRA_ADD = "DETALLECOMPRA_ADD"
export const DETALLECOMPRA_FETCH = "DETALLECOMPRA_FETCH"
export const DETALLECOMPRA_UPDATE = "DETALLECOMPRA_UPDATE"
export const DETALLECOMPRA_DELETE = "DETALLECOMPRA_DELETE"

export const getList = (q = '') => {
    let params = {
        params: {
            query: q
        }
    }
    return (dispatch) => {
        client.get(url, params).then(r => {
            dispatch(detalleCompraListSuccess(r.data))
        }).catch(error => { //throw (error)
            //console.log('getList catch:' + JSON.stringify(error.response))
            if (error.response) {
                dispatch(detalleCompraListFailure(error.response.data.detail))
            } else if (error.request) {
                console.log(error.request);
                dispatch(detalleCompraListFailure(JSON.stringify('Error '+error.request)))
            } else {
                // Something happened in setting up the request that triggered an Error
                console.log('Error', error.message);
                dispatch(detalleCompraListFailure('Error '+error.message))
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
                    "type": DETALLECOMPRA_ADD,
                    "data": r.data //no usado
                })
                history.push('/catalogo/detalleCompras/list')
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
                    "type": DETALLECOMPRA_UPDATE,
                    "data": r.data //no usado
                })
                history.push('/catalogo/detalleCompras/list')
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
                    "type": DETALLECOMPRA_DELETE,
                    "data": _id
                })
                //history.push('/catalogo/detalleCompras')
            })
            .catch((error) => {
                console.log(error)
                throw (error)
            })
    }
}