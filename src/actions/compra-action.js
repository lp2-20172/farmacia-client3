import client from './'

const url = "/api-catalogo/compras/"
export const COMPRA_LIST = "COMPRA_LIST"
export const compraList = (list) => (
    {
        type: COMPRA_LIST,
        list
    }
)

export const COMPRA_LIST_FAILURE = 'COMPRA_LIST_FAILURE'
export const compraListFailure = error => ({
    type: COMPRA_LIST_FAILURE,
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
            dispatch(compraList(r.data))
        }).catch(error => {
            //throw (error)
            //console.log('getList catch:' + JSON.stringify(error.response))
            if (error.response) {
                dispatch(compraListFailure(error.response.data.detail))
            } else if (error.request) {
                console.log(error.request);
                dispatch(compraListFailure(JSON.stringify('Error ' + error.request)))
            } else {
                // Something happened in setting up the request that triggered an Error
                console.log('Error', error.message);
                dispatch(compraListFailure('Error ' + error.message))
            }
            //console.log(error.config);

        })
    }
}


export const COMPRA_ADD = "COMPRA_ADD"
export const compraAdd = () => (
    {
        type: COMPRA_ADD,
    }
)
export const save = (d, h) => {
    return (dispatch) => {
        return new Promise((resolve, reject) => {
            try {
                client.post(url, d).then(r => {
                    dispatch(compraAdd())
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
export const COMPRA_FETCH = "COMPRA_FETCH"
export const compraFetch = (data) => (
    {
        type: COMPRA_FETCH,
        dCOMPRA
)
export const getByIdx = (id) => {
    return (dispatch) => {
        return new Promise((resolve, reject) => {
            try {
                client.get(`${url}${id}`).then(r => {
                    dispatch(copmraFetch(r.data))
                    resolve(r)
                })
            } catch (err) {
                reject(err)
            }
        })
    }
}
*/
export const COMPRA_UPDATE = "COMPRA_UPDATE"
export const compraUpdate = () => (
    {
        type: COMPRA_UPDATE,
    }
)
export const update = (d, h) => {
    return (dispatch) => {
        return new Promise((resolve, reject) => {
            try {
                client.put(`${url}${d.id}/`, d).then(r => {
                    dispatch(compraUpdate())
                    resolve(h)
                })
            } catch (err) {
                reject(err)
            }
        })
    }
}

export const COMPRA_DELETE = "COMPRA_DELETE"
export const compraDelete = (data) => (
    {
        type: COMPRA_DELETE,
        data
    }
)

export const del = (id) => {
    return (dispatch) => {
        return new Promise((resolve, reject) => {
            try {
                client.delete(`${url}${id}`).then(r => {
                    dispatch(compraDelete(id))
                    resolve(r)
                })
            } catch (err) {
                reject(err)
            }
        })
    }
}
