import axios from 'axios'

axios.interceptors.request.use(
    (config) => {
        console.log(config)
        return config
    },
    (error)=>{
        console.log(error)
        return error
    }
)

axios.interceptors.response.use(
    (response) => {
        console.log(response)
        return response
    },
    (error)=>{
        console.log(error)
        return error
    }
)

export default axios