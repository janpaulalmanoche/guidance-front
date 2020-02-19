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
                    <span class="fa fa-circle"></span>
                </div>
                <h2>Family History<span>2/2 (Mother Details)</span></h2>

                <div class="input-content-wrap">

                    <dl class="inputbox">
                        <dt class="inputbox-title">First Name</dt>
                        <dd class="inputbox-content">
                            <input id="input0" type="text" v-model="m_first_name"/>
                            <span class="underline"></span>
                        </dd>
                    </dl>

                    <dl class="inputbox">
                        <dt class="inputbox-title">Middle Name</dt>
                        <dd class="inputbox-content">
                            <input id="input0" type="text" v-model="m_middle_name"/>
                            <span class="underline"></span>
                        </dd>
                    </dl>

                    <dl class="inputbox">
                        <dt class="inputbox-title">Last Name</dt>
                        <dd class="inputbox-content">
                            <input id="input0" type="text" v-model="m_last_name"/>
                            <span class="underline"></span>
                        </dd>
                    </dl>

                    <dl class="inputbox">
                        <dt class="inputbox-title">Current Address</dt>
                        <dd class="inputbox-content">
                            <input id="input0" type="text" v-model="m_current_address"/>
                            <span class="underline"></span>
                        </dd>
                    </dl>

                    <dl class="inputbox">
                        <dt class="inputbox-title">Permanent Address</dt>
                        <dd class="inputbox-content">
                            <input id="input0" type="text" v-model="m_permanent_address" />
                            <span class="underline"></span>
                        </dd>
                    </dl>

                    <dl class="inputbox">
                        <dt class="inputbox-title">Religious Affiliation</dt>
                        <dd class="inputbox-content">
                            <input id="input0" type="text" v-model="m_religious_affiliation"/>
                            <span class="underline"></span>
                        </dd>
                    </dl>

                    <dl class="inputbox">
                        <dt class="inputbox-title">Tribal Group</dt>
                        <dd class="inputbox-content">
                            <input id="input0" type="text"  v-model="m_tribal_group"/>
                            <span class="underline"></span>
                        </dd>
                    </dl>

                    <dl class="inputbox">
                        <dt class="inputbox-title">Contact #</dt>
                        <dd class="inputbox-content">
                            <input id="input0" type="text" v-model="m_contact_no"/>
                            <span class="underline"></span>
                        </dd>
                    </dl>

                    <dl class="inputbox">
                        <dt class="inputbox-title">Email Address</dt>
                        <dd class="inputbox-content">
                            <input id="input0" type="text" v-model="m_email_address"/>
                            <span class="underline"></span>
                        </dd>
                    </dl>

                    <dl class="inputbox">
                        <dt class="inputbox-title">Highest Educational Attainment</dt>
                        <dd class="inputbox-content">
                            <input id="input0" type="text" v-model="m_highes_education_attainment"/>
                            <span class="underline"></span>
                        </dd>
                    </dl>

                    <dl class="inputbox">
                        <dt class="inputbox-title">Business/Office Address</dt>
                        <dd class="inputbox-content">
                            <input id="input0" type="text" v-model="m_office_address"/>
                            <span class="underline"></span>
                        </dd>
                    </dl>

                    <dl class="inputbox">
                        <dt class="inputbox-title">Position Held</dt>
                        <dd class="inputbox-content">
                            <input id="input0" type="text" v-model="m_position"/>
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
                m_first_name:'',
                m_middle_name:'',
                m_last_name:'',
                m_current_address:'',
                m_permanent_address:'',
                m_religious_affiliation:'',
                m_tribal_group:'',
                m_contact_no:'',
                m_email_address:'',
                m_highes_education_attainment:'',
                m_office_address:'',
                m_position:''
            }
        },
        methods: {
            next() {
                // console.log('haho')
                // alert('test')
                this.$store.dispatch('MM_middle_name',this.m_middle_name);
                this.$store.dispatch('m_first_name',this.m_first_name);
                this.$store.dispatch('MM_last_name',this.m_last_name);
                this.$store.dispatch('MM_current_address',this.m_current_address);
                this.$store.dispatch('MM_permanent_address',this.m_permanent_address);
                this.$store.dispatch('MM_religious_affiliation',this.m_religious_affiliation);
                this.$store.dispatch('MM_tribal_group',this.m_tribal_group);
                this.$store.dispatch('MM_contact_no',this.m_contact_no);
                this.$store.dispatch('MM_email_address',this.m_email_address);
                this.$store.dispatch('MM_highes_education_attainment',this.m_highes_education_attainment);
                this.$store.dispatch('MM_office_address',this.m_office_address);
                this.$store.dispatch('MM_position',this.m_position);

                this.$router.push('/record/parents-marital-status')
            },
            back(){
                this.$router.push('/record/family-history/1')
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