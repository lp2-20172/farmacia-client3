import client from './'

const url = "/api-catalogo/productos/"
export const PRODUCTO_LIST = "PRODUCTO_LIST"
export const productoList = (list) => (
    {
        type: PRODUCTO_LIST,
        list
    }
)

export const PRODUCTO_LIST_FAILURE = 'PRODUCTO_LIST_FAILURE'
export const productoListFailure = error => ({
    type: PRODUCTO_LIST_FAILURE,
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
            dispatch(productoList(r.data))
        }).catch(error => {
            //throw (error)
            //console.log('getList catch:' + JSON.stringify(error.response))
            if (error.response) {
                dispatch(productoListFailure(error.response.data.detail))
            } else if (error.request) {
                console.log(error.request);
                dispatch(productoListFailure(JSON.stringify('Error ' + error.request)))
            } else {
                // Something happened in setting up the request that triggered an Error
                console.log('Error', error.message);
                dispatch(productoListFailure('Error ' + error.message))
            }
            //console.log(error.config);

        })
    }
}


export const PRODUCTO_ADD = "PRODUCTO_ADD"
export const productoAdd = () => (
    {
        type: PRODUCTO_ADD,
    }
)
export const save = (d, h) => {
    return (dispatch) => {
        return new Promise((resolve, reject) => {
            try {
                client.post(url, d).then(r => {
                    dispatch(productoAdd())
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
export const PRODUCTO_FETCH = "PRODUCTO_FETCH"
export const productoFetch = (data) => (
    {
        type: PRODUCTO_FETCH,
        dALMACEN
)
export const getByIdx = (id) => {
    return (dispatch) => {
        return new Promise((resolve, reject) => {
            try {
                client.get(`${url}${id}`).then(r => {
                    dispatch(productoFetch(r.data))
                    resolve(r)
                })
            } catch (err) {
                reject(err)
            }
        })
    }
}
*/
export const PRODUCTO_UPDATE = "PRODUCTO_UPDATE"
export const productoUpdate = () => (
    {
        type: PRODUCTO_UPDATE,
    }
)
export const update = (d, h) => {
    return (dispatch) => {
        return new Promise((resolve, reject) => {
            try {
                client.put(`${url}${d.id}/`, d).then(r => {
                    dispatch(productoUpdate())
                    resolve(h)
                })
            } catch (err) {
                reject(err)
            }
        })
    }
}

export const PRODUCTO_DELETE = "PRODUCTO_DELETE"
export const productoDelete = (data) => (
    {
        type: PRODUCTO_DELETE,
        data
    }
)

export const del = (id) => {
    return (dispatch) => {
        return new Promise((resolve, reject) => {
            try {
                client.delete(`${url}${id}`).then(r => {
                    dispatch(productoDelete(id))
                    resolve(r)
                })
            } catch (err) {
                reject(err)
            }
        })
    }
}
