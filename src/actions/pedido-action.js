import client from './'

const url = "/api-catalogo/pedido/"
export const PEDIDO_LIST = "PEDIDO_LIST"
export const pedidoList = (list) => (
    {
        type: PEDIDO_LIST,
        list
    }
)

export const PEDIDO_LIST_FAILURE = 'PEDIDO_LIST_FAILURE'
export const pedidoListFailure = error => ({
    type: PEDIDO_LIST_FAILURE,
    error
})

export const getList = (q = '') => {
    let params = {
        params: {
            query: q
        }
    }
    return (dispatch) => {
        client.get(url, params).then(r => {
            dispatch(pedidoList(r.data))
        }).catch(error => {
            //throw (error)
            //console.log('getList catch:' + JSON.stringify(error.response))
            if (error.response) {
                dispatch(pedidoListFailure(error.response.data.detail))
            } else if (error.request) {
                console.log(error.request);
                dispatch(pedidoListFailure(JSON.stringify('Error ' + error.request)))
            } else {
                // Something happened in setting up the request that triggered an Error
                console.log('Error', error.message);
                dispatch(pedidoListFailure('Error ' + error.message))
            }
            //console.log(error.config);

        })
    }
}


export const PEDIDO_ADD = "PEDIDO_ADD"
export const pedidoAdd = () => (
    {
        type: PEDIDO_ADD,
    }
)
export const save = (d, h) => {
    return (dispatch) => {
        return new Promise((resolve, reject) => {
            try {
                client.post(url, d).then(r => {
                    dispatch(pedidoAdd())
                    resolve(h)
                })
            } catch (err) {
                reject(err)
            }
        })
    }
}


export const getById = (id) => {
    return (dispatch) => {
        return client.get(`${url}${id}`).then(r => {
            return r.data
        })
    }
}
/*
export const CATEGORIA_FETCH = "CATEGORIA_FETCH"
export const categoriaFetch = (data) => (
    {
        type: CATEGORIA_FETCH,
        dALMACEN
)
export const getByIdx = (id) => {
    return (dispatch) => {
        return new Promise((resolve, reject) => {
            try {
                client.get(`${url}${id}`).then(r => {
                    dispatch(categoriaFetch(r.data))
                    resolve(r)
                })
            } catch (err) {
                reject(err)
            }
        })
    }
}
*/
export const PEDIDO_UPDATE = "PEDIDO_UPDATE"
export const pedidoUpdate = () => (
    {
        type: PEDIDO_UPDATE,
    }
)
export const update = (d, h) => {
    return (dispatch) => {
        return new Promise((resolve, reject) => {
            try {
                client.put(`${url}${d.id}/`, d).then(r => {
                    dispatch(pedidoUpdate())
                    resolve(h)
                })
            } catch (err) {
                reject(err)
            }
        })
    }
}

export const PEDIDO_DELETE = "PEDIDO_DELETE"
export const pedidoDelete = (data) => (
    {
        type: PEDIDO_DELETE,
        data
    }
)

export const del = (id) => {
    return (dispatch) => {
        return new Promise((resolve, reject) => {
            try {
                client.delete(`${url}${id}`).then(r => {
                    dispatch(pedidoDelete(id))
                    resolve(r)
                })
            } catch (err) {
                reject(err)
            }
        })
    }
}
