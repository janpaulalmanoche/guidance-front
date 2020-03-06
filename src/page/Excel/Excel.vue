<template>
    <div>


        <div class="fluid">
            <download-excel
                    class   = "btn btn-default"
                    :data   = "students"
                    :fields = "json_fields"
                    worksheet = "My Worksheet"
                    name    = "filename.xls">

                <button style="background-color:blue;padding:10px;color:white" @click="delete3"> Archive</button>

            </download-excel>
            <h2>Five Year Old Record's<small></small></h2>
            <ul class="responsive-table">
                <li class="table-header">
                    <div class="col col-2">First Name</div>
                    <div class="col col-2">Middle Name</div>
                    <div class="col col-2">Last Name</div>
                    <div class="col col-2">ID NO.</div>

                </li>
                <li class="table-row" v-for="u in students">
                    <div class="col col-2" data-label="Job Id">{{u.first_name}}</div>
                    <div class="col col-2" data-label="Customer Name">{{u.middle_name}}</div>
                    <div class="col col-2" data-label="Amount">{{u.last_name}}</div>

                    <div class="col col-2" data-label="Status">{{u.id_no}}</div>

                </li>

            </ul>
        </div>
    </div>
</template>

<script>
    import {mapState, mapMutations} from 'vuex';
    import axios from 'axios'
    import JsonExcel from 'vue-json-excel'
    export default {
        mounted() {

        },
        data() {
            return {
                json_fields: {
                    'First Name': 'first_name',
                    'Middle Name': 'middle_name',
                    'Last Name': 'last_name',
                    // 'Department 2' : {
                    //     field: 'phone.landline',
                    //     callback: (value) => {
                    //         return `Landline Phone - ${value}`;
                    //     }
                    // },
                    // 'Department': 'id',
                    'ID': 'id_no',
                    // 'Gender': 'id_no',
                    // 'Date Of Birth': 'id_no',
                },
                json_data: [
                    {
                        'name': 'Tony Peña',
                        'city': 'New York',
                        'country': 'United States',
                        'birthdate': '1978-03-15',
                        'phone': {
                            'mobile': '1-541-754-3010',
                            'landline': '(541) 754-3010'
                        }
                    },
                    {
                        'name': 'Thessaloniki',
                        'city': 'Athens',
                        'country': 'Greece',
                        'birthdate': '1987-11-23',
                        'phone': {
                            'mobile': '+1 855 275 5071',
                            'landline': '(2741) 2621-244'
                        }
                    }
                ],
                json_meta: [
                    [
                        {
                            'key': 'charset',
                            'value': 'utf-8'
                        }
                    ]
                ],
            }
        },
        methods: {
            delete3(){
                // alert('jaja')
                axios.get('http://127.0.0.1:8000/api/delete-old-record').then( (r)=>{
                    this.$store.dispatch('SET_STUDENT_STATE',r.data.data)
                })
            }

        },

        computed: mapState({
            students: state => state.Archive.student

        }),
    }
</script>

<style scoped>

</style>