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
                    <span class="fa fa-circle"></span>
                    <span class="fa fa-circle"></span>
                    <span class="fa fa-circle"></span>
                </div>
                <h2>Family History</h2>

                <div class="input-content-wrap">

                    <dl class="inputbox" >
                        <dt class="inputbox-title">Parent Status </dt>
                        <dd class="inputbox-content">
                            <select id="input1" style="width: 550px;background-color: #d5d5d5;height: 40px"
                                    v-model="marital_status_id">
                                <option v-for="d in marital_status"
                                        v-bind:key="d.id"
                                        v-bind:value="d.id"
                                >{{d.status}}
                                </option>

                            </select>
                            <span class="underline"></span>
                        </dd>
                    </dl>


                    <dl class="inputbox" >
                        <dt class="inputbox-title">Live at Present </dt>
                        <dd class="inputbox-content">
                            <select id="input1" style="width: 550px;background-color: #d5d5d5;height: 40px"
                                    v-model="live_at_present_id">
                                <option v-for="d in live_at_present"
                                        v-bind:key="d.id"
                                        v-bind:value="d.id"
                                >{{d.live}}
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
            axios.get('http://127.0.0.1:8000/api/parents-marital-status').then( (r)=>{
                this.marital_status = r.data.data
                // console.log(r.data.data)
            })
            axios.get('http://127.0.0.1:8000/api/live-at-present').then( (r)=>{
               this.live_at_present = r.data.data
            });
        },
        data() {
            return {
                marital_status: [],
                live_at_present: [],

                marital_status_id: '',
                live_at_present_id: '',
            }

        },
        methods: {
            back(){
                this.$router.push('/record/family-history/2')
            },
            next() {
                // this.$router.push('')

                this.$store.dispatch('MMarital_status', this.marital_status_id)
                this.$store.dispatch('LLive_at_present_id',this.live_at_present_id)

                this.$router.push('/record/socio-economic')
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