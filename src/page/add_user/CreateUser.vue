<template>
    <div>
        <div id="wrap" class="input">
            <header class="input-header">
                <!--<h1>Input Text/Password Animation</h1>-->
            </header>
            <form @submit.prevent="submitData">
            <section class="input-content">
                <h2>Add User</h2>
                <div class="input-content-wrap">

                    <dl class="inputbox col">
                        <dt class="inputbox-title">First Name</dt>
                        <dd class="inputbox-content">
                            <input id="input0" type="text" required v-model="first_name"/>
                            <label for="input0">First Name</label>
                            <span class="underline"></span>
                        </dd>
                    </dl>

                    <dl class="inputbox">
                        <dt class="inputbox-title">Middle Name</dt>
                        <dd class="inputbox-content">
                            <input id="input1" type="text" required v-model="middle_name"/>
                            <label for="input1">Middle Name</label>
                            <span class="underline"></span>
                        </dd>
                    </dl>

                    <dl class="inputbox">
                        <dt class="inputbox-title">Last Name</dt>
                        <dd class="inputbox-content">
                            <input id="input1" type="text" required v-model="last_name"/>
                            <label for="input1">Last Name</label>
                            <span class="underline"></span>
                        </dd>
                    </dl>

                    <dl class="inputbox">
                        <dt class="inputbox-title">ID No</dt>
                        <dd class="inputbox-content">
                            <input id="input1" type="text" required v-model="id_no"/>
                            <label for="input1">ID No</label>
                            <span class="underline"></span>
                        </dd>
                    </dl>

                    <dl class="inputbox">
                        <dt class="inputbox-title">Email</dt>
                        <dd class="inputbox-content">
                            <input id="input1" type="email" required v-model="email"/>
                            <label for="input1">Email</label>
                            <span class="underline"></span>
                        </dd>
                    </dl>

                    <dl class="inputbox">
                        <dt class="inputbox-title">Password</dt>
                        <dd class="inputbox-content">
                            <input id="input1" type="password" required v-model="password"/>
                            <label for="input1">Password</label>
                            <span class="underline"></span>
                        </dd>
                    </dl>

                    <dl class="inputbox" v-show="this.selected_type_id != 2 ">
                        <dt class="inputbox-title">Department</dt>
                        <dd class="inputbox-content">
                            <select id="input1" style="width: 550px;background-color: #d5d5d5;height: 40px"
                                    v-model="department_id">
                                <option v-for="d in departments_"
                                        v-bind:key="d.id"
                                        v-bind:value="d.id"
                                >{{d.department}}
                                </option>

                            </select>
                            <span class="underline"></span>
                        </dd>
                    </dl>

                    <dl class="inputbox">
                        <dt class="inputbox-title">Type</dt>
                        <dd class="inputbox-content">
                            <select id="input1" style="width: 550px;background-color: #d5d5d5;height: 40px"
                                    v-model="selected_type_id">
                                <option v-for="d in type"
                                        v-bind:value="d.id"
                                >{{d.type}}
                                </option>

                            </select>
                            <span class="underline"></span>
                        </dd>
                    </dl>

                    <div class="btns">
                        <button class="btn btn-confirm" type="submit">Sign In</button>
                        <button class="btn btn-cancel">Cancel</button>
                    </div>
                </div>
            </section>
            </form>
        </div>
    </div>
</template>

<script>
    import './create.scss'
    import {mapState, mapMutations} from 'vuex';
    import axios from 'axios'
    export default {
        mounted() {
            this.$store.dispatch('UPDATE_DEPARTMENT_A')
        },
        data() {
            return {
                first_name: '',
                middle_name: '',
                last_name: '',
                department_id: '',
                id_no: '',
                email: '',
                password: '',
                selected_type_id:'',
                type:[
                    {
                        id:'1',
                        type:'student'
                    },
                    {
                        id:'2',
                        type:'staff'
                    },
                    {
                        id:'3',
                        type:'working'
                    },
                ]
            }
        },
        methods: {
            submitData() {
                // this.department_id = $id
                axios.post('http://127.0.0.1:8000/api/user', {
                    first_name: this.first_name,
                    middle_name: this.middle_name,
                    last_name: this.last_name,
                    department_id: this.department_id,
                    id_no: this.id_no,
                    email: this.email,
                    password: this.password,
                    type_id:this.selected_type_id
                }).then((r) => {
                    this.first_name = '',
                    this.middle_name = '',
                        this.last_name = '',
                        this.department_id = '',
                        this.id_no = '',
                        this.email = '',
                        this.password = ''
                    this.$toast.add({severity: 'success', summary: '', detail: r.data.success, life: 3000})
                })
            }
        },

        computed: mapState({
            departments_: state => state.DepartmentModul.departments

        }),
    }
</script>

<style scoped>

</style>