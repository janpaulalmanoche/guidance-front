export const state = {


    gender: '',
    birthday: '',
    place_of_birth: '',
    religion: '',
    tribal: '',
    number: '',
    birth_order: '',
    number_of_siblings: '',
    provincial_address: '',
    current_city_address: '',

    selectedCars: null,

}

export const mutations = {

    birthday(state, $birthday) {
        state.birthday = $birthday;
    },
    place_of_birth(state, data) {
        state.place_of_birth = data;
    },
    religion(state, data) {
        state.religion = data;
    },
    tribal(state, data) {
        state.tribal = data;
    },
    number(state, data) {
        state.number = data;
    },
    birth_order(state, data) {
        state.birth_order = data;
    },
    number_of_siblings(state, data) {
        state.number_of_siblings = data;
    },
    provincial_address(state, data) {
        state.provincial_address = data;
    },
    current_city_address(state, data) {
        state.current_city_address = data;
    },
    lang(state, data) {
        state.selectedCars = data;
    },


}


export const actions = {
    BDAY({commit}, $birthday) {
        commit('birthday', $birthday);
    },
    PLACE_O_B({commit},data){
        commit('place_of_birth', data);
    },
    RELIGION({commit},data){
        commit('religion', data);
    },
    TRIBAL({commit},data){
        commit('tribal', data);
    },
    NUMBER({commit},data){
        commit('number', data);
    },
     BIRTH_ORDER({commit},data){
         commit('birth_order',data);
    },
    NO_SIBLINGS({commit},data){
         commit('number_of_siblings',data);
    },
    PROVINCIAL_ADD({commit},data){
         commit('provincial_address',data);
    },
    CURRENT_CITY_ADD({commit},data){
        commit('current_city_address',data);
    },

    LANG({commit},data){
        commit('lang',data);
    },









}