<template>
    <div>
        <div class="fluid">
            <h2>Department <small></small></h2>
            <ul class="responsive-table">
                <li class="table-header">
                    <div class="col col-2">Department</div>
                    <div class="col col-2">Abbreviation</div>
                    <div class="col col-2">Action</div>
                </li>
                <li class="table-row" v-for="d in departments_">
                    <div class="col col-2" data-label="Job Id">{{d.department}}</div>
                    <div class="col col-2" data-label="Customer Name">{{d.a}}</div>
                    <div class="col col-2" data-label="Status">Update</div>
                </li>

            </ul>
        </div>
    </div>
</template>

<script>
    import './index.scss'
    import {mapState,mapMutations} from 'vuex';
    export default {
        mounted(){
          this.$store.dispatch('UPDATE_DEPARTMENT_A')
        },
        data() {
            return {

            }
        },
        computed: mapState({
                    departments_: state => state.DepartmentModul.departments

        }),
    }
</script>

<style scoped>

</style>