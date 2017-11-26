import client from './'

const url = "/api-catalogo/unidadMeds/"
export const UNIDADMED_LIST = "UNIDADMED_LIST"
export const unidadMedList = (list) => (
    {
        type: UNIDADMED_LIST,
        list
    }
)

export const UNIDADMED_LIST_FAILURE = 'UNIDADMED_LIST_FAILURE'
export const unidadMedListFailure = error => ({
    type: UNIDADMED_LIST_FAILURE,
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
            dispatch(unidadMedList(r.data))
        }).catch(error => {
            //throw (error)
            //console.log('getList catch:' + JSON.stringify(error.response))
            if (error.response) {
                dispatch(unidadMedListFailure(error.response.data.detail))
            } else if (error.request) {
                console.log(error.request);
                dispatch(unidadMedListFailure(JSON.stringify('Error ' + error.request)))
            } else {
                // Something happened in setting up the request that triggered an Error
                console.log('Error', error.message);
                dispatch(unidadMedListFailure('Error ' + error.message))
            }
            //console.log(error.config);

        })
    }
}


export const UNIDADMED_ADD = "UNIDADMED_ADD"
export const unidadMedAdd = () => (
    {
        type: UNIDADMED_ADD,
    }
)
export const save = (d, h) => {
    return (dispatch) => {
        return new Promise((resolve, reject) => {
            try {
                client.post(url, d).then(r => {
                    dispatch(unidadMedAdd())
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
export const UNIDADMED_FETCH = "UNIDADMED_FETCH"
export const UNIDADMEDFetch = (data) => (
    {
        type: UNIDADMED_FETCH,
        dALMACEN
)
export const getByIdx = (id) => {
    return (dispatch) => {
        return new Promise((resolve, reject) => {
            try {
                client.get(`${url}${id}`).then(r => {
                    dispatch(UNIDADMEDFetch(r.data))
                    resolve(r)
                })
            } catch (err) {
                reject(err)
            }
        })
    }
}
*/
export const UNIDADMED_UPDATE = "UNIDADMED_UPDATE"
export const unidadMedUpdate = () => (
    {
        type: UNIDADMED_UPDATE,
    }
)
export const update = (d, h) => {
    return (dispatch) => {
        return new Promise((resolve, reject) => {
            try {
                client.put(`${url}${d.id}/`, d).then(r => {
                    dispatch(unidadMedUpdate())
                    resolve(h)
                })
            } catch (err) {
                reject(err)
            }
        })
    }
}

export const UNIDADMED_DELETE = "UNIDADMED_DELETE"
export const unidadMedDelete = (data) => (
    {
        type: UNIDADMED_DELETE,
        data
    }
)

export const del = (id) => {
    return (dispatch) => {
        return new Promise((resolve, reject) => {
            try {
                client.delete(`${url}${id}`).then(r => {
                    dispatch(unidadMedDelete(id))
                    resolve(r)
                })
            } catch (err) {
                reject(err)
            }
        })
    }
}
