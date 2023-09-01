import axios from "axios"

export const newRequest = axios.create({
    baseURL:"http://localhost:8800/api/",
    headers: {
        'Content-Type': 'application/json'
    },
    withCredentials:true
})

export const Ai_api = axios.create({
    baseURL:"http://localhost:5000/",
    withCredentials:true

})

export default newRequest