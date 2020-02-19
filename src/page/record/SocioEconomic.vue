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
                    <span class="fa fa-circle"></span>
                </div>
                <h2>Socio Economic Status</h2>

                <div class="input-content-wrap">



                    <dl class="inputbox" >
                        <dt class="inputbox-title">Monthly income Family </dt>
                        <dd class="inputbox-content">
                            <select id="input1" style="margin-left:30px;width: 500px;background-color: #d5d5d5;height: 40px"
                                    v-model="economic_status_id">
                                <option v-for="d in economic_status"
                                        v-bind:key="d.id"
                                        v-bind:value="d.id"
                                >{{d.income}}
                                </option>

                            </select>
                            <span class="underline"></span>
                        </dd>
                    </dl>

                    <div class="btns">
                        <button class="btn btn-cancel" @click="back">Back</button>
                        <button class="btn btn-confirm" @click="next">Next</button>
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
            axios.get('http://127.0.0.1:8000/api/socio-economic-status').then( (r)=>{
                this.economic_status = r.data.data
                // console.log(r.data.data)
            })

        },
        data() {
            return {
                economic_status: [],
                economic_status_id: '',
            }

        },
        methods: {
            back(){
                this.$router.push('/record/parents-marital-status')
            },
            next() {
                // this.$router.push('')

                this.$store.dispatch('EEconomic_status', this.economic_status_id)


                this.$router.push('/record/family-transportation')
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