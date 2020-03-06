<template>
    <div>
        <div class="fluid">
            <h2>Pending Changes For Update Information <small></small></h2>
            <ul class="responsive-table">
                <li class="table-header">
                    <!--<div class="col col-2"></div>-->
                    <div class="col col-2">First Name</div>
                    <div class="col col-2">Middle Name</div>
                    <div class="col col-2">Last Name</div>
                    <!--<div class="col col-2">Status</div>-->
                    <div class="col col-2">Action</div>
                </li>
                <li class="table-row" v-for="i in info" :key="i.id">
                    <!--<div class="col col-2" data-label="Job Id">42235</div>-->
                    <div class="col col-2" data-label="Customer Name">{{i.first_name}}</div>
                    <div class="col col-2" data-label="Amount">{{i.middle_name}}</div>
                    <div class="col col-2" data-label="Payment Status">{{i.last_name}}</div>
                    <!--<div class="col col-2" data-label="Status">None</div>-->
                    <div class="col col-2" data-label="Status" @click="approve(i.id)">Approve</div>
                </li>

            </ul>
        </div>
    </div>
</template>

<script>
    import './index.scss'
    import axios from 'axios'
    export default {
        mounted(){
            this.index()
        },
        data(){
            return{
                info:[]
            }
        },
        methods:{
            index(){
                axios.get('http://127.0.0.1:8000/api/req-update-index').
                then( (r)=>{
                    this.info = r.data.data
                })
            },
            approve($id){
                axios.get('http://127.0.0.1:8000/api/req-update-approve/'+$id).then( (r)=>{
                    this.index()
                })
            }
    }
    }
</script>

<style scoped>

</style>