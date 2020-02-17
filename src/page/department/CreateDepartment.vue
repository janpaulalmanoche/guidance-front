<template>
    <div>
        <div id="wrap" class="input">
            <header class="input-header">
                <!--<h1>Input Text/Password Animation</h1>-->
            </header>
            <section class="input-content">
                <h2>Create Department</h2>
                <div class="input-content-wrap">

                    <dl class="inputbox">
                        <dt class="inputbox-title">Department Name</dt>
                        <dd class="inputbox-content">
                            <input id="input0" type="text" v-model="department" required/>
                            <label for="input0">Name</label>
                            <span class="underline"></span>
                        </dd>
                    </dl>

                    <dl class="inputbox">
                        <dt class="inputbox-title">Abbreviation</dt>
                        <dd class="inputbox-content">
                            <input id="input1" type="text" v-model="a" required/>
                            <label for="input1">Abbreviation</label>
                            <span class="underline"></span>
                        </dd>
                    </dl>



                    <div class="btns">
                        <button class="btn btn-confirm" @click="submit">Confirm</button>
                        <button class="btn btn-cancel" @click="homee">Cancel</button>
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
        data() {
            return {
                department:'',
                a:'',
            }
        },
        methods: {
            submit() {
                axios.post('http://127.0.0.1:8000/api/department',{
                    department:this.department,
                    a:this.a
                }).then( (r)=>{
                    this.$toast.add({severity:'success', summary: '', detail: r.data.success, life: 3000})
                    this.department = '',
                        this.a = ''
                }).catch ((e)=>{

                })
            },

            homee(){
                this.$router.push('/')
            }
        },

    }
</script>

<style scoped>

</style>