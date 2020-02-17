import axios from 'axios'
export const state = {
    departments: [{
        department: '',
        a: ''
    }]
}

export const mutations = {

    UPDATE_DEPARTMENT: (state , $data) => {
        state.departments = $data
    }

}

export const actions = {
    UPDATE_DEPARTMENT_A({commit},$data){
        axios.get('http://127.0.0.1:8000/api/department').then( (r)=>{
            commit('UPDATE_DEPARTMENT',r.data.data)
        })

    }
}