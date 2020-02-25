import axios from 'axios'
export const state = {
    user: [
        {
            id:'',
            email:'',
            password:'',
            first_name:'',
            last_name:'',
            middle_name:'',
            id_no:'',
            role_id:'',
            type_id:''
        }
    ]
}


export const mutations = {
    USER_UPDATE(state , $data){
        state.user = $data
    }
}

export const actions = {
    USER_UPDATE_SEARCH({commit},data){
        commit('USER_UPDATE',data)
    },
    USER_UPDATE_A({commit}){
       return axios.get('http://127.0.0.1:8000/api/user').then( (r)=>{
            commit('USER_UPDATE',r.data.data)
           localStorage.setItem('user_id',99)
        })
    }
}