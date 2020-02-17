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
                <h2>Personal Information<span>2/3</span></h2>

                <div class="input-content-wrap">


                    <dl class="inputbox">
                        <dt class="inputbox-title">Birthdate</dt>
                        <InputText type="date" v-model="birthday" style="margin-left: 39px;width: 550px"/>
                            <span class="underline"></span>

                    </dl>

                    <dl class="inputbox">
                        <dt class="inputbox-title">Place Of Birth</dt>
                        <dd class="inputbox-content">
                            <input id="input1" type="text" v-model="place_of_birth" required/>
                            <label for="input1">Place of Birth</label>
                            <span class="underline"></span>
                        </dd>
                    </dl>

                    <dl class="inputbox">
                        <dt class="inputbox-title">Religious Affiliation</dt>
                        <dd class="inputbox-content">
                            <input id="input1" type="text" v-model="religion" required/>
                            <label for="input1">Religious Affiliation</label>
                            <span class="underline"></span>
                        </dd>
                    </dl>
                    <dl class="inputbox">
                        <dt class="inputbox-title">Tribal Group</dt>
                        <dd class="inputbox-content">
                            <input id="input1" type="text" v-model="tribal" required/>
                            <label for="input1">Tribal Group</label>
                            <span class="underline"></span>
                        </dd>
                    </dl>


                    <dl class="inputboffx">
                        <dt class="inputbox-titlfe" style="margin-left: 100px;font-weight: bold;position: ">Languages/Spoken</dt>
                        <dd class="inputbox-contentfff" style="margin-left: 300px; padding-bottom: 20px">
                            <MultiSelect v-model="selectedCars" :options="langs" optionLabel="brand"
                                         style="margin-top:-50px;margin-left: -60px;height: 40px;z-index: 99999;width:550px" placeholder="Select Language"/>
                            <span class=""></span>
                        </dd>
                    </dl>



                    <dl class="inputbox">
                        <dt class="inputbox-title">Cellphone/Landline</dt>
                        <dd class="inputbox-content">
                            <input id="input1" type="text" v-model="number" required/>
                            <label for="input1">Cellphone/Landlime Number</label>
                            <span class="underline"></span>
                        </dd>
                    </dl>

                    <dl class="inputbox">
                        <dt class="inputbox-title">Birth Order</dt>
                        <dd class="inputbox-content">
                            <input id="input1" type="number" v-model="birth_order" required/>
                            <label for="input1">Birth Order</label>
                            <span class="underline"></span>
                        </dd>
                    </dl>

                    <dl class="inputbox">
                        <dt class="inputbox-title">Number of Sibling's</dt>
                        <dd class="inputbox-content">
                            <input id="input1" type="text" v-model="number_of_siblings" required/>
                            <label for="input1">Number of Siblings</label>
                            <span class="underline"></span>
                        </dd>
                    </dl>


                    <dl class="inputbox">
                        <dt class="inputbox-title">Provincial Address</dt>
                        <dd class="inputbox-content">
                            <input id="input1" type="text" v-model="provincial_address" required/>
                            <label for="input1">Provincial Addres</label>
                            <span class="underline"></span>
                        </dd>
                    </dl>

                    <dl class="inputbox">
                        <dt class="inputbox-title">Current City Address</dt>
                        <dd class="inputbox-content">
                            <input id="input1" type="text" v-model="current_city_address" required/>
                            <label for="input1">Current City Address</label>
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
    export default {
        components:{
          MultiSelect,
          InputText
        },
        mounted(){
          this.birthday = this.$store.state.RecordModule.birthday,
          this.place_of_birth = this.$store.state.RecordModule.place_of_birth,
          this.religion =this.$store.state.RecordModule.religion,
              this.tribal = this.$store.state.RecordModule.tribal,
              this.number = this.$store.state.RecordModule.number,
              this.birth_order = this.$store.state.RecordModule.birth_order,
              this.number_of_siblings = this.$store.state.RecordModule.number_of_siblings,
              this.provincial_address = this.$store.state.RecordModule.provincial_address,
              this.current_city_address = this.$store.state.RecordModule.current_city_address
        },
        data() {
            return {

                    gender:'',
                    birthday:'',
                    place_of_birth:'',
                    religion:'',
                    tribal:'',
                    number:'',
                    birth_order:'',
                    number_of_siblings:'',
                    provincial_address:'',
                    current_city_address:'',

                selectedCars: null,
                langs: [
                    {brand: 'bisaya', value: 'bisaya'},
                    {brand: 'ilonggo', value: 'ilonggo'},
                    {brand: 'waray', value: 'waray'},
                    {brand: 'english', value: 'english'},
                    {brand: 'tagalog', value: 'tagalog'},
                ]
            }

        },
        methods: {
            back(){
                this.$router.push('/record/personal-info/1')
            },
            next() {
                // this.$router.push('')

            this.$store.dispatch('BDAY', this.birthday)
            this.$store.dispatch('PLACE_O_B',this.place_of_birth)
            this.$store.dispatch('RELIGION',this.religion)
            this.$store.dispatch('TRIBAL',this.tribal)
            this.$store.dispatch('NUMBER',this.number)
            this.$store.dispatch('BIRTH_ORDER',this.birth_order)
            this.$store.dispatch('NO_SIBLINGS',this.number_of_siblings)
            this.$store.dispatch('PROVINCIAL_ADD',this.provincial_address)
            this.$store.dispatch('CURRENT_CITY_ADD',this.current_city_address)
            this.$store.dispatch('LANG',this.selectedCars)

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