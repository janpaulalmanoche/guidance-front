<template>
    <div>
        <button style="background-color:blue;padding:10px;color:white" @click="req_up"> update</button>
        <form action="" class="register">
            <h1>Student Detail's</h1>
            <fieldset class="row1">
                <legend>Personal Information
                </legend>

                <p>
                    <label>First Name
                    </label>
                    <input type="text" v-model="first_name"/>
                    <label>ID NO
                    </label>
                    <input type="text" v-model="id_no"/>
                </p>
                <p>
                    <label>Middle Name
                    </label>
                    <input type="text" v-model="middle_name"/>
                    <label>Birth Date
                    </label>
                    <input type="text" v-model="birthday"/>
                </p>
                <p>
                    <label>Last Name
                    </label>
                    <input type="text" v-model="last_name"/>
                    <label>Place Of Birth
                    </label>
                    <input type="text" v-model="place_of_birth"/>
                </p>
                <p>
                    <label>Gender
                    </label>
                    <input type="text" v-model="gender"/>
                    <label>Birth Order
                    </label>
                    <input type="text" v-model="birth_order"/>
                    <label class="obinfo">
                    </label>
                </p>
            </fieldset>
            <!--seoncd rowww-->
            <fieldset class="row1">
                <legend>Personal Information
                </legend>
                <p>
                    <label>Number Of Sibling's
                    </label>
                    <input type="text" v-model="number_of_siblings"/>
                    <label>Provincial Address
                    </label>
                    <input type="text" v-model="provincial_address"/>
                </p>
                <p>
                    <label>Religious Affiliation
                    </label>
                    <input type="text" v-model="religion"/>
                    <label>Current City Address
                    </label>
                    <input type="text" v-model="current_city_address"/>
                </p>
                <p>
                    <label>Tribal Group
                    </label>
                    <input type="text" v-model="tribal"/>
                    <!--<label>Place Of Birth-->
                    <!--</label>-->
                    <!--<input type="text" v-model="place_of_birth"/>-->
                </p>
                <p>
                    <label>Cellphone/Landline
                    </label>
                    <input type="text" v-model="number"/>
                    <!--<label>Birth Order-->
                    <!--</label>-->
                    <!--<input type="text" v-model="birth_order"/>-->
                    <!--<label class="obinfo">-->
                    <!--</label>-->
                </p>
            </fieldset>
            <!--row number three-->
            <fieldset class="row1">
                <legend>STUDENTS OFFICIALLY RESIDENT OF GENERAL SANTOS CITY
                </legend>
                <p>
                    <label>Place Staying on Gensan
                    </label>
                    <input type="text" v-model="place"/>
                    <label>LandLord/Employer Name
                    </label>
                    <input type="text" v-model="landlord"/>
                </p>
                <p>
                    <label>Contact #
                    </label>
                    <input type="text" v-model="landlord_number"/>
                </p>
                <p>
                    <label>Incase of Emergency
                    </label>
                    <input type="text" v-model="person_to_be_contacted_emergency"/>
                    <!--<label>Place Of Birth-->
                    <!--</label>-->
                    <!--<input type="text" v-model="place_of_birth"/>-->
                </p>
                <p>
                    <label>Relationship
                    </label>
                    <input type="text" v-model="relationship_person_to_be_contacted_emergency"/>
                    <!--<label>Birth Order-->
                    <!--</label>-->
                    <!--<input type="text" v-model="birth_order"/>-->
                    <!--<label class="obinfo">-->
                    <!--</label>-->
                </p>
                <p>
                    <label>Contact #
                    </label>
                    <input type="text" v-model="relationship_person_to_be_contacted_emergency_no"/>
                </p>
                <p>
                    <label>Address
                    </label>
                    <input type="text" v-model="complete_address"/>
                </p>
            </fieldset>

            <!-- row number four-->
            <fieldset class="row1">
                <legend>Family History (Father Info)
                </legend>
                <p>
                    <label>First Name
                    </label>
                    <input type="text" v-model="f_first_name"/>
                    <label>Tribal Group
                    </label>
                    <input type="text" v-model="f_tribal_group"/>
                </p>
                <p>
                    <label>Middle Name
                    </label>
                    <input type="text" v-model="f_middle_name"/>
                    <label>Contact #
                    </label>
                    <input type="text" v-model="f_contact_no"/>
                </p>
                <p>
                    <label>Last Name
                    </label>
                    <input type="text" v-model="f_last_name"/>
                    <label>Email Address
                    </label>
                    <input type="text" v-model="f_email_address"/>
                </p>
                <p>
                    <label>Current Address
                    </label>
                    <input type="text" v-model="f_current_address"/>
                    <label>Highest Educational Attainment
                    </label>
                    <input type="text" v-model="f_highes_education_attainment"/>
                </p>
                <p>
                    <label>Permanent Address
                    </label>
                    <input type="text" v-model="f_permanent_address"/>
                    <label>Business/Office Address
                    </label>
                    <input type="text" v-model="f_office_address"/>
                </p>
                <p>
                    <label>Religious Affiliation
                    </label>
                    <input type="text" v-model="f_religious_affiliation"/>
                    <label>Position Held
                    </label>
                    <input type="text" v-model="f_position"/>
                </p>
            </fieldset>

            <!--row number 5 mother details-->
            <fieldset class="row1">
                <legend>Family History (Mother Info)
                </legend>
                <p>
                    <label>First Name
                    </label>
                    <input type="text" v-model="m_first_name"/>
                    <label>Tribal Group
                    </label>
                    <input type="text" v-model="m_tribal_group"/>
                </p>
                <p>
                    <label>Middle Name
                    </label>
                    <input type="text" v-model="m_middle_name"/>
                    <label>Contact #
                    </label>
                    <input type="text" v-model="m_contact_no"/>
                </p>
                <p>
                    <label>Last Name
                    </label>
                    <input type="text" v-model="m_last_name"/>
                    <label>Email Address
                    </label>
                    <input type="text" v-model="m_email_address"/>
                </p>
                <p>
                    <label>Current Address
                    </label>
                    <input type="text" v-model="m_current_address"/>
                    <label>Highest Educational Attainment
                    </label>
                    <input type="text" v-model="m_highes_education_attainment"/>
                </p>
                <p>
                    <label>Permanent Address
                    </label>
                    <input type="text" v-model="m_permanent_address"/>
                    <label>Business/Office Address
                    </label>
                    <input type="text" v-model="m_office_address"/>
                </p>
                <p>
                    <label>Religious Affiliation
                    </label>
                    <input type="text" v-model="m_religious_affiliation"/>
                    <label>Position Held
                    </label>
                    <input type="text" v-model="m_position"/>
                </p>
            </fieldset>
            <!--row number six parent marital status-->
            <fieldset class="row1">
                <legend>Parent Status
                </legend>
                <p>
                    <label>Parent Marital Status
                    </label>
                    <input type="text" v-model="marital_status_id"/>
                    <label>Student Live in Present
                    </label>
                    <input type="text" v-model="live_at_present_id"/>
                </p>
            </fieldset>
            <!--socion economic status-->
            <fieldset class="row1">
                <legend>Socio Economic Status
                </legend>
                <p>
                    <label>Family Monthly Income
                    </label>
                    <input type="text" v-model="economic_status_id"/>
                </p>
            </fieldset>
            <!--family transportioa -->
            <fieldset class="row1">
                <legend>Family Transportation
                </legend>
                <p>
                    <label>Transportation
                    </label>
                    <input type="text" v-model="vehicle_id"/>
                </p>
            </fieldset>


            <!-- not in use-->
            <!--<fieldset class="row2">-->
                <!--<legend>Personal dfdkfd;lf;ldk;flkdf-->
                <!--</legend>-->
                <!--<p>-->
                    <!--<label>Name *-->
                    <!--</label>-->
                    <!--<input type="text" class="long"/>-->
                <!--</p>-->
                <!--<p>-->
                    <!--<label>Phone *-->
                    <!--</label>-->
                    <!--<input type="text" maxlength="10"/>-->
                <!--</p>-->
                <!--<p>-->
                    <!--<label class="optional">Street-->
                    <!--</label>-->
                    <!--<input type="text" class="long"/>-->
                <!--</p>-->
                <!--<p>-->
                    <!--<label>City *-->
                    <!--</label>-->
                    <!--<input type="text" class="long"/>-->
                <!--</p>-->
                <!--<p>-->
                    <!--<label>Country *-->
                    <!--</label>-->
                    <!--<select>-->
                        <!--<option>-->
                        <!--</option>-->
                        <!--<option value="1">United States-->
                        <!--</option>-->
                    <!--</select>-->
                <!--</p>-->
                <!--<p>-->
                    <!--<label class="optional">Website-->
                    <!--</label>-->
                    <!--<input class="long" type="text" value="http://"/>-->

                <!--</p>-->
            <!--</fieldset>-->
            <!--<fieldset class="row3">-->
                <!--<legend>Further Information-->
                <!--</legend>-->
                <!--<p>-->
                    <!--<label>Gender *</label>-->
                    <!--<input type="radio" value="radio"/>-->
                    <!--<label class="gender">Male</label>-->
                    <!--<input type="radio" value="radio"/>-->
                    <!--<label class="gender">Female</label>-->
                <!--</p>-->
                <!--<p>-->
                    <!--<label>Birthdate *-->
                    <!--</label>-->
                    <!--<select class="date">-->
                        <!--<option value="1">01-->
                        <!--</option>-->
                        <!--<option value="2">02-->
                        <!--</option>-->
                        <!--<option value="3">03-->
                        <!--</option>-->
                        <!--<option value="4">04-->
                        <!--</option>-->
                        <!--<option value="5">05-->
                        <!--</option>-->
                        <!--<option value="6">06-->
                        <!--</option>-->
                        <!--<option value="7">07-->
                        <!--</option>-->
                        <!--<option value="8">08-->
                        <!--</option>-->
                        <!--<option value="9">09-->
                        <!--</option>-->
                        <!--<option value="10">10-->
                        <!--</option>-->
                        <!--<option value="11">11-->
                        <!--</option>-->
                        <!--<option value="12">12-->
                        <!--</option>-->
                        <!--<option value="13">13-->
                        <!--</option>-->
                        <!--<option value="14">14-->
                        <!--</option>-->
                        <!--<option value="15">15-->
                        <!--</option>-->
                        <!--<option value="16">16-->
                        <!--</option>-->
                        <!--<option value="17">17-->
                        <!--</option>-->
                        <!--<option value="18">18-->
                        <!--</option>-->
                        <!--<option value="19">19-->
                        <!--</option>-->
                        <!--<option value="20">20-->
                        <!--</option>-->
                        <!--<option value="21">21-->
                        <!--</option>-->
                        <!--<option value="22">22-->
                        <!--</option>-->
                        <!--<option value="23">23-->
                        <!--</option>-->
                        <!--<option value="24">24-->
                        <!--</option>-->
                        <!--<option value="25">25-->
                        <!--</option>-->
                        <!--<option value="26">26-->
                        <!--</option>-->
                        <!--<option value="27">27-->
                        <!--</option>-->
                        <!--<option value="28">28-->
                        <!--</option>-->
                        <!--<option value="29">29-->
                        <!--</option>-->
                        <!--<option value="30">30-->
                        <!--</option>-->
                        <!--<option value="31">31-->
                        <!--</option>-->
                    <!--</select>-->
                    <!--<select>-->
                        <!--<option value="1">January-->
                        <!--</option>-->
                        <!--<option value="2">February-->
                        <!--</option>-->
                        <!--<option value="3">March-->
                        <!--</option>-->
                        <!--<option value="4">April-->
                        <!--</option>-->
                        <!--<option value="5">May-->
                        <!--</option>-->
                        <!--<option value="6">June-->
                        <!--</option>-->
                        <!--<option value="7">July-->
                        <!--</option>-->
                        <!--<option value="8">August-->
                        <!--</option>-->
                        <!--<option value="9">September-->
                        <!--</option>-->
                        <!--<option value="10">October-->
                        <!--</option>-->
                        <!--<option value="11">November-->
                        <!--</option>-->
                        <!--<option value="12">December-->
                        <!--</option>-->
                    <!--</select>-->
                    <!--<input class="year" type="text" size="4" maxlength="4"/>e.g 1976-->
                <!--</p>-->
                <!--<p>-->
                    <!--<label>Nationality *-->
                    <!--</label>-->
                    <!--<select>-->
                        <!--<option value="0">-->
                        <!--</option>-->
                        <!--<option value="1">United States-->
                        <!--</option>-->
                    <!--</select>-->
                <!--</p>-->
                <!--<p>-->
                    <!--<label>Children *-->
                    <!--</label>-->
                    <!--<input type="checkbox" value=""/>-->
                <!--</p>-->
                <!--<div class="infobox"><h4>Helpful Information</h4>-->
                    <!--<p>Here comes some explaining text, sed ut perspiciatis unde omnis iste natus error sit voluptatem-->
                        <!--accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore-->
                        <!--veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>-->
                <!--</div>-->
            <!--</fieldset>-->
            <!--<fieldset class="row4">-->
                <!--<legend>Terms and Mailing-->
                <!--</legend>-->
                <!--<p class="agreement">-->
                    <!--<input type="checkbox" value=""/>-->
                    <!--<label>* I accept the <a href="#">Terms and Conditions</a></label>-->
                <!--</p>-->
                <!--<p class="agreement">-->
                    <!--<input type="checkbox" value=""/>-->
                    <!--<label>I want to receive personalized offers by your site</label>-->
                <!--</p>-->
                <!--<p class="agreement">-->
                    <!--<input type="checkbox" value=""/>-->
                    <!--<label>Allow partners to send me personalized offers and related services</label>-->
                <!--</p>-->
            <!--</fieldset>-->
            <div>
                <!--<button class="button">Register &raquo;</button>-->
            </div>
        </form>
    </div>
