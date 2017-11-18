import axios from 'axios'
const client = axios.create({
    baseURL: "https://farmacia-serve.herokuapp.com"
})
export default client