import Vue from 'vue';
import Router from 'vue-router';
import Dashboard from './components/Dashboard.vue';
import store from './store/store'
import Login from "./page/login/Login";
import Index from "./page/form/Index";
import Create from "./page/form/Create";
import * as LoginModule from "./store/modules/Login";
import CreateDepartment from "./page/department/CreateDepartment";
import IndexDepartment from "./page/department/IndexDepartment";
import IndexUser from "./page/add_user/IndexUser";
import CreateUser from "./page/add_user/CreateUser";
import Admin from "./page/dashboard/Admin";
import PerosanalInfo1 from "./page/record/PerosanalInfo1";
import PerosanalInfo2 from "./page/record/PerosanalInfo2";
import PerosanalInfo3 from "./page/record/PerosanalInfo3";
import IndexSystemUser from "./page/system_user/IndexSystemUser";
import CreateSystemUser from "./page/system_user/CreateSystemUser";
import FamilyHistory from "./page/record/FamilyHistory";
import FamilyHistory2 from "./page/record/FamilyHistory2";

Vue.use(Router);

// export default new Router({
const router = new Router({
    routes: [
        {
            path:'/record/family-history/1',
            name:'family.1',
            component:FamilyHistory
        },
        {
            path:'/record/family-history/2',
            name:'family.2',
            component:FamilyHistory2
        },
        {
            path:'/record/personal-info/1',
            name:'record.create',
            component:PerosanalInfo1
        },
        {
            path:'/record/personal-info/2',
            name:'record.create',
            component:PerosanalInfo2
        },
        {
            path:'/record/personal-info/3',
            name:'record.create',
            component:PerosanalInfo3
        },
        {
            path:'/department',
            name:'department.index',
            component:IndexDepartment
        },
        {
            path:'/department/create',
            name:'department.create',
            component:CreateDepartment
        },
        {
            path:'/user',
            name:'user.index',
            component:IndexSystemUser
        },
        {
            path:'/user/create',
            name:'user.index',
            component:CreateSystemUser
        },
        {
            path:'/student',
            name:'user.index',
            component:IndexUser
        },
        {
            path:'/student/create',
            name:'user.create',
            component:CreateUser
        },
        {
            path: '/create',
            name: 'create',
            component: Create
        },
        {
            path: '/index',
            name: 'index',
            component: Index
        },




        //ending
        {
            path: '/',
            name: 'dashboard',
            component: Admin
        },
        {
            path: '/login',
            name: 'login',
            component: Login
        },
        {
            path: '/sample',
            name: 'sample',
            component: () => import('./components/SampleDemo.vue')
        },
        {
            path: '/forms',
            name: 'forms',
            component: () => import('./components/FormsDemo.vue')
        },
        {
            path: '/data',
            name: 'data',
            component: () => import('./components/DataDemo.vue')
        },
        {
            path: '/panels',
            name: 'panels',
            component: () => import('./components/PanelsDemo.vue')
        },
        {
            path: '/overlays',
            name: 'overlays',
            component: () => import('./components/OverlaysDemo.vue')
        },
        {
            path: '/menus',
            component: () => import('./components/MenusDemo.vue'),
            children: [

                {
                    path: '/menus/seat',
                    component: () => import('./components/menu/SeatDemo.vue')
                },
                {
                    path: '/menus/payment',
                    component: () => import('./components/menu/PaymentDemo.vue')
                },
                {
                    path: '/menus/confirmation',
                    component: () => import('./components/menu/ConfirmationDemo.vue')
                }]
        },
        {
            path: '/messages',
            name: 'messages',
            component: () => import('./components/MessagesDemo.vue')
        },
        {
            path: '/charts',
            name: 'charts',
            component: () => import('./components/ChartsDemo.vue')
        },
        {
            path: '/misc',
            name: 'misc',
            component: () => import('./components/MiscDemo.vue')
        },
        {
            path: '/empty',
            name: 'empty',
            component: () => import('./components/EmptyPage.vue')
        },
        {
            path: '/documentation',
            name: 'documentation',
            component: () => import('./components/Documentation.vue')
        },
    ],
    scrollBehavior() {
        return {x: 0, y: 0};
    }
});


router.beforeEach((to, from, next) => {
    //
    // if (!store.state.TestModule.auth){
    // 	next('/documentation')
    // }else{
    // 	next()
    // }

    if (to.fullPath == '/') {
        if (!store.state.LoginModule.auth) {

            next('/login');
        }
    }

    next();
});

export default router;


// router.beforeEach((to, from, next) => {
//
// 	if (to.fullPath === '/') {
// 		if (!store.state.TestModule.auth) {
// 			next('/documentation');
// 		}
// 	}
//
// 	next();
// });
