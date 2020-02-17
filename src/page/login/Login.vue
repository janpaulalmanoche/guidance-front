<template>
    <div>
        <div class='bold-line'></div>
        <div class='container'>
            <div class='window'>
                <div class='overlay'></div>
                <div class='content'>
                    <div class='welcome'>Hello There!</div>
                    <div class='subtitle'>Login Using your Account.</div>
                    <div class='input-fields'>
                        <input type='email' placeholder='Email' v-model="email" class='input-line full-width'/>
                        <input type='password' placeholder='Password' v-model="password" class='input-line full-width'/>

                    </div>
                    <!--<div class='spacing'>or continue with <span class='highlight'>Facebook</span></div>-->
                    <div><button class='ghost-round full-width' @click="submit">Create Account</button></div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
    import './login.scss'
    import Toast from 'primevue/toast';
    import axios from 'axios'
    import baseApi from '../../service/baseApi'
    import listService from '../../service/listService'
    export default {

        data() {
            return {
                email:'',
                password:'',
            }
        },
        methods: {
            submit() {
                // this.$toast.add({severity:'error', summary: 'Success Message', detail:'Order submitted', life: 3000});

                listService.loginService(this.email,this.password).then( (r)=>{
                    if(r.data.success === true){
                        this.$toast.add({severity:'success', summary: '', detail:'LoggedIn', life: 3000})
                        this.$store.dispatch('UPDATE_AUTH_A')
                        this.$store.dispatch('UPDATE_USER_LOGED_IN',r.data.user)
                        this.$router.push('/')
                    }else{
                        this.$toast.add({severity:'error', summary: '', detail:'Wrong Credentials', life: 3000})
                    }
            })
            .catch( (e)=>{
                    //
                    // this.$toast.add({severity:'error', summary: e.data, detail:'Order submitted', life: 3000})

            })
            }
        },
    }


</script>

<style scoped>

</style>