<template>
    <div>
        <div class="fluid">

            <h2>Student list  <small></small></h2><br>
            <div style="margin-left: 46px">Search : <input type="text" style="height: 25px" @keyup="search"
                                                           placeholder="search by Last Name" v-model="search_field">
                <button class=" btn btn-primary" @click="clear" style="margin-left: 5px;height: 20px;background-color: #1fa1fc"> Clear Filter</button>
            </div>
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
    import axios from 'axios'
    export default {
        mounted() {
            this.$store.dispatch('USER_UPDATE_A')
        },
        data() {
            return {
                search_field: ''
            }
        },
        methods: {
            printToPdf: function(event) {
                var endpoint = "https://v2018.api2pdf.com/chrome/html"
                var apiKey = "\td97bc307-22d4-4e74-b86b-095d372a91b4"
                var config = {
                    headers: {
                        Authorization: apiKey
                    }
                }
                var payload = {
                    html: "<p>Hello from VueJs</p>", //Use your own HTML
                    inlinePdf: true
                }
                axios.post(endpoint, payload, config)
                    .then(function(response) {
                        console.log(response.data.pdf);
                        window.location(response.data.pdf)
                    })
                    .catch(function(error) {
                        console.log(error);
                    });
            },
            set_user_id_for_viewing($id) {
                // alert($id)
                localStorage.setItem('set_user_id_admin_side',$id);
                this.$router.push('/view/student-record')
            },
            search(){
                            // alert(this.search_field)
                    axios.get('http://127.0.0.1:8000/api/search/'+this.search_field).then( (r)=>{
                        this.$store.dispatch('USER_UPDATE_SEARCH',r.data.data)
                    })
            },
            clear(){
                this.$store.dispatch('USER_UPDATE_A')
            }
        },
        computed: mapState({
            users_: state => state.UserModule.user


        }),
    }
</script>

<style scoped>

</style>