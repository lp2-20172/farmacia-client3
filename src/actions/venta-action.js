import client from './'

const url = "/api-catalogo/ventas/"
export const VENTA_LIST = "VENTA_LIST"
export const ventaList = (list) => (
    {
        type: VENTA_LIST,
        list
    }
)

export const VENTA_LIST_FAILURE = 'VENTA_LIST_FAILURE'
export const ventaListFailure = error => ({
    type: VENTA_LIST_FAILURE,
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
            dispatch(ventaList(r.data))
        }).catch(error => {
            //throw (error)
            //console.log('getList catch:' + JSON.stringify(error.response))
            if (error.response) {
                dispatch(ventaListFailure(error.response.data.detail))
            } else if (error.request) {
                console.log(error.request);
                dispatch(ventaListFailure(JSON.stringify('Error ' + error.request)))
            } else {
                // Something happened in setting up the request that triggered an Error
                console.log('Error', error.message);
                dispatch(ventaListFailure('Error ' + error.message))
            }
            //console.log(error.config);

        })
    }
}


export const VENTA_ADD = "VENTA_ADD"
export const ventaAdd = () => (
    {
        type: VENTA_ADD,
    }
)
export const save = (d, h) => {
    return (dispatch) => {
        return new Promise((resolve, reject) => {
            try {
                client.post(url, d).then(r => {
                    dispatch(ventaAdd())
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

export const VENTA_UPDATE = "VENTA_UPDATE"
export const ventaUpdate = () => (
    {
        type: VENTA_UPDATE,
    }
)
export const update = (d, h) => {
    return (dispatch) => {
        return new Promise((resolve, reject) => {
            try {
                client.put(`${url}${d.id}/`, d).then(r => {
                    dispatch(ventaUpdate())
                    resolve(h)
                })
            } catch (err) {
                reject(err)
            }
        })
    }
}

export const VENTA_DELETE = "VENTA_DELETE"
export const ventaDelete = (data) => (
    {
        type: VENTA_DELETE,
        data
    }
)

export const del = (id) => {
    return (dispatch) => {
        return new Promise((resolve, reject) => {
            try {
                client.delete(`${url}${id}`).then(r => {
                    dispatch(ventaDelete(id))
                    resolve(r)
                })
            } catch (err) {
                reject(err)
            }
        })
    }
}