</template>

<script>
    // import './default.css'
    import axios from 'axios'
    export default {
        mounted(){
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
                    },
        data() {
            return {
                //student details
                first_name: '',
                middle_name: '',
                last_name: '',
                id_no: '',
                //part 2
                gender: '',
                birthday: '',
                place_of_birth: '',
                religion: '',
                tribal: '',
                number: '',
                birth_order: '',
                number_of_siblings: '',
                provincial_address: '',
                current_city_address: '',
                selectedCars: null,
                //part 3
                place: '',
                landlord: '',
                landlord_number: '',
                person_to_be_contacted_emergency: '',
                relationship_person_to_be_contacted_emergency: '',
                relationship_person_to_be_contacted_emergency_no: '',
                complete_address: '',
                //family history part 1 f
                f_first_name: '',
                f_middle_name: '',
                f_last_name: '',
                f_current_address: '',
                f_permanent_address: '',
                f_religious_affiliation: '',
                f_tribal_group: '',
                f_contact_no: '',
                f_email_address: '',
                f_highes_education_attainment: '',
                f_office_address: '',
                f_position: '',
                // family history part 2 mother details
                m_first_name: '',
                m_middle_name: '',
                m_last_name: '',
                m_current_address: '',
                m_permanent_address: '',
                m_religious_affiliation: '',
                m_tribal_group: '',
                m_contact_no: '',
                m_email_address: '',
                m_highes_education_attainment: '',
                m_office_address: '',
                m_position: '',

                //family history PARENT MARITAL STATUS / PARENT STATUS / WHERE DO YOU LVE WT PREENY
                marital_status_id: '',
                live_at_present_id: '',
                //ECONOMIC STATUS or INCOME OF FAMILY
                economic_status_id: '',

                //VEHICLT OR FAMILY TRANSPORTATION
                vehicle_id: '',
            }

        },

        methods: {
            req_up(){
                axios.post('http://127.0.0.1:8000/api/req-update',{
                    first_name:this.first_name,
                    middle_name:this.middle_name,
                    last_name:this.last_name,
                    id_no:this.id_no,
                    email:this.email
                })
            },

            update_() {
                // alert('haha')
                this.first_name = this.$store.state.RecordModule.first_name;
                this.middle_name = this.$store.state.RecordModule.middle_name;
                this.last_name = this.$store.state.RecordModule.last_name;
                this.id_no = this.$store.state.RecordModule.id_no;
                //part 2
                this.gender = this.$store.state.RecordModule.gender;
                this.birthday = this.$store.state.RecordModule.birthday;
                this.place_of_birth = this.$store.state.RecordModule.place_of_birth;
                this.religion = this.$store.state.RecordModule.religion ;
                this.tribal = this.$store.state.RecordModule.tribal;
                this.number = this.$store.state.RecordModule.number;
                this.birth_order = this.$store.state.RecordModule.birth_order;
                this.number_of_siblings = this.$store.state.RecordModule.number_of_siblings;
                this.provincial_address = this.$store.state.RecordModule.provincial_address;
                this.current_city_address = this.$store.state.RecordModule.current_city_address;
                this.selectedCars = this.$store.state.RecordModule.selectedCars;
                //part 3\
                // = this.$store.state.RecordModule.
                this.place = this.$store.state.RecordModule.place;
                this.landlord = this.$store.state.RecordModule.landlord;
                this.landlord_number = this.$store.state.RecordModule.landlord_number;
                this.person_to_be_contacted_emergency = this.$store.state.RecordModule.person_to_be_contacted_emergency;
                this.relationship_person_to_be_contacted_emergency = this.$store.state.RecordModule.relationship_person_to_be_contacted_emergency;
                    this.relationship_person_to_be_contacted_emergency_no = this.$store.state.RecordModule.relationship_person_to_be_contacted_emergency_no;
                this.complete_address  = this.$store.state.RecordModule.complete_address;
                //family history part 1 f
                this.f_first_name  = this.$store.state.RecordModule.f_first_name;
                this.f_middle_name  = this.$store.state.RecordModule.f_middle_name;
                this.f_last_name  = this.$store.state.RecordModule.f_last_name;
                this.f_current_address  = this.$store.state.RecordModule.f_current_address;
                this.f_permanent_address  = this.$store.state.RecordModule.f_permanent_address;
                this.f_religious_affiliation  = this.$store.state.RecordModule.f_religious_affiliation;
                this.f_tribal_group  = this.$store.state.RecordModule.f_tribal_group;
                this.f_contact_no  = this.$store.state.RecordModule.f_contact_no;
                this.f_email_address  = this.$store.state.RecordModule.f_email_address;
                this.f_highes_education_attainment  = this.$store.state.RecordModule.f_highes_education_attainment;
                this.f_office_address  = this.$store.state.RecordModule.f_office_address;
                this.f_position  = this.$store.state.RecordModule.f_position;
                // family history part 2 mother details
                this.m_first_name  = this.$store.state.RecordModule.m_first_name;
                this.m_middle_name  = this.$store.state.RecordModule.m_middle_name;
                this.m_last_name  = this.$store.state.RecordModule.m_last_name;
                this.m_current_address  = this.$store.state.RecordModule.m_current_address;
                this.m_permanent_address  = this.$store.state.RecordModule.m_permanent_address;
                this.m_religious_affiliation  = this.$store.state.RecordModule.m_religious_affiliation;
                this.m_tribal_group  = this.$store.state.RecordModule.m_tribal_group;
                this.m_contact_no  = this.$store.state.RecordModule.m_contact_no;
                this.m_email_address  = this.$store.state.RecordModule.m_email_address;
                this.m_highes_education_attainment  = this.$store.state.RecordModule.m_highes_education_attainment;
                this.m_office_address  = this.$store.state.RecordModule.m_office_address;
                this.m_position  = this.$store.state.RecordModule.m_position;

                //family history PARENT MARITAL STATUS / PARENT STATUS / WHERE DO YOU LVE WT PREENY
                this.marital_status_id  = this.$store.state.RecordModule.marital_status_id;
                this.live_at_present_id  = this.$store.state.RecordModule.live_at_present_id;
                //ECONOMIC STATUS or INCOME OF FAMILY
                this.economic_status_id  = this.$store.state.RecordModule.economic_status_id;

                //VEHICLT OR FAMILY TRANSPORTATION
                this.vehicle_id  = this.$store.state.RecordModule.vehicle_id;

            }
        },
    }

