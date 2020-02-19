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
                    <span class="fa fa-circle "></span>
                    <span class="fa fa-circle "></span>
                    <span class="fa fa-circle"></span>
                    <span class="fa fa-circle"></span>
                    <span class="fa fa-circle"></span>
                </div>
                <h2>Personal Information<span>3/3 ( FOR STUDENTS OFFICIALLY RESIDENT OF GENERAL SANTOS CITY )</span></h2>

                <div class="input-content-wrap">

                    <dl class="inputbox" >
                        <dt class="inputbox-title">Where do you stay </dt>
                        <dd class="inputbox-content">
                            <select id="input1" style="width: 550px;background-color: #d5d5d5;height: 40px"
                                    v-model="place ">
                                <option v-for="d in place_"
                                        v-bind:key="d.id"
                                        v-bind:value="d.id"
                                >{{d.place}}
                                </option>

                            </select>
                            <span class="underline"></span>
                        </dd>
                    </dl>


                    <dl class="inputbox">
                        <dt class="inputbox-title">
                            <span v-if="place === 1 || place === 2 || place === 3">Landlord Name </span></dt>
                        <dt class="inputbox-title">
                            <span v-if="place === 5">Employer Name</span></dt>
                        <dt class="inputbox-title" > <span v-if="place === 4">Relative</span></dt>
                        <dt class="inputbox-title"><span v-if="place === 6">For Other's </span></dt>
                        <dd class="inputbox-content" >
                            <input id="input1" type="text" v-model="landlord"/>
                            <span class="underline"></span>
                        </dd>
                    </dl>

                    <dl class="inputbox">
                        <dt class="inputbox-title">Contact #</dt>
                        <dd class="inputbox-content">
                            <input id="input1" type="number" v-model="landlord_number" />
                            <!--<label for="input1">Last Name</label>-->
                            <span class="underline"></span>
                        </dd>
                    </dl>

                    <dl class="inputbox">
                        <dt class="inputbox-title">Incase of Emergency</dt>
                        <dd class="inputbox-content">
                            <input id="input1" type="text" v-model="person_to_be_contacted_emergency" />
                            <label for="input1">Person to be Contacted</label>
                            <span class="underline"></span>
                        </dd>
                    </dl>

                    <dl class="inputbox">
                        <dt class="inputbox-title">Relationship</dt>
                        <dd class="inputbox-content">
                            <input id="input1" type="text" v-model="relationship_person_to_be_contacted_emergency" />
                            <label for="input1"> </label>
                            <span class="underline"></span>
                        </dd>
                    </dl>

                    <dl class="inputbox">
                        <dt class="inputbox-title">Contact #</dt>
                        <dd class="inputbox-content">
                            <input id="input1" type="text" v-model="relationship_person_to_be_contacted_emergency_no" />
                            <label for="input1"> </label>
                            <span class="underline"></span>
                        </dd>
                    </dl>

                    <dl class="inputbox">
                        <dt class="inputbox-title">Address</dt>
                        <dd class="inputbox-content">
                            <input id="input1" type="text" v-model="complete_address" />
                            <label for="input1"> </label>
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
    import axios from 'axios'
    export default {
        mounted(){
            axios.get('http://127.0.0.1:8000/api/place-stayin-on-gensan').then( (r)=>{
                this.place_ = r.data.data
            })
        },

        data() {
            return {
                place_:{},
                place:'',
                landlord:'',
                landlord_number:'',
                person_to_be_contacted_emergency:'',
                relationship_person_to_be_contacted_emergency:'',
                relationship_person_to_be_contacted_emergency_no:'',
                complete_address:''


            }
        },
        methods: {
            next() {
                this.$router.push('/record/family-history/1');
                this.$store.dispatch('place',this.place);
                this.$store.dispatch('landlord',this.landlord);
                this.$store.dispatch('landlord_number',this.landlord_number);
                this.$store.dispatch('person_to_be_contacted_emergency',this.person_to_be_contacted_emergency);
                this.$store.dispatch('relationship_person_to_be_contacted_emergency',this.relationship_person_to_be_contacted_emergency);
                this.$store.dispatch('relationship_person_to_be_contacted_emergency_no',this.relationship_person_to_be_contacted_emergency_no);
                this.$store.dispatch('complete_address',this.complete_address);

                },
            back(){
                this.$router.push('/record/personal-info/2')
            }

            },


    }
</script>

<style scoped>
    .fa {
        color:#8dcdff;
        font: ;nt-size: 15px;
        margin-left:5px;
    }
    .check {
        color:blue
    }
</style>