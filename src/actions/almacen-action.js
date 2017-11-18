import client from './'

const url = "/api-catalogo/almacenes/"
export const ALMACEN_LIST = "ALMACEN_LIST"
export const almacenList = (list) => (
    {
        type: ALMACEN_LIST,
        list
    }
)

export const ALMACEN_LIST_FAILURE = 'ALMACEN_LIST_FAILURE'
export const almacenListFailure = error => ({
    type: ALMACEN_LIST_FAILURE,
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
            dispatch(almacenList(r.data))
        }).catch(error => {
            //throw (error)
            //console.log('getList catch:' + JSON.stringify(error.response))
            if (error.response) {
                dispatch(almacenListFailure(error.response.data.detail))
            } else if (error.request) {
                console.log(error.request);
                dispatch(almacenListFailure(JSON.stringify('Error ' + error.request)))
            } else {
                // Something happened in setting up the request that triggered an Error
                console.log('Error', error.message);
                dispatch(almacenListFailure('Error ' + error.message))
            }
            //console.log(error.config);

        })
    }
}


export const ALMACEN_ADD = "ALMACEN_ADD"
export const almacenAdd = () => (
    {
        type: ALMACEN_ADD,
    }
)
export const save = (d, h) => {
    return (dispatch) => {
        return new Promise((resolve, reject) => {
            try {
                client.post(url, d).then(r => {
                    dispatch(almacenAdd())
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
export const ALMACEN_UPDATE = "ALMACEN_UPDATE"
export const almacenUpdate = () => (
    {
        type: ALMACEN_UPDATE,
    }
)
export const update = (d, h) => {
    return (dispatch) => {
        return new Promise((resolve, reject) => {
            try {
                client.put(`${url}${d.id}/`, d).then(r => {
                    dispatch(almacenUpdate())
                    resolve(h)
                })
            } catch (err) {
                reject(err)
            }
        })
    }
}

export const ALMACEN_DELETE = "ALMACEN_DELETE"
export const almacenDelete = (data) => (
    {
        type: ALMACEN_DELETE,
        data
    }
)

export const del = (id) => {
    return (dispatch) => {
        return new Promise((resolve, reject) => {
            try {
                client.delete(`${url}${id}`).then(r => {
                    dispatch(almacenDelete(id))
                    resolve(r)
                })
            } catch (err) {
                reject(err)
            }
        })
    }
}
