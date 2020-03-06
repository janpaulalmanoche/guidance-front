import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import * as TestModule from './modules/test'
import * as LoginModule from './modules/Login'
import * as DepartmentModul from './modules/Department'
import * as UserModule from './modules/User'
import * as RecordModule from './modules/Record'
import * as Archive from './modules/Archive'

export default new Vuex.Store({
    modules:{
        TestModule,
        LoginModule,
        DepartmentModul,
        UserModule,
        RecordModule,
        Archive,
    },
    state: {

    },
    mutations: {

    },
    actions: {

    }
})