</script>

<style scoped>
    * /*Set's border, padding and margin to 0 for all values*/
    {
        padding: 0;
        margin: 0;
        border: 0;
    }

    body, html {
        color: #373C40;
        font-family: Verdana, Arial, Helvetica, sans-serif;
        height: 100%;
        background-color: #f0f0f0;
        margin: 10px;
    }

    body {
        font-size: 70%;
    }

    p {
        padding: 7px 0 7px 0;
        font-weight: 500;
        font-size: 10pt;
    }

    a {
        color: #656565;
        text-decoration: none;
    }

    a:hover {
        color: #abda0f;
        text-decoration: none;
    }

    h1 {
        font-weight: 200;
        color: #888888;
        font-size: 16pt;
        background: transparent url(./img/h1.png) no-repeat center left;
        padding-left: 33px;
        margin: 7px 5px 8px 8px;
    }

    h4 {
        padding: 1px;
        color: #ACACAC;
        font-size: 9pt;
        font-weight: 100;
        text-transform: uppercase;
    }

    form.register {
        /*width:800px;*/
        margin: 20px auto 0px auto;
        height: 1200px;
        background-color: #fff;
        padding: 5px;
        -moz-border-radius: 20px;
        -webkit-border-radius: 20px;
    }

    form p {
        font-size: 8pt;
        clear: both;
        margin: 0;
        color: gray;
        padding: 4px;
    }

    form.register fieldset.row1 {
        width: 770px;
        padding: 5px;
        float: left;
        border-top: 1px solid #F5F5F5;
        margin-bottom: 15px;
    }

    form.register fieldset.row1 label {
        width: 140px;
        float: left;
        text-align: right;
        margin-right: 6px;
        margin-top: 2px;
    }

    form.register fieldset.row2 {
        border-top: 1px solid #F1F1F1;
        border-right: 1px solid #F1F1F1;
        height: 220px;
        padding: 5px;
        float: left;
    }

    form.register fieldset.row3 {
        border-top: 1px solid #F1F1F1;
        padding: 5px;
        float: left;
        margin-bottom: 15px;
        width: 400px;
    }

    form.register fieldset.row4 {
        border-top: 1px solid #F1F1F1;
        border-right: 1px solid #F1F1F1;
        padding: 5px;
        float: left;
        clear: both;
        width: 500px;
    }

    form.register .infobox {
        float: right;
        margin-top: 20px;
        border: 1px solid #F1F1F1;
        padding: 5px;
        width: 380px;
        height: 98px;
        font-size: 9px;
        background: #FDFEFA url(./img/bg_infobox.gif) repeat-x top left;
    }

    form.register legend {
        color: #27a304;
        padding: 2px;
        margin-left: 14px;
        font-weight: bold;
        font-size: 14px;
        /*font-weight: 100;*/
    }

    form.register label {
        color: #444;
        width: 98px;
        float: left;
        text-align: right;
        margin-right: 6px;
        margin-top: 2px;
    }

    form.register label.optional {
        float: left;
        text-align: right;
        margin-right: 6px;
        margin-top: 2px;
        color: #A3A3A3;
    }

    form.register label.obinfo {
        float: right;
        padding: 3px;
        font-style: italic;
    }

    form.register input {
        width: 140px;
        color: #505050;
        float: left;
        margin-right: 5px;
    }

    form.register input.long {
        width: 247px;
        color: #505050;
    }

    form.register input.short {
        width: 40px;
        color: #505050;
    }

    form.register input[type=radio] {
        float: left;
        width: 15px;
    }

    form.register label.gender {
        margin-top: -1px;
        margin-bottom: 2px;
        width: 34px;
        float: left;
        text-align: left;
        line-height: 19px;
    }

    form.register input[type=text] {
        border: 1px solid #E1E1E1;
        height: 18px;
    }

    form.register input[type=password] {
        border: 1px solid #E1E1E1;
        height: 18px;
    }

    .button {
        background: #abda0f url(./img/overlay.png) repeat-x;
        padding: 8px 10px 8px;
        color: #fff;
        text-decoration: none;
        -moz-border-radius: 5px;
        -webkit-border-radius: 5px;
        -moz-box-shadow: 0 1px 3px rgba(0, 0, 0, 0.5);
        -webkit-box-shadow: 0 1px 3px rgba(0, 0, 0, 0.5);
        text-shadow: 0 -1px 1px rgba(0, 0, 0, 0.25);
        cursor: pointer;
        float: left;
        font-size: 18px;
        margin: 10px;
    }

    form.register input[type=text].year {
        border: 1px solid #E1E1E1;
        height: 18px;
        width: 30px;
    }

    form.register input[type=checkbox] {
        width: 14px;
        margin-top: 4px;
    }

    form.register select {
        border: 1px solid #E1E1E1;
        width: 130px;
        float: left;
        margin-bottom: 3px;
        color: #505050;
        margin-right: 5px;
    }

    form.register select.date {
        width: 40px;
    }

    input:focus, select:focus {
        background-color: #efffe0;
    }

    p.info {
        font-size: 7pt;
        color: gray;
    }

    p.agreement {
        margin-left: 15px;
    }

    p.agreement label {
        width: 390px;
        text-align: left;
        margin-top: 3px;
    }


</style>