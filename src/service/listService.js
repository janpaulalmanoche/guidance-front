import baseAPi from './baseApi.js';
import axios from 'axios';
const baseAPI = baseAPi.baseAPI;

export default {
    loginService($email,$password){
        return baseAPI.post('login',{
            email:$email,
            password:$password,
        })
    },
}