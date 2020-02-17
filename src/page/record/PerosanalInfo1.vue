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
                </div>
                <h2>Personal Information<span>1/3</span></h2>

                <div class="input-content-wrap">

                    <dl class="inputbox">
                        <dt class="inputbox-title">First Name</dt>
                        <dd class="inputbox-content">
                            <input id="input0" type="text" v-model="first_name" disabled/>
                            <span class="underline"></span>
                        </dd>
                    </dl>

                    <dl class="inputbox">
                        <dt class="inputbox-title">Middle Name</dt>
                        <dd class="inputbox-content">
                            <input id="input1" type="text" v-model="middle_name" disabled/>
                            <span class="underline"></span>
                        </dd>
                    </dl>

                    <dl class="inputbox">
                        <dt class="inputbox-title">Last Name</dt>
                        <dd class="inputbox-content">
                            <input id="input1" type="text" v-model="last_name" disabled/>
                            <!--<label for="input1">Last Name</label>-->
                            <span class="underline"></span>
                        </dd>
                    </dl>

                    <dl class="inputbox">
                        <dt class="inputbox-title">ID NO.</dt>
                        <dd class="inputbox-content">
                            <input id="input1" type="text" v-model="id_no" disabled/>
                            <!--<label for="input1">Last Name</label>-->
                            <span class="underline"></span>
                        </dd>
                    </dl>

                    <div class="btns">
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
                first_name: this.$store.state.LoginModule.user_loged_in[0].first_name,
                middle_name: this.$store.state.LoginModule.user_loged_in[0].middle_name,
                last_name: this.$store.state.LoginModule.user_loged_in[0].last_name,
                id_no: this.$store.state.LoginModule.user_loged_in[0].id_no,

            }
        },
        methods: {
            next() {
                this.$router.push('/record/personal-info/2')
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