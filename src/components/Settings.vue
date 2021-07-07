<template>
    <div>
        <h1>Hello settings</h1>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                user: {}
            }
        },
        mounted () {
            this.user = JSON.parse(localStorage.getItem('vuex'))
        }
    }
</script>

<style scoped>

</style>
