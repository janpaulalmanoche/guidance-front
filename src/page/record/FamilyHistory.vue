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
                    <span class="fa fa-circle check "></span>
                    <span class="fa fa-circle "></span>
                    <span class="fa fa-circle"></span>
                    <span class="fa fa-circle"></span>
                </div>
                <h2>Family History<span>1/3 (Father Details)</span></h2>

                <div class="input-content-wrap">

                    <dl class="inputbox">
                        <dt class="inputbox-title">First Name</dt>
                        <dd class="inputbox-content">
                            <input id="input0" type="text" v-model="f_first_name"/>
                            <span class="underline"></span>
                        </dd>
                    </dl>

                    <dl class="inputbox">
                        <dt class="inputbox-title">Middle Name</dt>
                        <dd class="inputbox-content">
                            <input id="input0" type="text" v-model="f_middle_name"/>
                            <span class="underline"></span>
                        </dd>
                    </dl>

                    <dl class="inputbox">
                        <dt class="inputbox-title">Last Name</dt>
                        <dd class="inputbox-content">
                            <input id="input0" type="text" v-model="f_last_name"/>
                            <span class="underline"></span>
                        </dd>
                    </dl>

                    <dl class="inputbox">
                        <dt class="inputbox-title">Current Address</dt>
                        <dd class="inputbox-content">
                            <input id="input0" type="text" v-model="f_current_address"/>
                            <span class="underline"></span>
                        </dd>
                    </dl>

                    <dl class="inputbox">
                        <dt class="inputbox-title">Permanent Address</dt>
                        <dd class="inputbox-content">
                            <input id="input0" type="text" v-model="f_permanent_address" />
                            <span class="underline"></span>
                        </dd>
                    </dl>

                    <dl class="inputbox">
                        <dt class="inputbox-title">Religious Affiliation</dt>
                        <dd class="inputbox-content">
                            <input id="input0" type="text" v-model="f_religious_affiliation"/>
                            <span class="underline"></span>
                        </dd>
                    </dl>

                    <dl class="inputbox">
                        <dt class="inputbox-title">Tribal Group</dt>
                        <dd class="inputbox-content">
                            <input id="input0" type="text"  v-model="f_tribal_group"/>
                            <span class="underline"></span>
                        </dd>
                    </dl>

                    <dl class="inputbox">
                        <dt class="inputbox-title">Contact #</dt>
                        <dd class="inputbox-content">
                            <input id="input0" type="text" v-model="f_contact_no"/>
                            <span class="underline"></span>
                        </dd>
                    </dl>

                    <dl class="inputbox">
                        <dt class="inputbox-title">Email Address</dt>
                        <dd class="inputbox-content">
                            <input id="input0" type="text" v-model="f_email_address"/>
                            <span class="underline"></span>
                        </dd>
                    </dl>

                    <dl class="inputbox">
                        <dt class="inputbox-title">Highest Educational Attainment</dt>
                        <dd class="inputbox-content">
                            <input id="input0" type="text" v-model="f_highes_education_attainment"/>
                            <span class="underline"></span>
                        </dd>
                    </dl>

                    <dl class="inputbox">
                        <dt class="inputbox-title">Business/Office Address</dt>
                        <dd class="inputbox-content">
                            <input id="input0" type="text" v-model="f_office_address"/>
                            <span class="underline"></span>
                        </dd>
                    </dl>

                    <dl class="inputbox">
                        <dt class="inputbox-title">Position Held</dt>
                        <dd class="inputbox-content">
                            <input id="input0" type="text" v-model="f_position"/>
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

    export default {
        data() {
            return {
                f_first_name:'',
                f_middle_name:'',
                f_last_name:'',
                f_current_address:'',
                f_permanent_address:'',
                f_religious_affiliation:'',
                f_tribal_group:'',
                f_contact_no:'',
                f_email_address:'',
                f_highes_education_attainment:'',
                f_office_address:'',
                f_position:''
            }
        },
        methods: {
            next() {
                // console.log('haho')
                this.$store.dispatch('FF_middle_name' , this.f_middle_name );
                this.$store.dispatch('f_first_name' , this.f_first_name);
                   this.$store.dispatch('f_last_name' , this.f_last_name);
                   this.$store.dispatch('f_current_address' , this.f_current_address);
                   this.$store.dispatch('f_permanent_address' , this.f_permanent_address);
                   this.$store.dispatch('f_religious_affiliation' , this.f_religious_affiliation);
                   this.$store.dispatch('f_tribal_group' , this.f_tribal_group);
                   this.$store.dispatch('f_contact_no' , this.f_contact_no);
                   this.$store.dispatch('f_email_address' , this.f_email_address);
                   this.$store.dispatch('f_highes_education_attainment' , this.f_highes_education_attainment);
                   this.$store.dispatch('f_office_address' , this.f_office_address);
                   this.$store.dispatch('f_position' , this.f_position);
                   this.$router.push('/record/family-history/2')

            },
            back(){
                this.$router.push('/record/personal-info/3')
            }
        },

    }
</script>

<style scoped>
    .fa {
        color:#8dcdff;
        font-size: 15px;
        margin-left:5px;
    }
    .check {
        color:blue
    }
</style>