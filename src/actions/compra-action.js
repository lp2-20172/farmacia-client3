//import axios from "axios";

import client from './'

//https://github.com/brandiqa/redux-crud-example/blob/master/src/actions/contact-actions.js#L22

const url = '/api-catalogo/compras/'

export const COMPRA_LIST_REQUEST = "COMPRA_LIST_REQUEST"
export const COMPRA_LIST_SUCCESS = 'COMPRA_LIST_SUCCESS'
export const COMPRA_LIST_FAILURE = 'COMPRA_LIST_FAILURE'

export const compraList = () => ({
    type: COMPRA_LIST_REQUEST,
})

export const compraListSuccess = (list) => ({
    type: COMPRA_LIST_SUCCESS,
    list
})

export const compraListFailure = error => ({
    type: COMPRA_LIST_FAILURE,
    error
})

export const COMPRA_ADD = "COMPRA_ADD"
export const COMPRA_FETCH = "COMPRA_FETCH"
export const COMPRA_UPDATE = "COMPRA_UPDATE"
export const COMPRA_DELETE = "COMPRA_DELETE"

export const getList = (q = '') => {
    let params = {
        params: {
            query: q
        }
    }
    return (dispatch) => {
        client.get(url, params).then(r => {
            dispatch(compraListSuccess(r.data))
        }).catch(error => { //throw (error)
            //console.log('getList catch:' + JSON.stringify(error.response))
            if (error.response) {
                dispatch(compraListFailure(error.response.data.detail))
            } else if (error.request) {
                console.log(error.request);
                dispatch(compraListFailure(JSON.stringify('Error '+error.request)))
            } else {
                // Something happened in setting up the request that triggered an Error
                console.log('Error', error.message);
                dispatch(compraListFailure('Error '+error.message))
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
                    "type": COMPRA_ADD,
                    "data": r.data //no usado
                })
                history.push('/catalogo/compras/list')
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
                    "type": CATEGORIA_FETCH,
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
                    "type": COMPRA_UPDATE,
                    "data": r.data //no usado
                })
                history.push('/catalogo/compras/list')
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
                    "type": COMPRA_DELETE,
                    "data": _id
                })
                //history.push('/catalogo/categorias')
            })
            .catch((error) => {
                console.log(error)
                throw (error)
            })
    }
}