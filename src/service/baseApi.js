import axios from 'axios'

const baseAPI = axios.create({
    // baseURL: 'https://intsik.herokuapp.com/api/',
    baseURL: 'http://127.0.0.1:8000/api/',
    withCredentials: false,
    //'http://127.0.0.1:8000/api/',

    headers:{
        Accept:'application/json',
        'Content-type' : 'application/json'
    }
})


export default {
    baseAPI
}