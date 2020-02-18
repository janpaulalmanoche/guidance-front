export const state = {

//part 2
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
    //part 3
    place: '',
    landlord: '',
    landlord_number: '',
    person_to_be_contacted_emergency: '',
    relationship_person_to_be_contacted_emergency: '',
    relationship_person_to_be_contacted_emergency_no: '',
    complete_address: '',
    //family history part 1 f
    f_first_name:'',
    f_middle_name:'',
    f_last_name:'',
    f_current_address:'',
    f_permanent_address:'',
    f_religious_affiliation:'',
    f_tribal_group:'',
    f_contact_no:'',
    f_email_address:'',
    f_highes_education_attainment:'',
    f_office_address:'',
    f_position:'',
    // family history part 2 mother details
    m_first_name:'',
    m_middle_name:'',
    m_last_name:'',
    m_current_address:'',
    m_permanent_address:'',
    m_religious_affiliation:'',
    m_tribal_group:'',
    m_contact_no:'',
    m_email_address:'',
    m_highes_education_attainment:'',
    m_office_address:'',
    m_position:''

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
    //part 3
    place(state, data) {
        state.place = data
    },
    landlord(state, data) {
        state.landlord = data
    },
    landlord_number(state, data) {
        state.landlord_number = data
    },
    person_to_be_contacted_emergency(state, data) {
        state.person_to_be_contacted_emergency = data
    },
    relationship_person_to_be_contacted_emergency(state, data) {
        state.relationship_person_to_be_contacted_emergency = data
    },
    relationship_person_to_be_contacted_emergency_no(state, data) {
        state.relationship_person_to_be_contacted_emergency_no = data
    },
    complete_address(state, data) {
        state.complete_address = data
    },
    //familiy history part 1 f

    f_first_name(state,data){
        state.f_first_name = data
    },
    F_middle_name(state,data){
        state.f_middle_name = data
    },
    f_last_name(state,data){
        state.f_last_name = data
    },
    f_current_address(state,data){
        state.f_current_address = data
    },
    f_permanent_address(state,data){
        state.f_permanent_address = data
    },
    f_religious_affiliation(state,data){
        state.f_religious_affiliation = data
    },
    f_tribal_group(state,data){
        state.f_tribal_group = data
    },
    f_contact_no(state,data){
        state.f_contact_no = data
    },
    f_email_address(state,data){
        state.f_email_address = data
    },
    f_highes_education_attainment(state,data){
        state.f_highes_education_attainment = data
    },
    f_office_address(state,data){
        state.f_office_address = data
    },
    f_position(state,data){
        state.f_position = data
    },
    //family history mothe details

    m_first_name(state,data){
        state.m_first_name = data
    },
    M_middle_name(state,data){
        state.m_middle_name = data
    },
    M_last_name(state,data){
        state.m_last_name = data
    },
    M_current_address(state,data){
        state.m_current_address = data
    },
    M_permanent_address(state,data){
        state.m_permanent_address = data
    },
    M_religious_affiliation(state,data){
        state.m_religious_affiliation = data
    },
    M_tribal_group(state,data){
        state.m_tribal_group = data
    },
    M_contact_no(state,data){
        state.m_contact_no = data
    },
    M_email_address(state,data){
        state.m_email_address = data
    },
    M_highes_education_attainment(state,data){
        state.m_highes_education_attainment = data
    },
    M_office_address(state,data){
        state.m_office_address = data
    },
    M_position(state,data){
        state.m_position = data
    }
}


export const actions = {
    BDAY({commit}, $birthday) {
        commit('birthday', $birthday);
    },
    PLACE_O_B({commit}, data) {
        commit('place_of_birth', data);
    },
    RELIGION({commit}, data) {
        commit('religion', data);
    },
    TRIBAL({commit}, data) {
        commit('tribal', data);
    },
    NUMBER({commit}, data) {
        commit('number', data);
    },
    BIRTH_ORDER({commit}, data) {
        commit('birth_order', data);
    },
    NO_SIBLINGS({commit}, data) {
        commit('number_of_siblings', data);
    },
    PROVINCIAL_ADD({commit}, data) {
        commit('provincial_address', data);
    },
    CURRENT_CITY_ADD({commit}, data) {
        commit('current_city_address', data);
    },
    LANG({commit}, data) {
        commit('lang', data);
    },
//part 3
    place({commit}, data) {
        commit('place', data)
    },
    landlord({commit}, data) {
        commit('landlord', data)
    },
    landlord_number({commit}, data) {
        commit('landlord_number', data)
    },
    person_to_be_contacted_emergency({commit}, data) {
        commit('person_to_be_contacted_emergency', data)
    },
    relationship_person_to_be_contacted_emergency({commit}, data) {
        commit('relationship_person_to_be_contacted_emergency', data)
    },
    relationship_person_to_be_contacted_emergency_no({commit}, data) {
        commit('relationship_person_to_be_contacted_emergency_no', data)
    },
    complete_address({commit},data){
        commit('complete_address',data)
    },

    //family history part 1 father
    f_first_name({commit},data){
        commit('f_first_name',data)
    },
    FF_middle_name({commit},data){
        commit('F_middle_name',data)
    },
    f_last_name({commit},data){
        commit('f_last_name',data)
    },
    f_current_address({commit},data){
        commit('f_current_address',data)
    },
    f_permanent_address({commit},data){
        commit('f_permanent_address',data)
    },
    f_religious_affiliation({commit},data){
        commit('f_religious_affiliation',data)
    },
    f_tribal_group({commit},data){
        commit('f_tribal_group',data)
    },
    f_contact_no({commit},data){
        commit('f_contact_no',data)
    },
    f_email_address({commit},data){
        commit('f_email_address',data)
    },
    f_highes_education_attainment({commit},data){
      commit('f_highes_education_attainment',data)
    },
    f_office_address({commit},data){
        commit("f_office_address",data)
    },
    f_position({commit},data){
        commit('f_position',data)
    },
    //family history part 2 moher details
    m_first_name({commit},data){
        commit('m_first_name',data)
    },
    MM_middle_name({commit},data){
        commit('M_middle_name',data)
    },
    MM_last_name({commit},data){
        commit('M_last_name',data)
    },
    MM_current_address({commit},data){
        commit('M_current_address',data)
    },
    MM_permanent_address({commit},data){
        commit('M_permanent_address',data)
    },
    MM_religious_affiliation({commit},data){
        commit('M_religious_affiliation',data)
    },
    MM_tribal_group({commit},data){
        commit('M_tribal_group',data)
    },
    MM_contact_no({commit},data){
        commit('M_contact_no',data)
    },
    MM_email_address({commit},data){
        commit('M_email_address',data)
    },
    MM_highes_education_attainment({commit},data){
        commit('M_highes_education_attainment',data)
    },
    MM_office_address({commit},data){
        commit("M_office_address",data)
    },
    MM_position({commit},data){
        commit('M_position',data)
    },

}