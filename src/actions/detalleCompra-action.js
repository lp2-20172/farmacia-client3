import client from './'

const url = "/api-catalogo/detalleCompra/"
export const DETALLECOMPRA_LIST = "DETALLECOMPRA_LIST"
export const detalleCompraList = (list) => (
    {
        type: DETALLECOMPRA_LIST,
        list
    }
)

export const DETALLECOMPRA_LIST_FAILURE = 'DETALLECOMPRA_LIST_FAILURE'
export const detalleCompraListFailure = error => ({
    type: DETALLECOMPRA_LIST_FAILURE,
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
            dispatch(detalleCompraList(r.data))
        }).catch(error => {
            //throw (error)
            //console.log('getList catch:' + JSON.stringify(error.response))
            if (error.response) {
                dispatch(detalleCompraListFailure(error.response.data.detail))
            } else if (error.request) {
                console.log(error.request);
                dispatch(detalleCompraListFailure(JSON.stringify('Error ' + error.request)))
            } else {
                // Something happened in setting up the request that triggered an Error
                console.log('Error', error.message);
                dispatch(detalleCompraListFailure('Error ' + error.message))
            }
            //console.log(error.config);

        })
    }
}


export const DETALLECOMPRA_ADD = "DETALLECOMPRA_ADD"
export const detalleCompraAdd = () => (
    {
        type: DETALLECOMPRA_ADD,
    }
)
export const save = (d, h) => {
    return (dispatch) => {
        return new Promise((resolve, reject) => {
            try {
                client.post(url, d).then(r => {
                    dispatch(detalleCompraAdd())
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

export const DETALLECOMPRA_UPDATE = "DETALLECOMPRA_UPDATE"
export const detalleCompraUpdate = () => (
    {
        type: DETALLECOMPRA_UPDATE,
    }
)
export const update = (d, h) => {
    return (dispatch) => {
        return new Promise((resolve, reject) => {
            try {
                client.put(`${url}${d.id}/`, d).then(r => {
                    dispatch(detalleCompraUpdate())
                    resolve(h)
                })
            } catch (err) {
                reject(err)
            }
        })
    }
}

export const DETALLECOMPRA_DELETE = "DETALLECOMPRA_DELETE"
export const detalleCompraDelete = (data) => (
    {
        type: DETALLECOMPRA_DELETE,
        data
    }
)

export const del = (id) => {
    return (dispatch) => {
        return new Promise((resolve, reject) => {
            try {
                client.delete(`${url}${id}`).then(r => {
                    dispatch(detalleCompraDelete(id))
                    resolve(r)
                })
            } catch (err) {
                reject(err)
            }
        })
    }
}
