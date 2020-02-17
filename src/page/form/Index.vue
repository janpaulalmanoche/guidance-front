<template>
    <div>
        <div class="fluid">
            <h2>Table of data <small></small></h2>
            <ul class="responsive-table">
                <li class="table-header">
                    <div class="col col-2">Job Id</div>
                    <div class="col col-2">Customer Name</div>
                    <div class="col col-2">Amount Due</div>
                    <div class="col col-2">Payment Status</div>
                    <div class="col col-2">Status</div>
                    <div class="col col-2">Action</div>
                </li>
                <li class="table-row">
                    <div class="col col-2" data-label="Job Id">42235</div>
                    <div class="col col-2" data-label="Customer Name">John Doe</div>
                    <div class="col col-2" data-label="Amount">$350</div>
                    <div class="col col-2" data-label="Payment Status">Pending</div>
                    <div class="col col-2" data-label="Status">None</div>
                    <div class="col col-2" data-label="Status">Update</div>
                </li>

            </ul>
        </div>
    </div>
</template>

<script>
import './index.scss'
    export default {

    }
</script>

<style scoped>

</style>