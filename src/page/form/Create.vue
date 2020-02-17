<template>
    <div>
        <div id="wrap" class="input">
            <header class="input-header">
                <!--<h1>Input Text/Password Animation</h1>-->
            </header>
            <section class="input-content">
                <h2>Input Text/Password Animation<span>Only CSS</span></h2>
                <div class="input-content-wrap">

                    <dl class="inputbox">
                        <dt class="inputbox-title">Input Text</dt>
                        <dd class="inputbox-content">
                            <input id="input0" type="text" required/>
                            <label for="input0">ID</label>
                            <span class="underline"></span>
                        </dd>
                    </dl>

                    <dl class="inputbox">
                        <dt class="inputbox-title">Input Password</dt>
                        <dd class="inputbox-content">
                            <input id="input1" type="password" required/>
                            <label for="input1">Password</label>
                            <span class="underline"></span>
                        </dd>
                    </dl>

                    <dl class="inputbox">
                        <dt class="inputbox-title">Input Password</dt>
                        <dd class="inputbox-content">
                            <input id="input1" type="password" required/>
                            <label for="input1">Password</label>
                            <span class="underline"></span>
                        </dd>
                    </dl>

                    <div class="btns">
                        <button class="btn btn-confirm">Sign In</button>
                        <button class="btn btn-cancel">Cancel</button>
                    </div>
                </div>
            </section>
        </div>
    </div>
</template>

<script>
    import './create.scss'

    export default {}
</script>

<style scoped>

</style>