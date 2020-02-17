<template>

	<div :class="containerClass" @click="onWrapperClick" >
        <Toast />

        <Toast/>
		<AppTopBar @menu-toggle="onMenuToggle" v-if="this.$store.state.LoginModule.auth" />

        <transition name="layout-sidebar" v-if="this.$store.state.LoginModule.auth">
            <div :class="sidebarClass" @click="onSidebarClick" v-show="isSidebarVisible()">
                <div class="layout-logo">
                    <router-link to="/">
                        <!--<img alt="Logo" :src="logo" />-->
                    </router-link>
                </div>

                <AppProfile />
                <AppMenu :model="menu" @menuitem-click="onMenuItemClick" v-show="this.$store.state.LoginModule.user_loged_in[0].role_id === 1 " />
                <AppMenu :model="menu2" @menuitem-click="onMenuItemClick"
                         v-show="this.$store.state.LoginModule.user_loged_in[0].role_id  === 2"/>
            </div>
        </transition>

		<div class="layout-main">
			<router-view />
		</div>

		<!--<AppFooter v-if="this.$store.state.LoginModule.auth" />-->
	</div>
</template>

<script>
import AppTopBar from './AppTopbar.vue';
import AppProfile from './AppProfile.vue';
import AppMenu from './AppMenu.vue';
import AppFooter from './AppFooter.vue';
import store from './store/store'
export default {
    mounted(){
        // this.$toast.add({severity:'success', summary: '', detail:'LoggedIn', life: 3000})
    },
    data() {
        return {
            layoutMode: 'static',
            layoutColorMode: 'dark',
            staticMenuInactive: false,
            overlayMenuActive: false,
            mobileMenuActive: false,
                menu2:[
                    {label: 'Dashboard', icon: 'pi pi-fw pi-home', to: '/'},
                    {label: 'Record', icon:'', to: '/record/personal-info/1'},
                ],
                menu : [
                    {label: 'Dashboard', icon: 'pi pi-fw pi-home', to: '/'},

                    {
                        label: 'Menu Colors', icon: 'pi pi-fw pi-align-left',
                        items: [
                            {label: 'Dark', icon: 'pi pi-fw pi-bars',  command: () => this.layoutColorMode = 'dark' },
                            {label: 'Light', icon: 'pi pi-fw pi-bars',  command: () => this.layoutColorMode = 'light' }
                        ]
                    },
                    {
                        label: 'User', icon: 'pi pi-fw pi-globe',
                        items: [
                            {label: 'Add User', icon: 'pi pi-fw pi-th-large', to: '/student/create'},
                            {label: "User's", icon: 'pi pi-fw pi-file', to: '/user'},

                        ]
                    },
                    {
                        label: 'Student', icon: 'pi pi-fw pi-globe',
                        items: [
                            {label: 'Add Student', icon: 'pi pi-fw pi-th-large', to: '/student/create'},
                            {label: "Student's", icon: 'pi pi-fw pi-file', to: '/student'},

                        ]
                    },
                    {
                        label: 'Department', icon: 'pi pi-fw pi-globe',
                        items: [
                            {label: 'Department', icon: 'pi pi-fw pi-th-large', to: '/department'},
                            {label: 'Create', icon: 'pi pi-fw pi-file', to: '/department/create'},

                        ]
                    },
                ]
        }
    },
    watch: {
        $route() {
            this.menuActive = false;
            this.$toast.removeAllGroups();
        }
    },
    methods: {
        onWrapperClick() {
            if (!this.menuClick) {
                this.overlayMenuActive = false;
                this.mobileMenuActive = false;
            }

            this.menuClick = false;
        },
        onMenuToggle() {
            this.menuClick = true;

            if (this.isDesktop()) {
                if (this.layoutMode === 'overlay') {
                    this.overlayMenuActive = !this.overlayMenuActive;
                }
                else if (this.layoutMode === 'static') {
                    this.staticMenuInactive = !this.staticMenuInactive;
                }
            }
            else {
                this.mobileMenuActive = !this.mobileMenuActive;
            }

            event.preventDefault();
        },
        onSidebarClick() {
            this.menuClick = true;
        },
        onMenuItemClick(event) {
            if (event.item && !event.item.items) {
                this.overlayMenuActive = false;
                this.mobileMenuActive = false;
            }
        },
        addClass(element, className) {
            if (element.classList)
                element.classList.add(className);
            else
                element.className += ' ' + className;
        },
        removeClass(element, className) {
            if (element.classList)
                element.classList.remove(className);
            else
                element.className = element.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
        },
        isDesktop() {
            return window.innerWidth > 1024;
        },
        isSidebarVisible() {
            if (this.isDesktop()) {
                if (this.layoutMode === 'static')
                    return !this.staticMenuInactive;
                else if (this.layoutMode === 'overlay')
                    return this.overlayMenuActive;
                else
                    return true;
            }
            else {
                return true;
            }
        },
    },
    computed: {
        containerClass() {
            return ['layout-wrapper', {
                'layout-overlay': this.layoutMode === 'overlay',
                'layout-static': this.layoutMode === 'static',
                'layout-static-sidebar-inactive': this.staticMenuInactive && this.layoutMode === 'static',
                'layout-overlay-sidebar-active': this.overlayMenuActive && this.layoutMode === 'overlay',
                'layout-mobile-sidebar-active': this.mobileMenuActive
            }];
        },
        sidebarClass() {
            return ['layout-sidebar', {
                'layout-sidebar-dark': this.layoutColorMode === 'dark',
                'layout-sidebar-light': this.layoutColorMode === 'light'
            }];
        },
        logo() {
            return (this.layoutColorMode === 'dark') ? "assets/layout/images/logo-white.svg" : "assets/layout/images/logo.svg";
        }
    },
    beforeUpdate() {
        if (this.mobileMenuActive)
            this.addClass(document.body, 'body-overflow-hidden');
        else
            this.removeClass(document.body, 'body-overflow-hidden');
    },
    components: {
        'AppTopBar': AppTopBar,
        'AppProfile': AppProfile,
        'AppMenu': AppMenu,
        'AppFooter': AppFooter,
    }
}
</script>

<style lang="scss">
@import './App.scss';
</style>
