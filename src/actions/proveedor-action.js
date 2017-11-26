import client from './'

const url = "/api-catalogo/proveedores/"
export const PROVEEDOR_LIST = "PROVEEDOR_LIST"
export const proveedorList = (list) => (
    {
        type: PROVEEDOR_LIST,
        list
    }
)

export const PROVEEDOR_LIST_FAILURE = 'PROVEEDOR_LIST_FAILURE'
export const proveedorListFailure = error => ({
    type: PROVEEDOR_LIST_FAILURE,
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
            dispatch(proveedorList(r.data))
        }).catch(error => {
            //throw (error)
            //console.log('getList catch:' + JSON.stringify(error.response))
            if (error.response) {
                dispatch(proveedorListFailure(error.response.data.detail))
            } else if (error.request) {
                console.log(error.request);
                dispatch(proveedorListFailure(JSON.stringify('Error ' + error.request)))
            } else {
                // Something happened in setting up the request that triggered an Error
                console.log('Error', error.message);
                dispatch(proveedorListFailure('Error ' + error.message))
            }
            //console.log(error.config);

        })
    }
}


export const PROVEEDOR_ADD = "PROVEEDOR_ADD"
export const proveedorAdd = () => (
    {
        type: PROVEEDOR_ADD,
    }
)
export const save = (d, h) => {
    return (dispatch) => {
        return new Promise((resolve, reject) => {
            try {
                client.post(url, d).then(r => {
                    dispatch(proveedorAdd())
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
export const PROVEEDOR_FETCH = "PROVEEDOR_FETCH"
export const proveedorFetch = (data) => (
    {
        type: PROVEEDOR_FETCH,
        dALMACEN
)
export const getByIdx = (id) => {
    return (dispatch) => {
        return new Promise((resolve, reject) => {
            try {
                client.get(`${url}${id}`).then(r => {
                    dispatch(proveedorFetch(r.data))
                    resolve(r)
                })
            } catch (err) {
                reject(err)
            }
        })
    }
}
*/
export const PROVEEDOR_UPDATE = "PROVEEDOR_UPDATE"
export const proveedorUpdate = () => (
    {
        type: PROVEEDOR_UPDATE,
    }
)
export const update = (d, h) => {
    return (dispatch) => {
        return new Promise((resolve, reject) => {
            try {
                client.put(`${url}${d.id}/`, d).then(r => {
                    dispatch(proveedorUpdate())
                    resolve(h)
                })
            } catch (err) {
                reject(err)
            }
        })
    }
}

export const PROVEEDOR_DELETE = "PROVEEDOR_DELETE"
export const proveedorDelete = (data) => (
    {
        type: PROVEEDOR_DELETE,
        data
    }
)

export const del = (id) => {
    return (dispatch) => {
        return new Promise((resolve, reject) => {
            try {
                client.delete(`${url}${id}`).then(r => {
                    dispatch(proveedorDelete(id))
                    resolve(r)
                })
            } catch (err) {
                reject(err)
            }
        })
    }
}
