<template>
    <div>
                    <Dashboard    v-show="this.$store.state.LoginModule.user_loged_in[0].role_id  === 1"/>
        <User v-show="this.$store.state.LoginModule.user_loged_in[0].role_id  === 2"/>
    </div>
</template>

<script>
    import Dashboard from '../../components/Dashboard'
    import User from './User'
    export default {
        components:{
         Dashboard,
            User
        }
    }
</script>

<style scoped>

</style>