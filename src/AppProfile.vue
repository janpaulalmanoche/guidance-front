<template>
	<div class="layout-profile">
		<div>
			<img src="assets/layout/images/profile.png" alt="" />
		</div>
		<button class="p-link layout-profile-link" @click="onClick">
			<span class="username">
				{{this.$store.state.LoginModule.user_loged_in[0].first_name}}
				{{this.$store.state.LoginModule.user_loged_in[0].middle_name}}
				{{this.$store.state.LoginModule.user_loged_in[0].last_name}}
			</span>
			<i class="pi pi-fw pi-cog"></i>
		</button>
        <transition name="layout-submenu-wrapper">
            <ul v-show="expanded">
                <li><button class="p-link"><i class="pi pi-fw pi-user"></i><span>Account</span></button></li>
                <li><button class="p-link"><i class="pi pi-fw pi-inbox"></i><span>Notifications</span><span class="menuitem-badge">2</span></button></li>
                <li @click="logout"><button class="p-link"><i class="pi pi-fw pi-power-off" ></i><span>Logout</span></button></li>
            </ul>
        </transition>
		
	</div>
</template>

<script>
	export default {
		data() {
			return {
				expanded: false
			}
		},
		methods: {
			onClick(event){
				this.expanded = !this.expanded;
				event.preventDefault();
			},
			logout(){
				this.$toast.add({severity:'success', summary: '', detail:'User Logged out', life: 3000})
				// alert('tet')
				this.$store.dispatch('UPDATE_AUTH_A')
				this.$router.push('/login')
			}
		}
	}
</script>

<style scoped>

</style>