import axios from 'axios'


export const state = {
    auth:false,
    accessToken: null,
    loggingIn: false,
    loginError: null,
    user_loged_in:{}
}

export const mutations = {

    loginStart: state => state.loggingIn = true,

    UPDATE_USER_LOGED_IN(state ,$data){
      state.user_loged_in = $data
    },


    loginStop: (state, errorMessage) => {
        state.loggingIn = false;
        state.loginError = errorMessage;
    },
    updateAccessToken: (state, accessToken) => {
        state.accessToken = accessToken;
    },
    logout: (state) => {
        state.accessToken = null;
    },

    UPDATE_AUTH:(state) => {
        state.auth = !state.auth
}


}

export const actions = {

    UPDATE_USER_LOGED_IN({commit},$data){
        commit('UPDATE_USER_LOGED_IN',$data)
    },

    UPDATE_AUTH_A({commit}){
        commit('UPDATE_AUTH')
    },

    doLogin({commit}, loginData) {
        commit('loginStart');

        axios.post('https://reqres.in/api/login', {
            ...loginData
        })
            .then(response => {
                localStorage.setItem('accessToken', response.data.token);
                commit('loginStop', null);
                commit('updateAccessToken', response.data.token);
                commit('UPDATE_USER_LOGED_IN',r.data.user)
                router.push('/users');
            })
            .catch(error => {
                commit('loginStop', error.response.data.error);
                commit('updateAccessToken', null);
            })
    },
    fetchAccessToken({commit}) {
        commit('updateAccessToken', localStorage.getItem('accessToken'));
    },
    logout({commit}) {
        localStorage.removeItem('accessToken');
        commit('logout');
        this.$router.push('/login');
    }
}




