import axios from 'axios'
const client = axios.create({
    baseURL: "https://eventos-serve.herokuapp.com"
})
export default client