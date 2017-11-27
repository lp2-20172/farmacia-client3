import client from './'

const url = "/api-catalogo/detalleVenta/"
export const DETALLEVENTA_LIST = "DETALLEVENTA_LIST"
export const detalleVentaList = (list) => (
    {
        type: DETALLEVENTA_LIST,
        list
    }
)

export const DETALLEVENTA_LIST_FAILURE = 'DETALLEVENTA_LIST_FAILURE'
export const detalleVentaListFailure = error => ({
    type: DETALLEVENTA_LIST_FAILURE,
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
            dispatch(detalleVentaList(r.data))
        }).catch(error => {
            //throw (error)
            //console.log('getList catch:' + JSON.stringify(error.response))
            if (error.response) {
                dispatch(detalleVentaListFailure(error.response.data.detail))
            } else if (error.request) {
                console.log(error.request);
                dispatch(detalleVentaListFailure(JSON.stringify('Error ' + error.request)))
            } else {
                // Something happened in setting up the request that triggered an Error
                console.log('Error', error.message);
                dispatch(detalleVentaListFailure('Error ' + error.message))
            }
            //console.log(error.config);

        })
    }
}


export const DETALLEVENTA_ADD = "DETALLEVENTA_ADD"
export const detalleVentaAdd = detalleVenta => (
    {
        type: DETALLEVENTA_ADD,
    }
)
export const save = (d, h) => {
    return (dispatch) => {
        return new Promise((resolve, reject) => {
            try {
                client.post(url, d).then(r => {
                    dispatch(detalleVentaAdd())
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

export const DETALLEVENTA_UPDATE = "DETALLEVENTA_UPDATE"
export const detalleVentaUpdate = () => (
    {
        type: DETALLEVENTA_UPDATE,
    }
)
export const update = (d, h) => {
    return (dispatch) => {
        return new Promise((resolve, reject) => {
            try {
                client.put(`${url}${d.id}/`, d).then(r => {
                    dispatch(detalleVentaUpdate())
                    resolve(h)
                })
            } catch (err) {
                reject(err)
            }
        })
    }
}

export const DETALLEVENTA_DELETE = "DETALLEVENTA_DELETE"
export const detalleVentaDelete = (data) => (
    {
        type: DETALLEVENTA_DELETE,
        data
    }
)

export const del = (id) => {
    return (dispatch) => {
        return new Promise((resolve, reject) => {
            try {
                client.delete(`${url}${id}`).then(r => {
                    dispatch(detalleVentaDelete(id))
                    resolve(r)
                })
            } catch (err) {
                reject(err)
            }
        })
    }
}
