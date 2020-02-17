<template>
    <div>
        <div class="fluid">
            <h2>System User's List <small></small></h2>
            <ul class="responsive-table">
                <li class="table-header">
                    <div class="col col-2">First Name</div>
                    <div class="col col-2">Middle Name</div>
                    <div class="col col-2">Last Name</div>
                    <div class="col col-2">Type</div>
                    <div class="col col-2">ID NO.</div>
                    <div class="col col-2">Action</div>
                </li>
                <li class="table-row" v-for="u in users">
                    <div class="col col-2" data-label="Job Id">{{u.first_name}}</div>
                    <div class="col col-2" data-label="Customer Name">{{u.middle_name}}</div>
                    <div class="col col-2" data-label="Amount">{{u.last_name}}</div>
                    <div class="col col-2" data-label="Payment Status">{{u.type.type}}</div>
                    <div class="col col-2" data-label="Status">{{u.id_no}}</div>
                    <div class="col col-2" data-label="Status">Update</div>
                </li>

            </ul>
        </div>
    </div>
</template>

<script>
    import './index.scss'
    import axios from 'axios'
    export default {
        mounted() {
                axios.get('http://127.0.0.1:8000/api/system-users').then( (r)=>{
                            this.users = r.data.data
                })
        },
        data() {
            return {
                users: {}
            }
        },
    }
</script>

<style scoped>

</style>