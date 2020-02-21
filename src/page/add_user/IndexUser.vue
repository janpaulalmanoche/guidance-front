<template>
    <div>
        <div class="fluid">
            <h2>Student list  <small></small></h2>
            <ul class="responsive-table">
                <li class="table-header">
                    <div class="col col-2">First Name</div>
                    <div class="col col-2">Middle Name</div>
                    <div class="col col-2">Last Name</div>
                    <div class="col col-2">Department</div>
                    <div class="col col-2">ID No</div>
                    <div class="col col-2">Action</div>
                </li>
                <li class="table-row" v-for="(u, index) in users_" v-bind:key="u.id">
                    <div class="col col-2" data-label="Job Id">{{u.first_name}}</div>
                    <div class="col col-2" data-label="Customer Name">{{u.middle_name}}</div>
                    <div class="col col-2" data-label="Amount">{{u.last_name}}</div>
                    <div class="col col-2" data-label="Payment Status">{{u.department.department}}</div>
                    <div class="col col-2" data-label="Status">{{u.id_no}}</div>
                    <div class="col col-2" data-label="Status">
                        <button class="btn btn-primary"
                                @click="set_user_id_for_viewing(u.id)"
                                style="color: white;background-color: #1fa1fc;padding: 10px">
                            View Record</button>
                    </div>
                </li>

            </ul>
        </div>
    </div>
</template>

<script>
    import './index.scss'
    import {mapState,mapMutations} from 'vuex';
    export default {
        mounted() {
            this.$store.dispatch('USER_UPDATE_A')
        },
        methods: {
            set_user_id_for_viewing($id) {
                // alert($id)
                localStorage.setItem('set_user_id_admin_side',$id);
                this.$router.push('/view/student-record')
            }
        },
        computed: mapState({
            users_: state => state.UserModule.user

        }),
    }
</script>

<style scoped>

</style>