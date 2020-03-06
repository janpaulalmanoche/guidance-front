export const state = {
    student: []
}

export const mutations = {
    SET_STUDENT: (state, $data) => {
        state.student = $data
    }
}

export const actions = {
    SET_STUDENT_STATE({commit},data){
        commit('SET_STUDENT',data)
    }
}
