<template>
    <div>
        <link rel="stylesheet"
              href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
        <div id="wrap" class="input">
            <header class="input-header">
                <!--<h1>Input Text/Password Animation</h1>-->

            </header>

            <section class="input-content">

                <div style="margin-left: 330px">
                    <span class="fa fa-circle check"></span>
                    <span class="fa fa-circle check"></span>
                    <span class="fa fa-circle check"></span>
                    <span class="fa fa-circle check"></span>
                    <span class="fa fa-circle check"></span>
                    <span class="fa fa-circle "></span>
                </div>
                <h2>Family Transportation</h2>

                <div class="input-content-wrap">



                    <dl class="inputbox" >
                        <dt class="inputbox-title">Vehicle </dt>
                        <dd class="inputbox-content">
                            <select id="input1" style="margin-left:30px;width: 500px;background-color: #d5d5d5;height: 40px"
                                    v-model="vehicle_id">
                                <option v-for="d in vehicle"
                                        v-bind:key="d.id"
                                        v-bind:value="d.id"
                                >{{d.vehicle}}
                                </option>

                            </select>
                            <span class="underline"></span>
                        </dd>
                    </dl>

                    <div class="btns">
                        <button class="btn btn-cancel" @click="back">Back</button>
                        <button class="btn btn-confirm" @click="next">SUBMIT</button>
                    </div>

                </div>
            </section>
        </div>
    </div>
</template>

<script>
    import './create.scss'
    import MultiSelect from 'primevue/multiselect';
    import InputText from 'primevue/inputtext';
    import axios from 'axios'
    export default {
        components:{
            MultiSelect,
            InputText
        },
        mounted(){
            axios.get('http://127.0.0.1:8000/api/vehicle').then( (r)=>{
                this.vehicle = r.data.data
                // console.log(r.data.data)
            })

        },
        data() {
            return {
                vehicle: [],
                vehicle_id: '',
            }

        },
        methods: {
            back(){
                this.$router.push('/record/socio-economic')
            },
            next() {
                // this.$router.push('')



                this.$store.dispatch('VVehicle_id', this.vehicle_id)

                this.$store.dispatch('SUBMIT_DATA');
                this.$router.push('/record/personal-info/3')
            }

        },

    }
</script>

<style scoped>
    .fa {
        color: #8dcdff;
        font-size: 15px;
        margin-left: 5px;
    }

    .check {
        color: blue
    }
</style>