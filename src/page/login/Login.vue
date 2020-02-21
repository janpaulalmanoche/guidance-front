<template>
    <div>
        <div class='bold-line'></div>
        <div class='container'>
            <div class='window'>
                <div class='overlay'></div>
                <div class='content'>
                    <div class='welcome'>Hello There!</div>
                    <div class='subtitle'>Login Using your Account.</div>
                    <div class='input-fields'>
                        <input type='email' placeholder='Email' v-model="email" class='input-line full-width'/>
                        <input type='password' placeholder='Password' v-model="password" class='input-line full-width'/>

                    </div>
                    <!--<div class='spacing'>or continue with <span class='highlight'>Facebook</span></div>-->
                    <div><button class='ghost-round full-width' @click="submit">Create Account</button></div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
    import './login.scss'
    import Toast from 'primevue/toast';
    import axios from 'axios'
    import baseApi from '../../service/baseApi'
    import listService from '../../service/listService'
    export default {

        data() {
            return {
                email:'',
                password:'',
            }
        },
        methods: {
            submit() {
                // this.$toast.add({severity:'error', summary: 'Success Message', detail:'Order submitted', life: 3000});

                listService.loginService(this.email,this.password).then( (r)=>{
                    if(r.data.success === true){
                        this.$toast.add({severity:'success', summary: '', detail:'LoggedIn', life: 3000})
                        this.$store.dispatch('UPDATE_AUTH_A')
                        this.$store.dispatch('UPDATE_USER_LOGED_IN',r.data.user)
                        localStorage.setItem('user_id',r.data.user[0].id)
                        this.$router.push('/')

                        axios.get('http://127.0.0.1:8000/api/record/'+localStorage.getItem('user_id')).then( (r)=>{
                            let user = r.data.user;
                            let personal_info = r.data.personal_info;
                            let personal_info_place_stay = r.data.personal_where_do_stay;
                            let personal_emergency = r.data.personal_incase_emergency;
                            let father = r.data.father;
                            let mother = r.data.mother;
                            let parent_statuss = r.data.parent_status;
                            let economic_ = r.data.economic;

                            let v = r.data.vehicle;
                            this.$store.dispatch('F_NAME',user.first_name);
                            this.$store.dispatch('EEconomic_status',economic_.economic.income);
                            this.$store.dispatch('M_NAME',user.middle_name);
                            this.$store.dispatch('L_NAME',user.last_name);
                            this.$store.dispatch('ID_NO',user.id_no);
                            //perosan info 2
                            this.$store.dispatch('BDAY',personal_info.birth_date);
                            this.$store.dispatch('PLACE_O_B',personal_info.place_of_birth);
                            this.$store.dispatch('RELIGION',personal_info.religion);
                            this.$store.dispatch('TRIBAL',personal_info.tribal_group);
                            this.$store.dispatch('NUMBER',personal_info.contact_no);
                            this.$store.dispatch('BIRTH_ORDER',personal_info.birth_order);
                            this.$store.dispatch('NO_SIBLINGS',personal_info.no_of_sibling);
                            this.$store.dispatch('PROVINCIAL_ADD',personal_info.provincial_address);
                            this.$store.dispatch('CURRENT_CITY_ADD',personal_info.current_city_address);
                            //perosonal info part 3
                            this.$store.dispatch('place',personal_info_place_stay.place.place);
                            // this.$store.dispatch('landlord',personal_info_place_stay.landlord_name);
                            this.$store.dispatch('landlord_number',personal_info_place_stay.contact_number);
                            //personal info incae emergency
                            this.$store.dispatch('person_to_be_contacted_emergency',personal_emergency.person_to_be_contacted_emergency);
                            this.$store.dispatch('relationship_person_to_be_contacted_emergency',personal_emergency.relationship);
                            this.$store.dispatch('relationship_person_to_be_contacted_emergency_no',personal_emergency.contact_no);
                            this.$store.dispatch('complete_address',personal_emergency.address);
                            //family history father details
                            this.$store.dispatch('f_first_name',father.first_name);
                            this.$store.dispatch('FF_middle_name',father.middle_name);
                            this.$store.dispatch('f_last_name',father.last_name);
                            this.$store.dispatch('f_current_address',father.current_address);
                            this.$store.dispatch('f_permanent_address',father.permanent_address);
                            this.$store.dispatch('f_religious_affiliation',father.religion);
                            this.$store.dispatch('f_tribal_group','');
                            this.$store.dispatch('f_contact_no',father.contact_no);
                            this.$store.dispatch('f_email_address',father.email_address);
                            this.$store.dispatch('f_highes_education_attainment',father.highest_educational_attainment);
                            this.$store.dispatch('f_office_address',father.office_address);
                            this.$store.dispatch('f_position',father.position);
                            //mother detaiuls
                            this.$store.dispatch('m_first_name',mother.first_name);
                            this.$store.dispatch('MM_middle_name',mother.middle_name);
                            this.$store.dispatch('MM_last_name',mother.last_name);
                            this.$store.dispatch('MM_current_address',mother.current_address);
                            this.$store.dispatch('MM_permanent_address',mother.permanent_address);
                            this.$store.dispatch('MM_religious_affiliation',mother.religion);
                            this.$store.dispatch('MM_tribal_group','');
                            this.$store.dispatch('MM_contact_no',mother.contact_no);
                            this.$store.dispatch('MM_contact_no',mother.contact_no);
                            this.$store.dispatch('MM_email_address',mother.email_address);
                            this.$store.dispatch('MM_highes_education_attainment',mother.highest_educational_attainment);
                            this.$store.dispatch('MM_office_address',mother.office_address);
                            this.$store.dispatch('MM_position',mother.position);
                            //   parent status
                            this.$store.dispatch('MMarital_status',parent_statuss.marital_status.status);
                            //missing filedls here
                            //economic status
                            this.$store.dispatch('VVehicle_id',v.vehicle.vehicle);

                            this.update_()


                        })

                    }else{
                        this.$toast.add({severity:'error', summary: '', detail:'Wrong Credentials', life: 3000})
                    }
            })
            .catch( (e)=>{
                    //
                    // this.$toast.add({severity:'error', summary: e.data, detail:'Order submitted', life: 3000})

            })
            }
        },
    }


</script>

<style scoped>

</style>